import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageCard from './ImageCard';
import styled from 'styled-components';
import doggy1 from '../img/doggy1.jpg'
import doggy2 from '../img/doggy2.jpg'
import doggy3 from '../img/doggy3.jpg'
import doggy4 from '../img/doggy4.jpg'
import doggy5 from '../img/doggy5.jpg'
import doggy6 from '../img/doggy6.jpg'

const Body = styled.div`
  // height: 100%;
  margin: 30px;
`

export default function Dogs() {
  return (
    <Body>
      <Grid container spacing={10}>
        <Grid item sm={4}>
        <ImageCard 
            image={doggy1}
            imageAlt="Tubby Bubby"
            imageTitle="Tubby Bubby"
            width="10px"
            height="300px"
            description="Exposed and ready to razzle"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={doggy2}
            imageAlt="Wise Boi"
            imageTitle="Wise Boi"
            width="10px"
            height="300px"
            description="Content and wizzened"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={doggy3}
            imageAlt="THICCCCCCC"
            imageTitle="THICCCCCCC"
            width="10px"
            height="300px"
            description="could it be????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={doggy4}
            imageAlt="treatie terry"
            imageTitle="treatie terry"
            width="10px"
            height="300px"
            description="needs nothing more from life than a good boy treat"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={doggy5}
            imageAlt="OBserVAtion PUP"
            imageTitle="OBserVAtion PUP"
            width="10px"
            height="300px"
            description="he sees and knows all"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={doggy6}
            imageAlt="DogMan"
            imageTitle="DogMan"
            width="10px"
            height="300px"
            description="just a dog who don't need no man"
          />
        </Grid>
      </Grid>
    </Body>
  );
}