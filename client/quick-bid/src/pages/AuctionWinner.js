import { useState, useEffect } from 'react'
import useAuth from '../hooks/useAuth'
import useAI2 from '../hooks/useAI2'
import { useNavigate, NavLink, useParams } from 'react-router-dom'
import { formatDate } from '../utils/DateFormat'

function Auctionwinner() {
    const auth = useAuth()
    const [auctionData, setAuctionData] = useState([])
    const nav = useNavigate()
    const AI2 = useAI2()

    const goToAuctionDetail = (id) => {
        nav(`/auctiondetails/${id}`); // Navigating to auction detail page
    };

    const goToPayment = (id) => {
        nav(`/payment/${id}`); // Navigating to auction detail page
    };

    async function getAuctionData() {
        try {
            const res = await AI2.get(`/auctionwinner/`)
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
                            <img src={"http://127.0.0.1:8000"+e.auction_item.image} className="card-img-top" alt="item image" />
                            <div className="card-body">
                                <h5 className="card-title">{e.auction_item.title}</h5>
                                <p><strong>Starting Bid:</strong> ${e.auction_item.starting_bid}</p>
                                <p><strong>Current Bid:</strong> ${e.auction_item.current_bid}</p>
                                

                                <div className="d-flex justify-content-between">
                                <button type="button" className="btn btn-sm btn-info"
                                    onClick={() => goToAuctionDetail(e.id)}> Details
                                </button>

                                <button type="button" className="btn btn-sm btn-warning"
                                    onClick={() => goToPayment(e.id)}> Payment
                                </button>
                                    
                                </div>

                            </div>

                        </div>
                    </div>
                    
                ))}
        </div >
        </>
    )

}

export default Auctionwinner