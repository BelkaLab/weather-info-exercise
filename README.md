# Weather info
### A simple React + Redux exercise

The goal of this exercise is to build a tiny single-page web application using *react* and *redux*.

The web application consists in a dropdown which allows the selection of a city from a given list. Once you select a city it is added below the dropdown, showing the current weather for that city.

![Mockup](weather-info.png)

Each item in the list should:
  - Display the city name and the current weather (eg: "Scattered clouds") as given by the weather API (icon is appreciated, but not required)
  - Provide `refresh` and `remove` buttons
  - Gracefully manage API errors

## Weather API
The data should be fetched from [https://openweathermap.org/api](https://openweathermap.org/api)

An api key is already provided in `src/data/config.js`. Please mind there is a 60 requests/minute API limit, if it is exceeded you'll be locked out for some time (~1h). Not nice.

To simplify the city selector dropdown, you'll find a subset of cities to show in `src/data/cities.json`

## What's in this repo
A minimal setup (made with [react-create-app](https://github.com/facebookincubator/create-react-app)) running react and redux. Feel free to use it or trash it completely and start from scratch.

## Hints
- Know what you are doing. Copy-pasting from StackOverflow is fine as long as you understand what's going on.
- Focus on the code, rather than the esthetics.
  - The linter is your friend.


### Bonus track
Persist the selected cities across sessions.
