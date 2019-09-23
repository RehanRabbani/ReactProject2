import React from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {Link} from 'react-router-dom';
const useStyles = makeStyles({
    card: {
      maxWidth: 345,
    },
    media: {
      height: 140,
    },
  });
  
class CategoryDescription extends React.Component{
    constructor(){
        super();
        this.state={
            meals:[]
        }
    }

    componentDidMount(){
        axios.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${this.props.match.params.category}`)
        .then(res=>{
            const category = res.data.meals;
            console.log(category);
            this.setState({meals:category})
        })
    }
    render()
    {
        
        console.log(this.props);
        return(
            <div className="category-styling">
            {this.state.meals.map((meal)=>{return(
                <div className="cate-srt">
                <p>{meal.strMeal}</p>
                <img src={meal.strMealThumb} height="150px" width="150px"/>
                </div>
            )})}
            </div>
                )
    }
}
export default CategoryDescription;