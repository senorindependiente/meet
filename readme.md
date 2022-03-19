# Meet App
> Serverless, progressive web application (PWA) with React using a
> test-driven development (TDD) technique. The application uses the Google
> Calendar API to fetch upcoming events


## Table of Contents
* [General Info](#general-information)
* [BDD ](#BDD)
* [Technologies Used](#technologies-used)
* [Features](#features)
* [Setup](#setup)
* [Usage](#usage)



## General Information


## BDD 
FEATURE 1: FILTER EVENTS BY CITY

Scenatio 1:When user has not searched for a city, show upcoming events from all cities.

Given user hasn’t searched for any city When the user opens the app Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.

Given the main page is open When user starts typing in the city textbox Then the user should see a list of cities (suggestions) that match what they’ve typed

Scenario 3: User can select a city from the suggested list.

Given the user was typing “Berlin” in the city textbox And the list of suggested cities is showing When the user selects a city (e.g., “Berlin, Germany”) from the list Then their city should be changed to that city (i.e., “Berlin, Germany”) And the user should receive a list of upcoming events in that city

FEATURE 2: SHOW/HIDE AN EVENT’S DETAILS

Scenario 1: An event element is collapsed by default.

Given user's search resulted in event elements by chosen city When user sees event elements User should see the collapsed by default event element

Scenario 2: User can expand an event to see its details.

Given user did not expand an event element to see more details When user expands an event element User should see more details of an event element

Scenario 3: User can collapse an event to hide its details.


Given the user did not collapse an event element User collapses an event element User should see less details of an event element

FEATURE 3: SPECIFY NUMBER OF EVENTS

Scenario 1: When user hasn’t specified a number, 32 is the default number.

Given the user selected a city before User sees an added input parameter field to choose number of events shown User should be able to get a default number of 32 events

Scenario 2: User can change the number of events they want to see.

Given user did not modify number User changes number User should be able to see more/less event elements depending on the number

FEATURE 4: USE THE APP WHEN OFFLINE

Scenario 1: Show cached data when there’s no internet connection.

Given user was online before User is offline now User´s data should be cached

Scenario 2: Show error when user changes the settings (city, time range).

Given user did not change settings User want to change settings User should see error message when trying to change settings

FEATURE 5: DATA VISUALIZATION

Scenario 1: Show a chart with the number of upcoming events in each city.

Given user did not open charts User opens chart User should be able to see a chart of upcoming events in each city


## Technologies Used
- React 



## Features





## Setup



## Usage


`write-your-code-here`