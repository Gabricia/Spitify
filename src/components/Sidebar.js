import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import Search from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useStateValue } from "../StateProvider";

const Sidebar = () => {
  const [{ playlists }, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="Spotify logo"
      />
      <SidebarOption Icon={HomeIcon} title="Accueil" />
      <SidebarOption Icon={Search} title="Rechercher" />
      <SidebarOption Icon={LibraryMusicIcon} title="Bibliothèque" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="sidebar__playlists">
        {playlists?.items?.map((playlist) => (
          <SidebarOption title={playlist.name} />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
