import React from 'react';
import axios from 'axios';
import NavBar from './Navbar'
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
             <section>
             <NavBar/>
             <div className="mealdesc">
            
            <div>
            <img src={this.state.meals.strMealThumb} height="200px" width="200px"/> 
           <h5>{this.state.meals.strMeal}</h5>
          <h5>{this.state.meals.strCategory}</h5> 
            </div>
         <div>
         
         <div><p>{this.state.meals.strInstructions}</p>
         </div>
         
         <div>
         <h5>Ingredients</h5>
         <ul>
         <li>{this.state.meals.strIngredient1}</li>
         <li>{this.state.meals.strIngredient2}</li>
         <li>{this.state.meals.strIngredient3}</li>
         <li>{this.state.meals.strIngredient4}</li>
         <li>{this.state.meals.strIngredient5}</li>
         <li>{this.state.meals.strIngredient6}</li>
         <li>{this.state.meals.strIngredient7}</li>
         </ul>
         
         </div>
         </div>
          

             </div>
             </section>
         )
     }
 }
 export default DescriptionOfMeal;