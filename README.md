# API Template

An api template showing how an API works. Uses express.
Please look below for the setps to set this up.

### Config

1. Go to config.js
2. Edit the `port` with the port you want to run the API on.

### Starting the API

1. After you're done with editing the config, save the file and run `npm i` in your terminal.
2. This'll install all the packages the API uses.
3. Start the API with `node server.js`. If you're locally hosting the API, go to `localhost:your_port_here` to access it.

### List of endpoints:


| Type of Request | Endpoints | Required Paramters | Description                                         |
| --------------- | --------- | ------------------ | --------------------------------------------------- |
| GET             | `/quote`  | none               | Displays a random quote along with its author.      |
| GET             | `/joke`   | none               | Displays a random joke.                             |
| GET             | `/base64` | type, text         | Encodes and decodes text to and from base64.        |
----------------------------------------------------------------------------------------------------------

### If you need any help, you can DM me on Discord (FC#5104) for help.
