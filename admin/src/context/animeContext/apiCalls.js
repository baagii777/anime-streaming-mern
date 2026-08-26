import axios from "axios";
import {
  createAnimeFailure,
  createAnimeStart,
  createAnimeSuccess,
  deleteAnimeFailure,
  deleteAnimeStart,
  deleteAnimeSuccess,
  getAnimesFailure,
  getAnimesStart,
  getAnimesSuccess,
  updateAnimeStart,
  updateAnimeSuccess,
  updateAnimeFailure,
} from "./AnimeActions";

export const getAnimes = async (dispatch) => {
  dispatch(getAnimesStart());
  try {
    const res = await axios.get("/animes", {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(getAnimesSuccess(res.data));
  } catch (err) {
    dispatch(getAnimesFailure());
  }
};

//create
export const createAnime = async (anime, dispatch) => {
  dispatch(createAnimeStart());
  try {
    const res = await axios.post("/animes", anime, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(createAnimeSuccess(res.data));
  } catch (err) {
    dispatch(createAnimeFailure());
  }
};

//update
export const updateAnime = async (id, dispatch) => {
  dispatch(updateAnimeStart());
  try {
    const res = await axios.put("/animes" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(updateAnimeSuccess(res.data));
  } catch (err) {
    dispatch(updateAnimeFailure());
  }
};

//delete
export const deleteAnime = async (id, dispatch) => {
  dispatch(deleteAnimeStart());
  try {
    await axios.delete("/animes/" + id, {
      headers: {
        token: "Bearer " + JSON.parse(localStorage.getItem("user")).accessToken,
      },
    });
    dispatch(deleteAnimeSuccess(id));
  } catch (err) {
    dispatch(deleteAnimeFailure());
  }
};
