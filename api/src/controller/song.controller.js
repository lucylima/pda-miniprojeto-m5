import { database } from "../database/database.js";
import { Song } from "../model/Song.model.js";

const randomSong = async (req, res) => {
  const random = Math.floor(Math.random() * (await database.song.count({})));
  const response = await database.song.findUnique({
    where: {
      id: random,
    },
  });
  return res.status(200).json({ response, random });
};

export { randomSong };
