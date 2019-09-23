import React, { Component } from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import './App.css';
import MediaCard from './components/Box';
import NavBar from './components/Navbar';
import Slider from './components/Slider';
import Menu from './components/Menu';
import ExtraComponent from './components/ExtraComponent';
import RouterComponent from './RouterComponent';
 export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           foods:[]
          
        }
    }

    componentDidMount() {
        axios.get('https://www.themealdb.com/api/json/v1/1/categories.php')
          .then(res=>{
           
              const items =res.data.categories;

              console.log(items);
               this.setState({foods:items});
            //  console.log(items.meals);  
            
          })
    }
   
    render() {
        let {foods}=this.state;
       
       // var meals=Object.values(this.state.items);
     return(
         <div className="parent">
        <NavBar/>
        <Slider/>
      
        <Menu picture={this.state.foods}/>
        
         {/* <p>
         {
           this.state.foods.map((food,index)=>{return(<Menu 
            key={index}
            category={food.strCategory}
            picture={food.strCategoryThumb}
            description={food.strCategoryDescription}
            
            />)})
         }
         </p>
         */}
         </div>
     )  
         
    }
    }

ReactDOM.render(<RouterComponent />, document.getElementById('root'));