import '../App.css';
import React from 'react';
import { Parallax } from 'react-parallax';
import { makeStyles } from '@material-ui/core'


const useStyles = makeStyles(theme => ({
    banner: {
        width: "100vw",
        height: "50vh",
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
        fontFamily: "Segoe UI, sans-serif",
        textShadow: "3px 3px rgb(255, 187, 197)",
        // padding: "20px",
        // borderRadius: "12px",
        // background: "rgba(0,0,0,.3)",
    }
  }));

export default function BannerImage(props) {
    const classes = useStyles();

    return (
        <Parallax
            blur={.5}
            bgImage={props.img}
            bgImageAlt="schleepy boi"
            strength={500}
        >
            <div className={ classes.banner} />
            <div className={ classes.title }>{props.title}</div>        

        </Parallax>
    );
}