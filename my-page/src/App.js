
import React from 'react';
import {Typography, AppBar, Toolbar, Container, ImageList, ImageListItem} from '@mui/material';


function App() {
  return (
    <div>
      <AppBar>
        <Toolbar>
          <Typography variant="h4">Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{"marginTop":"70px", "textAlign":"center"}}>
        <Typography variant="h2">Our Latest Version of Photography</Typography>
        <Typography>Pleasure to take your photos as well, Please fill the below form for any invite requests</Typography>
      </Container>
      <Container>
        <ImageList rowHeight={170} cols={3}>
          <ImageListItem></ImageListItem>
        </ImageList>
      </Container>

    </div>
  );
}

export default App;
