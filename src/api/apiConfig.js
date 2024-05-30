const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'fb4f6b7100c1c2d1e02bc663ae41764e',
    originalImage: (imgPath) =>  `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) =>  `https://image.tmdb.org/t/p/w500/${imgPath}`,
}

export default apiConfig;