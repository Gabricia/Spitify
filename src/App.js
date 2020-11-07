import React, { useEffect } from "react";
import "./App.css";
import Login from "./components/Login";
import { getTokenFromUrl } from "./api/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useStateValue } from "./StateProvider";
import {
  SET_TOKEN,
  SET_USER,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
} from "./reducers/types";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useStateValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    //with the location et hash methods, we reset the URL so only
    //the app got the token and not the user (for security)
    window.location.hash = "";
    const _token = hash.access_token;

    //if token then fetch all infos needed and dispatch them in state
    if (_token) {
      dispatch({
        type: SET_TOKEN,
        token: _token,
      });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: SET_USER,
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: SET_PLAYLISTS,
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E362NhoUimQCp").then((playlist) => {
        dispatch({
          type: SET_DISCOVER_WEEKLY,
          discover_weekly: playlist,
        });
      });
    }
  }, [token, dispatch]);

  // console.log(token);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
