import { Grid } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Meme from "./Meme";

const Memes = () => {
  const [memes, setMemes] = useState([]);

  const getMemes = async () => {
    try {
      const response = await axios.get("https://www.reddit.com/r/memes.json");
      //   console.log(response.data.data.children);
      setMemes(response.data.data.children);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getMemes();
  }, []);

  return (
    <Grid container margin={3}>
      {memes.map((item) => (
        <Grid item xs={2}>
          <Meme item={item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Memes;
