const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'your_tmdb_api_key',
    originalImage: (imgPath) =>  `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) =>  `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;