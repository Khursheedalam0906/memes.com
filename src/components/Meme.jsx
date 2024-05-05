import { Card, styled } from "@mui/material";
import React from "react";

const StyledCard = styled(Card)({
  "&:hover": {
    transform: "scale(1.5)",
    borderRadius: 0,
    height: 200,
  },
});

const Meme = ({ item }) => {
  console.log(item);
  return (
    <StyledCard>
      <img src={item.data.url} alt="meme" style={{ height: 200 }} />
    </StyledCard>
  );
};

export default Meme;
