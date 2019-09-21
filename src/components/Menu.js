import React from 'react';
import MediaCard from './Box';

function Menu(props) {
    
   
        return(
            <div className="menu">
            <h1 style={{textAlign:"center"}}>Menu</h1>
            <div className="menu-c">
            {props.picture.map((pic)=>{return(<MediaCard picturediv={pic.strCategoryThumb}/>)})}
         
            </div>
            </div>
        )
    }

export default Menu;