### Weather app

- This app is created with CRA (Create React app) with typescript
- For testing I am using react testing library
- For styling I will be using styled-components
- For state management I will be using redux (with thunk)
- For API calls I am using axios.
- For Weather data I will be using `openweathermap`
- Node version used while development -> `node v14.17.2`

## How to run ?

- Create `.env` file on root
- add openweathermap API key inside `.env` -> `REACT_APP_API_KEY=YOUR_API_KEY`
- For building the app run -> `yarn build`
- For running development build run `yarn start`
- For testing you can run -> `yarn test`

## How to deploy ?

- We have not created pipeline but we have surge command setup in package json.
- Do `yarn build`
- then run `yarn fire` to publish the application http://mauliweatherapp.surge.sh/
