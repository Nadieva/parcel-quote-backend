# parcel-quote-backend

User calculates the final price for the delivery of parcels with different weights. To do so, weights must be entered and routes selected in the form. The web application is [here](https://parcel-quote.netlify.app/).

The project is made of two parts:

- [frontend](https://github.com/Nadieva/parcel-quote-frontend)
- [backend](https://github.com/Nadieva/parcel-quote-backend)

The backend part is connected to a Mongo database. It contains three collections:

- a configured price list based on the routes
- a configured country list
- a parcel list that will be filled according to the entered weights in the form. The final delivery cost will be calculated according to the selected destination and departure

## How to use it

Please follow the instructions in your terminal to use the application :

- `git clone https://github.com/Nadieva/parcel-quote-backend.git`
- `cd parcel-quote-backend`
- `npm install`
- `npm start`

- You can access the api :
  - locally:
    - http://localhost:5000/api/prices
    - http://localhost:5000/api/parcels
    - http://localhost:5000/api/prices
      or
  - remotely:
    - https://parcel-quote.herokuapp.com/api/prices
    - https://parcel-quote.herokuapp.com/api/parcels
    - https://parcel-quote.herokuapp.com/api/parcels

## Installation

- react: 17.0.2
- react-dom: 17.0.2
- react-router-dom: 5.2.0
- concurrently: 6.2.0
- cors: 2.8.5
- express : 4.17.1
- mongoose : 5.13.2
- nodemon 2.0.9

## Resources

- [Heroku](https://www.heroku.com/)
- [React](https://github.com/facebook/react)
- [MongoDB](https://www.mongodb.com/)
- [Express](http://expressjs.com/)
