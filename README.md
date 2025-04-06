# Bidding-Webapp
This project is an auction system where users can create auctions for items, place bids on others' auctions, update auctions, and delete them. The system is fully authenticated using JWT tokens. The backend is built using Django Rest Framework and the frontend is built with React.

Features

    User Authentication: Secure authentication using JWT tokens.

    Auction Creation: Users can create auctions for any item.

    Bidding System: Users can place bids on existing auctions.

    Auction Management: Users can update and delete their auctions.

    User Profile Pictures: Users can upload and manage their profile images.

    Item Images: Items in the auction can have images uploaded.

Tech Stack

    Backend: Django Rest Framework (DRF)

    Frontend: React

    Authentication: JWT (JSON Web Tokens)

    Database: SQLite (default, configurable to any other database)

    Libraries:

        djangorestframework

        djangorestframework-simplejwt

        django-cors-headers

        Pillow

Project Setup

Follow the steps below to set up the project on your local machine.
1. Backend Setup (Django)
1.1. Create a Virtual Environment

Navigate to the server folder and create a virtual environment for the backend:

    cd server
    python -m venv venv

1.2. Activate the Virtual Environment

    source venv/bin/activate

1.3. Install Backend Dependencies

    pip install djangorestframework djangorestframework-simplejwt django-cors-headers Pillow

1.4. Create Media Folder
Create the media folder where user profile pictures and item images will be stored:

    mkdir -p server/quick_bid/media

1.5. Run Database Migrations
Make sure your database is up-to-date by running:

    python manage.py makemigrations
    python manage.py migrate

1.6. Start the Backend Server
Start the Django backend server:

    python manage.py runserver

Your backend should now be running at http://127.0.0.1:8000/.

2. Frontend Setup (React)
2.1. Install Frontend Dependencies
Navigate to the client/quick-bid directory and install the required libraries using npm:

        cd client/quick-bid
        npm install

2.2. Start the Frontend Server
Start the React development server:

    npm start

Your frontend should now be running at http://localhost:3000/.
