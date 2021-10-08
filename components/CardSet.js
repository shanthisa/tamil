import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ButtonBase from '@material-ui/core/ButtonBase';
import Typography from '@material-ui/core/Typography';
//import {cardSet} from './constants';
import { getCardSets } from '../backend/supabase_client';
// import Read from './read';
// import Write from './write';
// import Speak from './speak';

//const images = cardset.map((card)=>{return{...card}});

//const images = cardSet;



/* #region old */
// const images = [
//   {
//     url: '/images/Amma.png',
//     title: 'Speak',
//     //link: '/speak',
//     width: '40%',
//   },
//   {
//     url: '/images/bookworm.svg',
//     title: 'Read',
//     //link: '/read',
//     width: '30%',
//   },
//   {
//     url: '/images/pen.png',
//     title: 'Write',
//     //link: '/write',
//     width: '30%',
//   },
// ];
/* #endregion  */
const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    minWidth: 300,
    width: '100%',
  },
  image: {
    position: 'relative',
    height: 200,
    [theme.breakpoints.down('xs')]: {
      width: '100% !important', // Overrides inline-style
      height: 200,
    },
    '&:hover, &$focusVisible': {
      zIndex: 1,
      '& $imageBackdrop': {
        opacity: 0.15,
      },
      '& $imageMarked': {
        opacity: 0,
      },
      '& $imageTitle': {
        border: '4px solid currentColor',
      },
    },
  },
  focusVisible: {},
  imageButton: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.white,
  },
  imageSrc: {
    backgroundSize: 'contain',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundPosition: 'center 40%',
  },
  imageBackdrop: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: theme.palette.common.black,
    opacity: 0.4,
    transition: theme.transitions.create('opacity'),
  },
  imageTitle: {
    position: 'relative',
    padding: `${theme.spacing(2)}px ${theme.spacing(4)}px ${theme.spacing(1) + 6}px`,
  },
  imageMarked: {
    height: 3,
    width: 18,
    backgroundColor: theme.palette.common.white,
    position: 'absolute',
    bottom: -2,
    left: 'calc(50% - 9px)',
    transition: theme.transitions.create('opacity'),
  },
}));


export default function CardSet() {

  let [cardSet, setCardSet] = useState([]);

  useEffect(()=>{
    getCardSets().then((cardSets)=>setCardSet(cardSets));
    getCardSets().then(setCardSet);
  },[])
  

  const classes = useStyles();

  console.log('At button bases');
  return (
    <div className={classes.root}>
        {cardSet.map((image) => (
        <ButtonBase
          focusRipple
          key={image.title}
          className={classes.image}
          focusVisibleClassName={classes.focusVisible}
          style={{
            width: '30%',
          }}
          
        >
        <Link to={'/cardset/'+image.title}>
        {console.log('image title', image.title)}
          <span
            className={classes.imageSrc}
            style={{
              backgroundImage: `url(${image.imageSrc})`,
            }}
          />
          <span className={classes.imageBackdrop} />
          <span className={classes.imageButton}>
            <Typography
              component="span"
              variant="subtitle1"
              color="inherit"
              className={classes.imageTitle}
            >
              {image.title}
              <p>
              {image.subtitle}
              </p>
             
              <span className={classes.imageMarked} />
            </Typography>
          </span>
          </Link>
        </ButtonBase>
      
      ))}
    </div>
    
  );
}
