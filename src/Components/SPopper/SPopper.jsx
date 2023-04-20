import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import PaletteIcon from '@mui/icons-material/Palette';


export default function SPopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const colors = ["red","blue","yellow","green","pink","grey","lightblue","lightgreen"]

  const sendcolor = (color) => {
    
    props.bgcolor(color)
  }
  
  return (
    <div>
      <div onClick={handleClick}>
      <PaletteIcon style={{ color: "grey", cursor: "pointer" }}
            fontSize="small"/>   
      </div>
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper',display:"flex",width:"auto",justifyContent:"space-evenly" }}>
         
          {
            colors.map((color) => {
             return(
              <div onClick={() => sendcolor(color)} style={{backgroundColor : color, width:'2em', height:'2em',borderRadius: "100%"}} >

              </div>)
})
          } 
          
        </Box>
      </Popper>
    </div>
  );
}