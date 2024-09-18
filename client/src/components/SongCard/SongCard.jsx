function SongCard({ song }) {
  return (
    <div>
      <img src={song.cover} alt="" />
      <div>
        <h3>{song.name}</h3>
        <p>{song.artist.name}</p>
        <p>Plays: {song.playcount}</p>
      </div>
    </div>
  );
}
export { SongCard };
