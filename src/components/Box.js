import React from 'react';  
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';

  
  export default function MediaCard(props) {
    
    return (
        
        <div className="box-st">
        <Link to={`/dish/${props.pictureText}`}>
      
            <img src={props.picturediv} height="150px" width="200px"/>
            
           
         
             <h5>{props.pictureText}</h5>
           
       
     
      </Link>
      </div>
     
    );
  }