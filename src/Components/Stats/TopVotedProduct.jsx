import React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import { Grid } from "@mui/material";

const TopVotedProduct = ({ product }) => {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    }
    return text.substring(0, maxLength) + "...";
  };

  return (
    <Grid
      item
      container
      xs={12}
      lg={9}
      sx={{
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        mt: 3,
      }}
    >
      <Card lg={3.5} md={3} sm={12}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {product.shgname.charAt(0)}
            </Avatar>
          }
          title={product.product_name}
          subheader={product.shgname}
        />
        <CardMedia
          component="img"
          height="194"
          image={product.product_photo}
          alt={product.product_name}
          sx={{
            transition: "transform 0.4s ease", // Smooth transition
            "&:hover": {
              transform: "scale(1.1)", // Scale the image to 110% on hover
            },
          }}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {truncateText(product.product_shortdescription, 95)}
          </Typography>
          <Typography
            variant="h6"
            color="text.primary"
            sx={{ mt: 2, textAlign: "right" }}
          >
            Total Votes: {product.votecount}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default TopVotedProduct;