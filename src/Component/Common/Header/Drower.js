import React, { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import './Style.css'
import { IconButton } from '@mui/material';


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
        <a href="/">
          <p className="link">Home</p>
        </a>
        <a href="/">
          <p className="link">Compare</p>
        </a>
        <a href="/">
          <p className="link">WatchList</p>
        </a>
        <a href="/">
          <p className="link">DashBoard</p>
        </a>
      </div>
          </SwipeableDrawer>
        
      
    </div>
  );
}