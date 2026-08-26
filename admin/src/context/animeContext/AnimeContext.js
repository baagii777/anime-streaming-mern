import AnimeReducer from "./AnimeReducer";
import { createContext, useReducer } from "react";

const INITIAL_STATE = {
  animes: [],
  isFetching: false,
  error: false,
};

export const AnimeContext = createContext(INITIAL_STATE);

export const AnimeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AnimeReducer, INITIAL_STATE);

  return (
    <AnimeContext.Provider
      value={{
        animes: state.animes,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AnimeContext.Provider>
  );
};
