import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

export default function ImageCard(props) {

  return (
    <Card width={ props.width }>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={ props.imageAlt }
          height={ props.height }
          image={ props.image }
          title={ props.imageTitle }
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            { props.imageTitle }
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            { props.description }
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}