import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageCard from './ImageCard';
import styled from 'styled-components';

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
            image="https://i.redd.it/ten24a3hz7u11.jpg"
            imageAlt="A thicc boi"
            imageTitle="One Chunky Man"
            width="10px"
            height="300px"
            description="Wow, how is he this chunky????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image="https://peopledotcom.files.wordpress.com/2018/08/bruno-the-cat.jpg"
            imageAlt="Another big boi"
            imageTitle="Two Chunky Man"
            width="10px"
            height="300px"
            description="Could he possibly be more chonk????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image="https://image.spreadshirtmedia.com/image-server/v1/compositions/T31A1PA29PT10X0Y11D1020543462FS6770/views/1,width=500,height=500,appearanceId=1/dankius-thicc-cat-small-face-coffeetea-mug.jpg"
            imageAlt="Another big boi"
            imageTitle="THREE Chunky Man"
            width="10px"
            height="300px"
            description="Chonkest of all????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image="https://i.imgflip.com/25zlpi.jpg"
            imageAlt="A thicc boi"
            imageTitle="One Buff Boy"
            width="10px"
            height="300px"
            description="Does he lift????"
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image="https://2static1.fjcdn.com/comments/+_5bd376337da22ba1a5fc48993a92aa97.jpg"
            imageAlt="Another big boi"
            imageTitle="Sad Boy Hours"
            width="10px"
            height="300px"
            description=":((((((((("
          />
        </Grid>
        <Grid item sm={4}>
        <ImageCard 
            image="https://socialnewsdaily.com/wp-content/uploads/2018/08/Fat-Cat-760x500.jpg"
            imageAlt="Another big boi"
            imageTitle="WHEW chonk"
            width="10px"
            height="300px"
            description="tongue emoji"
          />
        </Grid>
      </Grid>
    </Body>
  );
}