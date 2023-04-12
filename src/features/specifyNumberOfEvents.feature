Feature: Specify Number of Events

Scenario: When user hasn’t specified a number, 32 is the default number.
Given the page is loaded upon search request sent
When the user did not specify a number for returned events
Then the page will load 32 event elements

Scenario: User can change the number of events they want to see.
Given the page is loaded upon search request sent
When the user specifies a number for returned events
Then the page will load the specified number of event elements
