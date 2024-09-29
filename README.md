# UV Index API

This project is a simple Express.js application that retrieves and displays the UV index for a specific location based on latitude, longitude, and date using the OpenUV API.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Key](#api-key)
- [License](#license)

## Features

- Get UV index data based on latitude, longitude, altitude, and date.
- Use of Express.js for the server.
- Asynchronous calls to the OpenUV API using Axios.
- Basic error handling for API requests.

## Technologies Used

- **Node.js**
- **Express.js**
- **Axios**
- **Body-Parser**
- **dotenv** for environment variable management
- **EJS** for rendering views

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/uv-index-api.git
   ```

2. Navigate to the project directory:

   ```bash
   cd uv-index-api
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the project and add your API key:

   ```plaintext
   API_KEY=your_api_key_here
   ```

5. Make sure to add `.env` and `node_modules` to your `.gitignore` file.

## Usage

1. Start the server:

   ```bash
   npm start
   ```

   The server will run on [http://localhost:3000](http://localhost:3000).

2. Open your web browser and navigate to the root URL to access the application.

3. Input the latitude, longitude, altitude, and date to retrieve the UV index.

## API Key

To use this application, you need an API key from OpenUV. You can sign up for an API key at [OpenUV](https://openuv.io/).

Once you have your API key, replace `your_api_key_here` in the `.env` file.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
```
