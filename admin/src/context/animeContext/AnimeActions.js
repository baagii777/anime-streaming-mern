export const getAnimesStart = () => ({
  type: "GET_ANIMES_START",
});

export const getAnimesSuccess = (animes) => ({
  type: "GET_ANIMES_SUCCESS",
  payload: animes,
});

export const getAnimesFailure = () => ({
  type: "GET_ANIMES_FAILURE",
});

export const createAnimeStart = () => ({
  type: "CREATE_ANIME_START",
});

export const createAnimeSuccess = (anime) => ({
  type: "CREATE_ANIME_SUCCESS",
  payload: anime,
});

export const createAnimeFailure = () => ({
  type: "CREATE_ANIME_FAILURE",
});

export const updateAnimeStart = () => ({
  type: "UPDATE_ANIME_START",
});

export const updateAnimeSuccess = (anime) => ({
  type: "UPDATE_ANIME_SUCCESS",
  payload: anime,
});

export const updateAnimeFailure = () => ({
  type: "UPDATE_ANIME_FAILURE",
});

export const deleteAnimeStart = () => ({
  type: "DELETE_ANIME_START",
});

export const deleteAnimeSuccess = (id) => ({
  type: "DELETE_ANIME_SUCCESS",
  payload: id,
});

export const deleteAnimeFailure = () => ({
  type: "DELETE_ANIME_FAILURE",
});
