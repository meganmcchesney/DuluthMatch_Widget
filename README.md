This project is a re-write of an MVC web application built for a non-profit organization. The application offers users a list of choices.
Choices become selections, which match to a contact person who is associated with the choices in some way.
Once a contact person is matched with the selections the end user has made, the end user has the option to request contact from their matched contact.

The application has an administrative web application that controls contact matching logic and serves the api that integrates with this application.

This is designed to become an iframable widget so that more web applications than the initial non-profit can use the matching technique provided.

This project was bootstrapped with Create React App. It uses redux, thunk and a custom css to provide styling and asychronous integration with it's API.