import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import MediaCard from './components/Box';
import App from './index';
import CategoryDescription from './components/CategoryDescription';
import ExtraComponent from './components/ExtraComponent';
import DescriptionOfMeal from './components/DescriptionOfMeal';
export default class RouterComponent extends React.Component{
    render(){
        return(
            <div>
            <BrowserRouter>
            <Switch>
            <Route exact={true} path="/" component={App}/>
            <Route path="/dish/:category" component={CategoryDescription}/>
            <Route path="/extra/:id" component={ExtraComponent}/>
            <Route path="/descriptionmeal/:id" component={DescriptionOfMeal}/>
            
            
            </Switch>
            
            
            
            </BrowserRouter>
            
            </div>
        )
    }
}
