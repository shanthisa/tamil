import React from 'react';
import {
    Card, CardActions, CardContent, Typography,
    Button, CardHeader, MoreVertIcon, Avatar, IconButton, CardMedia, CardActionArea
} from '@material-ui/core';
import {Link} from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import PlayCircleOutlineIcon from '@material-ui/icons/PlayCircleOutline';


const useStyle = makeStyles({
    title: { fontSize: 14, },
    pos: { marginBottom: 12 },
    w: { width: 245 }
});

export default function ImageCard(props) {
    const classes = useStyle();
    const { avatarSrc, title, subtitle, description, imageSrc } = props;
    return (
        // <Card  className={classes.w}>
        <Card>
            <CardHeader
                avatar={
                    <Avatar src={avatarSrc}>

                    </Avatar>
                }
                // action={
                //     <IconButton>
                //         <MoreVertIcon />
                //     </IconButton>
                // }
                //title="விலங்குகள்"
                title={title}
                //subheader="animals"
                subheader={subtitle}
            >


            </CardHeader>
            <Link to='/flashCards'>
            <CardActionArea>
            
            <CardMedia style={{height: "150px"}}image={imageSrc} />
            {/* // children={<div>
           
            <IconButton>
            <Link to='/contact'>
            <PlayCircleOutlineIcon fontSize='large' color='secondary'/>
            </Link>
            </IconButton>

            // </div>
            }
             /> */}
             
            </CardActionArea>
            </Link>
            <CardContent>
                <Typography variant="body2" color="textSecondary" >
                    {description}
                </Typography>
            </CardContent>
            <CardActions>
            
            <IconButton>
            
                <PlayArrowIcon fontSize='large' color='secondary'>
                <Link to='/contact'>Select          </Link>
                </PlayArrowIcon>
               
            </IconButton>
  
            </CardActions>
            
        </Card>

    )

}

