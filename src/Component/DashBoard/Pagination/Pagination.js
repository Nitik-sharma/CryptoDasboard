import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import "./Pagination.css"

export default function PaginationControlled({page,handleChange}) {
  

  return (
    <div className='pagination-component'>
      
      <Pagination count={10} page={page} onChange={(event,value)=>handleChange(event,value)} 
      sx={
        {
            color:"var(--white)","& .Mui-selected":{
                backgroundColor:"var(--blue) !important",
                color:"#fff !important",
                borderColor:"var(--blue) !important"
            },
            "& .MuiPaginationItem-ellipsis":{
                border:"0px solid var(--gray)  !important"
            },
            "& .MuiPaginationItem-text":{
                color:"var(--white)",
                border:"1px solid var(--gray)"
            }
        }
      }
      
      />
    </div>
  );
}
