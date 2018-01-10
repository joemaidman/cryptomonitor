# Cryptomonitor [![Build Status](https://travis-ci.org/joemaidman/cryptomonitor.svg?branch=master)](https://travis-ci.org/joemaidman/cryptomonitor)

Cryptomonitor is a  responsive, prototype dashboard to display basic cyrptocurrency pricing data for the largest coins by market cap. The project is implemented using React for the view layer and Redux to manage state. Material-UI has been used to follow the principles of good design. Live and historic pricing is provided by the Cryptocompare API.

A demo is availale <a href='https://cryptomonitor.netlify.com' target='_blank'>here</a>.

## Notes on functionality
* Displays live pricing for the twelve largest cryptocurrencies
* Toggle base currency (USD/GBP/EUR)
* Indicates direction of last price tick
* Calculates percentage return over 1D
* Chart price and volume of each coin over 1W, 1M, 1Y
* Short coin description and link

## Screenshots
**Desktop**

![home](https://github.com/joemaidman/cryptomonitor/blob/master/screenshots/desktop.png)

**Mobile**

![Mobile](https://github.com/joemaidman/cryptomonitor/blob/master/screenshots/mobile.png)

**Expanded Widget**
![Widget](https://github.com/joemaidman/cryptomonitor/blob/master/screenshots/widget.png)

## Technologies

**Boilerplate**
- create-react-app

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

## Usage
- Clone the repo
- `cd` to the project folder
- Run `npm i`

To test:
- Run `npm test`

To run the application on localhost:
- Run `npm start`
- Visit http://localhost:3000/

## Improvements
* Add server component with web sockets
* Display market cap for each coin
* User accounts with custom settings
* Portfolio upload and valuation
* Returns analysis
* Drag & Drop with order saved to user account
* Sort order (alphabetical, market cap, price change)

## Outstanding questions (refactoring)
* Pattern for managing UI configuration state specific to each component. Putting it into the global state feels wrong. Is it ok to use local react state? Packages exist that appear to solve this problem.
* Where and when to call data from a resource. Currently this is happening in componentWillMount which feels wrong. Sagas may help.
* Where to trigger a call to update from a resource based on something else changing - should this happen in the action creator, the reducer or the component. None of these seem like a good option. Sagas may help.
* Should action creators all live together?
* Pattern to reach into state object and update (immutably) a specific thing. Immutable js may help.
* Should action creators accept arguments?
* Should action payloads need to tell the reducer what they are trying to update/know what is 'topic' is?
* Am I misusing mapDispatchToProps for async operations?
* React seems to naturally lead to overuse of if & switch statements (conditional rendering based on props) - what am I doing wrong?
* Adding an enum library made things worse - what is the standard for JS (without using typescript)?