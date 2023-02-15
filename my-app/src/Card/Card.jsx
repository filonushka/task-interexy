import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Navigate } from "react-router-dom";

function CardComponent({ name, image, gender, species, status, cardId }) {
  const [card, setCard] = useState();

  // useEffect(() => {
  //   getCharacterById(id).then((res) => setCardsData(res.result));
  // }, []);
  // console.log(cards);

  const handleCardClick = (cardId) => {
    setCard(cardId);
  };

  return (
    <>
      {card && <Navigate to={`/cards/${cardId}`} replace={true} />}
      <Card
        key={cardId}
        onClick={() => handleCardClick(cardId)}
        sx={{ maxWidth: 345, padding: "20px" }}
      >
        <Avatar alt={name} src={image} />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {species}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {gender}
          </Typography>
          <Chip
            label={status}
            color={status === "Alive" ? "secondary" : "primary"}
          />
        </CardContent>
        <CardActions>
          <Link component="button" variant="body2">
            Read more
          </Link>
        </CardActions>
      </Card>
    </>
  );
}

export default CardComponent;
