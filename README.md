# meet-app

Objectives:
The objectives of this project are to build a serverless, progressive web application (PWA), with React and using a test-driven development technique. AWS Lambda is used for serverless dev and directly retrieve data from Google Calendar API.

![Screen Shot 2023-03-26 at 18 23 14](https://user-images.githubusercontent.com/106661375/227819333-e9a13d35-d303-4574-8090-7af881b6c68e.png)


Key features:
1. filter events by city
2. show or hide event details
3. specify number of events
4. use the app when offline
5. an app shortcut to home screen
6. view a chart of upcoming events by city

Scenarios:
FEATURE : SHOW/HIDE AN EVENT'S DETAILS

• Scenario 1: An event element is collapsed by default.
Given:the page is loaded upon search request sent
When: user views the loaded page
Then: all event elements are collapsed, displaying event names

• Scenario 2: User can expand an event to see its details.
Given:the list of events has been loaded
When: user clicks on “Show details” button for an event
Then: the event element will be expanded to show the event details

• Scenario 3: User can collapse an event to hide its details.
Given:the list of events has been loaded
When: user clicks on “Show details” button for an event
Then: the event element will be expanded to show the event details

FEATURE : SPECIFY NUMBER OF EVENTS

• Scenario 1: When user hasn’t specified a number, 32 is the default number.
Given:the page is loaded upon search request sent
When: the user did not specify a number for returned events Then: the page will load 32 event elements

• Scenario 2: User can change the number of events they want to see.
Given:the page is loaded upon search request sent
When: the user specifies a number for returned events
Then: the page will load the specified number of event elements


FEATURE : USE THE APP WHEN OFFLINE
• Scenario 1: Show cached data when there’s no internet connection.
Given:the app is running offline
When: the user view page without internet connection Then: the page will load the cached data

• Scenario 2: Show error when user changes the settings (city, time range)
Given:the user is using the app offline
When: the user changes settings and causes errors Then: the page will show a corresponding error message

FEATURE : DATA VISUALIZATION

• Scenario 1: Show a chart with the number of upcoming events in each city.
Given:the page is loaded
When: the user clicks on a city to see the number of upcoming events Then: a chart with number of upcoming events is displayed
