import React from 'react';
import './header.css';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";

import userService from './services/UserService';
import {Link } from 'react-router-dom';
const Header1 = () => {
    return ( 
        <nav className="header-1">
            <div className="login-icons">
            
            <Typography variant="h6">
            <Link to="/admin/login" >
            <div className="header1-link">
                <Button>Admin Login</Button>
               
            </div>
            </Link>
            </Typography>
            
            </div>
            
            {!userService.isLoggedIn() ? (
          <>
            <Typography variant="h6">
            <Link to="/login" >
            <div className="header1-link">
                <span>SignIn </span>
               
            </div>
            </Link>
            </Typography>
            <Typography variant="h6">
            <Link to="/register" >
            <div className="header1-link">
                <span> Register </span>
               
            </div>
            </Link>
            </Typography>
          </>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="sm"
            onClick={(e) => {
              userService.logout();
              window.location.reload();
            }}
          >
            LogOut {userService.getLoggedInUser().name + 
                     userService.getLoggedInUser().role}
          </Button>
        )}
            
          
            
        </nav>
     );
}
 
export default Header1;