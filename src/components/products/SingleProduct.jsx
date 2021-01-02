import React from "react";
import { Grid } from "@material-ui/core";
import { Button } from "react-bootstrap";
import userService from '../../services/UserService';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';





const SingleProduct = (props) => {
  const [value, setValue] = React.useState(2);
 const [cart,setCart]=React.useState([]);
  const { product, onDelete, history } = props;
  const navigateTo =()=> props.history.push('/cart');
  const addToCart=()=>{
    console.log("we are in cart");
  setCart([...cart,product]);
  
  }
  return (
   
    <Grid item xs={4} >
      
       
      <img src={product.prImage} className="setimg"/>
      <h4>{product.prName}</h4>
      <div className="row">
      <span className="originalprice">Rs:{product.prPrice} </span>
      <Box component="fieldset" mb={3} borderColor="transparent">
        
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      </Box>
      <h5 className="sale">  155</h5>
      </div>
    
      {userService.isLoggedIn() && (
        <>
      
      </>
      )}
      <Button
      onClick={()=>{
        addToCart(product)
      }}
    
      >Add to cart</Button>{" "}
      <hr />
    </Grid>
    
  );
};

export default SingleProduct;
