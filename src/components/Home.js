import React from 'react';
import Grid from '@material-ui/core/Grid';
import ImageCard from './ImageCard';
import styled from 'styled-components';
import { Typography } from '@material-ui/core';

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
            image="https://vignette.wikia.nocookie.net/arresteddevelopment/images/6/67/1x05_Charity_Drive_%2810%29.png/revision/latest/scale-to-width-down/1000?cb=20120205003332"
            imageAlt="A boy and his banana stand"
            imageTitle="The Original Banana Stand"
            width="10px"
            height="200px"
            description="The first and only Bluth banana stand could have been found at the Oceanside Wharf boardwalk in sunny Newport Beach, CA"
          />
        </Grid>
        <Grid item sm={6}>
          <Typography variant="body1">
          The stand allegedly opened in 1953 ("Pilot") but a ribbon-cutting ceremony for the stand commenced in 1963. ("The One Where They Build a House") The idea for the stand was stolen from Annyong's grandfather. ("Development Arrested") The stand was a popular meeting place for the buying and selling of marijuana in the 1970s. As the stand itself was built to resemble a large yellow banana, it was commonly known as "the big yellow joint", and became the topic of a hit song - Big Yellow Joint, by Jimmy Jane. ("Pier Pressure")
          </Typography>
        </Grid>
      </Grid>
    </Body>
  );
}