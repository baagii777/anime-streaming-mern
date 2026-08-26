const AnimeReducer = (state, action) => {
  switch (action.type) {
    case "GET_ANIMES_START":
      return {
        animes: [],
        isFetching: true,
        error: false,
      };
    case "GET_ANIMES_SUCCESS":
      return {
        animes: action.payload,
        isFetching: false,
        error: false,
      };
    case "GET_ANIMES_FAILURE":
      return {
        animes: [],
        isFetching: false,
        error: true,
      };
    case "CREATE_ANIME_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "CREATE_ANIME_SUCCESS":
      return {
        animes: [...state.animes, action.payload],
        isFetching: false,
        error: false,
      };
    case "CREATE_ANIME_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "UPLOAD_ANIME_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "UPLOAD_ANIME_SUCCESS":
      return {
        animes: state.animes.map(
          (anime) => anime._id === action.payload._id && action.payload
        ),
        isFetching: false,
        error: false,
      };
    case "UPLOAD_ANIME_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    case "DELETE_ANIME_START":
      return {
        ...state,
        isFetching: true,
        error: false,
      };
    case "DELETE_ANIME_SUCCESS":
      return {
        animes: state.animes.filter((anime) => anime._id !== action.payload),
        isFetching: false,
        error: false,
      };
    case "DELETE_ANIME_FAILURE":
      return {
        ...state,
        isFetching: false,
        error: true,
      };
    default:
      return { ...state };
  }
};

export default AnimeReducer;
