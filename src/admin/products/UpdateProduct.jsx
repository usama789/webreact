import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import productService from "../../services/ProductsService";


const UpdateProduct = (props) => {
  const [prName, setName] = React.useState("");
  const [prPrice, setPrice] = React.useState(0);
  const [prCategory, setCategory] = React.useState("");
  const [prDetails, setDetails] = React.useState("");
  const [prImage, setImage] = React.useState("");
  const id = props.match.params.id;
  React.useEffect(() => {
    productService.getSingleProduct(id).then((data) => {
      setName(data.prName);
      setPrice(data.prPrice);
      setCategory(data.prCategory);
      setDetails(data.prDetails);
      setImage(data.prImage);
    });
  }, []);
  return (
    
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Update Product</h1>
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
          label="CATEGORY"
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
          label="image Url"
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
              .updateProduct(id, { prName, prPrice,prCategory,prDetails,prImage })
              .then((data) => {
                console.log(data);
                props.history.push("/admin/products");
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Update
        </Button>
      </Grid>
    </Grid>
    
  );
};

export default UpdateProduct;
