Feature: Show or hide details when clicking on button

Scenario: User can expand an event to see its details.
Given the list of events has been loaded
When user clicks on “Details” button for an event
Then the event element will be expanded to show the event details

Scenario: User can collapse an event to hide its details.
Given the list of events has been loaded
When user clicks on “Hide details” button for an event
Then the event element will collapse the event details
