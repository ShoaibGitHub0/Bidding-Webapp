import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useAI2 from '../hooks/useAI2'
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { formatDate } from '../utils/DateFormat'

function MyAuctions() {
    const auth = useAuth()
    const [auctionData, setAuctionData] = useState([])
    const nav = useNavigate()
    const AI2 = useAI2()

    const goToAuctionDetail = (id) => {
        nav(`/auctiondetails/${id}`); // Navigating to auction detail page
    };

    
    const endAuction = async (id) => {
        try {
            const response = await AI2.post(`/auctionwinner/${id}/`);
            if (response.status === 201) {
                alert('Auction Ended');
                nav('/myauctions/')
            }
        } catch (e) {
            console.log(e);
            if (e.response) {
                const errorMessage = e.response.data || "Something went wrong. Please try again.";
                alert(errorMessage);  // Show the error message to the user
            } else {
                alert("An unknown error occurred. Please try again later.");
            }
        }
    };
    

    async function getAuctionData() {
        try {
            const res = await AI2.get(`/myauctions/`)
            if (res.status == 200) {
                console.log(res)
                setAuctionData(res.data)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => { getAuctionData() }, [])

    return (
        <>
            <div className="row">
                {auctionData.map((e) => (
                    <div className="col-md-3 mb-1" key={e.id}>
                        <div className="card" style={{ width: "18rem" }}>
                            <img src={e.image} className="card-img-top" alt="item image" />
                            <div className="card-body">
                                <h5 className="card-title">{e.title}</h5>
                                <p><strong>Starting Bid:</strong> ${e.starting_bid}</p>
                                <p><strong>Current Bid:</strong> ${e.current_bid}</p>
                                <p><strong>Status:</strong> {e.status}</p>
                                <p><strong>End Time:</strong> {formatDate(e.end_time)}</p>
                                
                                <div className="d-flex justify-content-between">
                                    {e.status == 'live' ?(
                                    <button type="button" className="btn btn-sm btn-danger"
                                    onClick={() => endAuction(e.id)}> End </button>
                                        ):
                                    <div></div>}
                                    <button type="button" className="btn btn-sm btn-info" 
                                    onClick={() => goToAuctionDetail(e.id)}> Details
                                    </button>
                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
    
}


export default MyAuctions