import React from "react";
import "./Body.css";
import Header from "./Header.js";
import SongRow from "./SongRow.js";
import { useStateValue } from "../StateProvider";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";

const Body = ({ spotify }) => {
  const [{ discover_weekly, selectedPlaylist }, dispatch] = useStateValue();

  const playPlaylist = (id) => {
    console.log("hey", selectedPlaylist);
    spotify
      .play({
        context_uri: `spotify:playlist:${selectedPlaylist}`,
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          console.log(r);
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  const playSong = (id) => {
    spotify
      .play({
        uris: [`spotify:track:${id}`],
      })
      .then((res) => {
        spotify.getMyCurrentPlayingTrack().then((r) => {
          dispatch({
            type: "SET_ITEM",
            item: r.item,
          });
          dispatch({
            type: "SET_PLAYING",
            playing: true,
          });
        });
      });
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="body__info">
        <img src={discover_weekly?.images[0].url} alt="" />
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h1>{discover_weekly?.name}</h1>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon
            className="body__shuffle"
            onClick={playPlaylist}
          />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>

        {discover_weekly?.tracks.items.map((item) => (
          <SongRow key={item.track.id} playSong={playSong} track={item.track} />
        ))}
      </div>
    </div>
  );
};

export default Body;
