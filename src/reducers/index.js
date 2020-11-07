import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
  SET_SPOTIFY,
  SET_ITEM,
  SET_PLAYING,
  SET_TOP_ARTISTS,
  SET_SELECTED_PLAYLIST,
} from "./types";

export const initialState = {
  user: null,
  playlists: [],
  spotify: null,
  discover_weekly: null,
  top_artists: null,
  playing: false,
  item: null,
  selectedPlaylist: "37i9dQZF1E362NhoUimQCp",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };

    case SET_PLAYING:
      return {
        ...state,
        playing: action.playing,
      };

    case SET_ITEM:
      return {
        ...state,
        item: action.item,
      };

    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };

    case SET_TOP_ARTISTS:
      return {
        ...state,
        top_artists: action.top_artists,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };

    case SET_SPOTIFY:
      return {
        ...state,
        spotify: action.spotify,
      };

    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };

    case SET_SELECTED_PLAYLIST:
      return {
        ...state,
        selectedPlaylist: action.selectedPlaylist,
      };

    default:
      return state;
  }
};

export default reducer;
