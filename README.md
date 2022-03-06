# GPN Airport API

### :mag_right: API Version

:sparkles: Release version: 1.0.0

### Requirements

- **Node.js**

You can download the lasted Node version [here](https://nodejs.org/es/)

- **PostgreSQL**

You can download the lasted PostgreSQL version [here](https://www.postgresql.org/download/)

### :wrench: Setup

- Install dependencies:

```bash

npm i

```

- Create and setup .env file on proyect root:

You should follow `.env.example` to see required variables

- Setup database:

Create a PostgresSQL database, under the same name you put in `.env`. _Note: dont't worry about tables or collections, the API will set them up._

### :rocket: Running the app

- Run the project locally:

```bash

npm run start

```

- Run build with nodemon:

```bash

npm run start:dev

```

### :green_book: API Reference

#### :bulb: When running the proyect locally go to https://localhost:3000/api for documentation.

### :test_tube: Testing

- Once the proyect is running go to `src/data/instert.sql` and instert the test values on the database.
