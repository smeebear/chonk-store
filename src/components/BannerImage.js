import '../App.css';
import React from 'react';
import { Parallax } from 'react-parallax';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles(theme => ({
    banner: {
        width: "100vw",
        height: "40vh",
    },
    title: {
        top: "55%",
        left: "50%",
        width: "80%",
        position: "absolute",
        contentJustify: 'center',
        transform: "translate(-50%,-50%)",
        color: 'white',
        fontSize: "50pt",
        textAlign: 'center',
        fontFamily: "Hoefler Text Black, cooper-black-std, serif",
        textShadow: "3px 3px #28AFB0",
        // padding: "20px",
        // borderRadius: "12px",
        // background: "rgba(0,0,0,.3)",
    }
  }));

export default function BannerImage() {
    const classes = useStyles();

    return (
        <Parallax
            blur={1}
            bgImage={'https://live.staticflickr.com/178/379705679_a97ba7d785_b.jpg'}
            bgImageAlt="banananananana"
            strength={300}
        >
            <div className={ classes.banner} />
            <div className={ classes.title }>Bluth's Original Frozen Banana</div>        

        </Parallax>
    );
}