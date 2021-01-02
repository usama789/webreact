import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import axios from "axios";
import productService from "./../../services/ProductsService";
import userService from '../../services/UserService';
const NewProduct = (props) => {
  const [prName, setName] = React.useState("");
  const [prPrice, setPrice] = React.useState("");
  const [prCategory, setCategory] = React.useState("");
  const [prDetails, setDetails] = React.useState("");

  const [prImage, setImage] = React.useState("");


  return (
    <Grid container spacing={3}>
      {userService.isLoggedIn() && (
        <>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="Name"
          fullWidth
          value={prName}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <TextField
          label="Price"
          fullWidth
          value={prPrice}
          onChange={(e) => {
            setPrice(e.target.value);
          }}
        />
        <TextField
          label="Category"
          fullWidth
          value={prCategory}
          onChange={(e) => {
            setCategory(e.target.value);
          }}
        />
        <TextField
          label="Details"
          fullWidth
          value={prDetails}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        />
        <TextField
          label="Image url"
          fullWidth
          value={prImage}
          onChange={(e) => {
            setImage(e.target.value);
          }}
        />
        
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            productService
              .addProduct({ prName, prPrice,prCategory,prDetails,prImage})
              .then((data) => {
                console.log(data);
                props.history.push("/admin/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add New
        </Button>
      </Grid>
      </>
      )};
      
    </Grid>
  );
};

export default NewProduct;
