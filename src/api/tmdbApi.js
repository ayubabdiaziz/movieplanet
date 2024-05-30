import axiosClient from "./axiosClient";

export const category = {
    movie: 'movie',
    tv: 'tv',
}

export const movieType = {
    upcoming: 'upcoming',
    popular: 'popular',
    top_rated: 'top_rated',
}

export const tvType = {
    popular: 'popular',
    top_rated: 'top_rated',
    on_the_air: 'on_the_air',
}

const tmdbApi = {
    getMoviesList: (type, params) => {
        const url = 'discover/movie';
        const queryParams = {
            ...params,
            without_genres: 16, // Exclude animation genre
        };
        return axiosClient.get(url, { params: queryParams });
    },
    getTvList: (type, params) => {
        const url = 'discover/tv';
        const queryParams = {
            ...params,
            without_genres: 16, // Exclude animation genre
        };
        return axiosClient.get(url, { params: queryParams });
    },
    getVideos: (cate, id) => {
        const url = category[cate] + '/' + id + '/videos';
        return axiosClient.get(url, {params: {}});
    },
    search: (cate, params) => {
        const url = 'search/' + category[cate];
        return axiosClient.get(url, params);
    },
    detail: (cate, id, params) => {
        const url = category[cate] + '/' + id;
        return axiosClient.get(url, params);
    },
    credits: (cate, id) => {
        const url = category[cate] + '/' + id + '/credits';
        return axiosClient.get(url, {params: {}});
    },
    similar: (cate, id) => {
        const url = category[cate] + '/' + id + '/similar';
        return axiosClient.get(url, {params: {}});
    },
}

export default tmdbApi;
