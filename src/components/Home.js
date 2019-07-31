import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageCard from './ImageCard';
import styled from 'styled-components';
import boi1 from '../img/boi1.jpg'
import boi2 from '../img/boi2.jpg'
import boi3 from '../img/boi3.jpg'
import boi4 from '../img/boi4.jpg'
import boi5 from '../img/boi5.jpg'
import boi6 from '../img/boi6.jpg'

const Body = styled.div`
  // height: 100%;
  margin: 30px;
`

export default function Home() {
  return (
    <Body>
      <Grid container spacing={10}>
        <Grid item sm={4}>
        <ImageCard 
            image={boi1}
            imageAlt="A thicc boi"
            imageTitle="One Chunky Man"
            width="10px"
            height="300px"
            description="Wow, how is he this chunky????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={boi2}
            imageAlt="Another big boi"
            imageTitle="Two Chunky Man"
            width="10px"
            height="300px"
            description="Could he possibly be more chonk????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={boi3}
            imageAlt="Another big boi"
            imageTitle="THREE Chunky Man"
            width="10px"
            height="300px"
            description="Chonkest of all????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={boi4}
            imageAlt="A thicc boi"
            imageTitle="One Buff Boy"
            width="10px"
            height="300px"
            description="Does he lift????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={boi5}
            imageAlt="A sad boi"
            imageTitle="Sad Boy Hours"
            width="10px"
            height="300px"
            description=":((((((((("
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image={boi6}
            imageAlt="Another big boi"
            imageTitle="WHEW chonk"
            width="10px"
            height="300px"
            description="👅👅👅"
          />
        </Grid>
      </Grid>
    </Body>
  );
}