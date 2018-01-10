# Cryptomonitor [![Build Status](https://travis-ci.org/joemaidman/cryptomonitor.svg?branch=master)](https://travis-ci.org/joemaidman/cryptomonitor)

![Logo](https://github.com/joemaidman/cryptomonitor/blob/master/src/assets/logo.png?raw=true)

Cryptomonitor is a  responsive, prototype dashboard to display basic cyrptocurrency pricing data for the largest coins by market cap. The project is implemented using React for the view layer and Redux to manage state. Material-UI has been used to follow the principles of good design. Live and historic pricing is provided by the Cryptocompare API.

A demo is availale <a href='https://cryptomonitor.netlify.com' target='_blank'>here</a>.

## Notes on functionality
* Displays live pricing for the twelve largest cryptocurrencies
* Toggle base currency (USD/GBP/EUR)
* Indicates direction of last price tick
* Calculates % return over 1D
* Chart price and volume of each coin over 1W, 1M, 1Y
* Short coin description and link

## Screenshots
**Desktop**

![home](https://github.com/joemaidman/cryptomonitor/blob/master/screenshots/desktop.png)

**Mobile**

![Mobile](https://github.com/joemaidman/cryptomonitor/blob/master/screenshots/mobile.png)

**Expanded Widget**
![Widget](https://github.com/joemaidman/cryptomonitor/blob/master/screenshots/widget.png)

## Technologies used

**Boilerplate**


**Frontend**
- React
- Redux

**Backend**
- TBC

**Testing**
- Jest
- Enzyme

**Deployment**
- Heroku

## Installation
- Clone the repo
- `cd` to the project folder
- Run `npm i`

To test:
- Run `npm test`

To run the application on localhost:
- Run `npm start`
- Visit http://localhost:3000/

## Potential feature improvements
* Add server component with web sockets
* Display market cap for each coin
* User accounts with custom settings
* Portfolio upload and valuation
* Returns analysis
* Drag & Drop with order saved to user account
* Sort order (alphabetical, market cap, price change)