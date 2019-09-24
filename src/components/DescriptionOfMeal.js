import React from 'react';
import axios from 'axios';
 class DescriptionOfMeal extends React.Component{
 constructor(){
     super();
     this.state={
         meals:[]
     }
 }

    componentDidMount(){
        axios.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.props.match.params.id}`)
        .then(res=>{
            const mealDesc=res.data.meals[0];
            console.log(mealDesc);
            this.setState({meals:mealDesc})
        })
    }
    
     render(){
         console.log(this.props)
         return(
             <div>
           {this.state.meals.strMeal}
           {this.state.meals.strCategory}
           {this.state.meals.strInstructions}
           {this.state.meals.strSource}
           {this.state.meals.strYoutube}
          

             </div>
         )
     }
 }
 export default DescriptionOfMeal;