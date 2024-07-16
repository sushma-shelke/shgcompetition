import React from "react";
import { Grid } from "@mui/material";
import ProductPost from "./ProductPost";
import { useCompitationContext } from "../../Context/CompitationContext";
import HandcraftedWoodenBowl  from '../../Assets/Images/HandcraftedWoodenBowl.jpeg'
import toeabag from '../../Assets/Images/Handcrafted-Tote-bag.jpeg'
const products = [
  {
    name: "Handmade Tote Bag",
    shortDescription:
      "A stylish and eco-friendly tote bag made from recycled materials.",
    photos: [
      toeabag,
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "200g",
    quantity: 50,
    dimensions: "30cm x 40cm x 10cm",
    color: "Blue",
    price: "$20",
    category: "Bags and Luggage",
  },
  {
    name: "Organic Jam",
    shortDescription: "Delicious homemade jam made from organic fruits.",
    photos: [
      "https://andyjconnelly.wordpress.com/wp-content/uploads/2013/10/jam-jars.jpg",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "250g",
    quantity: 30,
    dimensions: "10cm x 10cm x 10cm",
    color: "Red",
    price: "$5",
    category: "Food and Drinks",
  },
  {
    name: " Wooden Bowl",
    shortDescription: "A beautiful bowl crafted from sustainable wood.",
    photos: [
      HandcraftedWoodenBowl,
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "500g",
    quantity: 20,
    dimensions: "15cm x 15cm x 8cm",
    color: "Brown",
    price: "$15",
    category: "Home Decor",
  },
  {
    name: "Natural Soy Candles",
    shortDescription: "Eco-friendly candles made from natural soy wax.",
    photos: [
      "https://www.coastmagazine.co.uk/wp-content/uploads/sites/14/2015/11/shutterstock_304268132web-scaled.jpg",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "300g",
    quantity: 40,
    dimensions: "10cm x 10cm x 12cm",
    color: "White",
    price: "$10",
    category: "Home Fragrance",
  },
  {
    name: "Knitted Scarf",
    shortDescription: "A warm and cozy scarf knitted from organic wool.",
    photos: [
      "https://www.boontoon.com/blog/wp-content/uploads/2019/08/Hand-knitted-scarf-Handmade-Knitting-4.jpg",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "150g",
    quantity: 25,
    dimensions: "180cm x 30cm",
    color: "Green",
    price: "$25",
    category: "Apparel",
  },
  {
    name: "Ceramic Coffee Mug",
    shortDescription:
      "A handcrafted ceramic mug perfect for your morning coffee.",
    photos: [
      "https://loamclaystudio.ca/cdn/shop/products/Turqoise_Yellow_18ozMug_Angled1_1200x.jpg?v=1588852173",
      "https://via.placeholder.com/140",
      "https://via.placeholder.com/140",
    ],
    weight: "400g",
    quantity: 60,
    dimensions: "8cm x 8cm x 10cm",
    color: "Black",
    price: "$12",
    category: "Kitchenware",
  },
];

const ProductGrid = () => {
  // const { product } = useCompitationContext();
  // console.log(product, "asdasd");
  return (
    <Grid container spacing={2} justifyContent="center">
      {products.map((product, index) => (
        <Grid item key={index} xs={12} sm={6} md={3}>
          <ProductPost {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductGrid;
