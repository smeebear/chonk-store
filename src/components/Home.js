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
            image="https://bothellveterinarian.files.wordpress.com/2016/10/fat-cat-4.jpg"
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
            image="https://i.pinimg.com/originals/f9/21/89/f92189bdd3cac245ec2f15168d56e19d.jpg"
            imageAlt="A sad boi"
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