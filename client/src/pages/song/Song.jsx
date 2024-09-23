import { useState } from "react";
import { SongCard } from "../../components/SongCard/SongCard.jsx";
import { Header } from "../../components/Header/Header.jsx";


function Song() {
  const [song, setSong] = useState({
    name: "Perfect Night",
    playcount: "14360",
    url: "https://www.last.fm/music/7038634357/_/Perfect+Night",
    artist: {
      name: "7038634357",
      url: "https://www.last.fm/music/7038634357",
    },
  });


  return (
    <>
      <SongCard
        song={song}
      />
    </>
  );
}

export { Song };

