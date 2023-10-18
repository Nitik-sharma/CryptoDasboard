import React, { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './Style.css'
import { IconButton } from '@mui/material';
import { Link } from 'react-router-dom';


export default function SwipeableTemporaryDrawer() {
   const [open ,setOpen]=useState(false);

  

  
      
    

  return (
    <div>
      
          <IconButton onClick={()=>setOpen(true)}><MenuRoundedIcon  className='link'/></IconButton>
          <SwipeableDrawer
           anchor={'right'}
           open={open}
           onClose={()=>setOpen(false)}
            
          >
             <div className='drower-div'>
        <Link to="/">
          <p className="link">Home</p>
        </Link>
        <Link to="/compare">
          <p className="link">Compare</p>
        </Link>
        <Link to="/watchlist">
          <p className="link">WatchList</p>
        </Link>
        <Link to="/dashboard">
          <p className="link">DashBoard</p>
        </Link>
      </div>
          </SwipeableDrawer>
        
      
    </div>
  );
}