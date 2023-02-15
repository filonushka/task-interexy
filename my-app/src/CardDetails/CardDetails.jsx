import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getCharacterById } from "../api/characterApi";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Link from "@mui/material/Link";
import Chip from "@mui/material/Chip";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";

function CardDetails() {
  const { id } = useParams();
  const [characterData, setCharacterData] = useState();

  useEffect(() => {
    getCharacterById(id).then((data) => setCharacterData(data));
  }, [id]);

  return (
    <>
      {characterData && (
        <Card key={id} sx={{ maxWidth: 345, padding: "20px" }}>
          <Avatar alt={characterData.name} src={characterData.image} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {characterData.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {characterData.species}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {characterData.gender}
            </Typography>
            <Chip
              label={characterData.status}
              color={characterData.status === "Alive" ? "secondary" : "primary"}
            />
          </CardContent>
          <CardActions></CardActions>
        </Card>
      )}
      <NavLink to="/cards">Go back to all cards</NavLink>
    </>
  );
}

export default CardDetails;
