# MoviePlanet 

MoviePlanet is a web application built with React.js and Sass, utilizing the TMDB (The Movie Database) API to display information about animated movies and TV shows. Users can browse popular movies and series, search for specific titles, and view detailed information about each movie and series.

## Table of Contents

- [Features](#features)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [API Integration](#api-integration)
- [Contributing](#contributing)

## Features

- Browse popular movies and series
- Search for movies/series by title
- View detailed information about each movie/series including synopsis, cast info, release date, trailers, and rating
- Responsive design for mobile and desktop users

## Demo

Check out the live demo of the app [here](https://ayubabdiaziz.github.io/movieplanet).

## Installation

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/ayubabdiaziz/movieplanet.git
    npm install
    cd MoviePlanet
    ```

2. Install dependencies:
    ```bash
    npm install react-router-dom axios query-string sass swiper --save
    ```

3. Configure the API key:
    ```env
    Replace the API key with your own in the following line in the file `apiConfig.js`:
    apiKey: 'your_tmdb_api_key'
    ```

4. Start the development server:
    ```bash
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

- Use the search bar to find movies/series by title.
- Click on a movie/series card to view detailed information about the movie/series.
- Navigate through different pages to explore more movies and series.

## Technologies Used

- **React.js**: A JavaScript library for building user interfaces.
- **Sass**: A CSS preprocessor to write more maintainable and scalable styles.
- **TMDB API**: An API for accessing a wide range of movie data.

## API Integration

This app uses the TMDB API to fetch movie and series data. To use the API, you need to sign up at [TMDB](https://www.themoviedb.org/) and obtain an API key. This key should be stored in the `apiConfig.js` file in the `api` folder of the project as shown in the installation instructions.

API requests are made using the `axios` library, and data is handled using React's state management.

## Contributing

Contributions are welcome! If you have suggestions for improvements or find any bugs, please open an issue or submit a pull request.

To contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Make your changes.
4. Commit your changes (`git commit -m 'Add some feature'`).
5. Push to the branch (`git push origin feature/YourFeature`).
6. Open a pull request.

---

Stay Curious by [Ayub Abdiaziz](https://github.com/ayubabdiaziz)
