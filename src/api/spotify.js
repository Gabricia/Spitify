//The baseURL that allows us to do all our request to Spotify
export const authEndpoint = "https://accounts.spotify.com/authorize";
//we gave this URL in the Spotify Web API settings, it's where the user come back if the Spotify login was successful
const redirectUri = "http://localhost:3000/";

//It's my client Id
const clientId = "dde1a502d246460cb39089b98f18ef56";

//All the infos permissions we ask to Spotify
const scopes = [
  "user-read-currently-playing",
  "user-read-recently-played",
  "user-read-playback-state",
  "user-top-read",
  "user-modify-playback-state",
];

//allows to extract the token received fro
export const getTokenFromUrl = () => {
  return window.location.hash
    .substring(1)
    .split("&")
    .reduce((initial, item) => {
      let parts = item.split("=");
      initial[parts[0]] = decodeURIComponent(parts[1]);
      return initial;
    }, {});
};

//This URL contains the Client ID and all the permissions so that Spotify knows about our app and allows user authentication.
export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;
