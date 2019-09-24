import React from 'react';
//import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import logo from '../images/room-service.png';
import {Link} from 'react-router-dom';
class NavBar extends React.Component{
    render(){
        return(
            <Nav
            // activeKey="/home"
            // onSelect={selectedKey => alert(`selected ${selectedKey}`)}
          >
            <Nav.Item>
              <Nav.Link ><Link to="/">HOME</Link></Nav.Link>
            </Nav.Item>
            <image src={logo} height="100" width="100" style={{backgroundColor:"red"}}/>
            <Nav.Item>
              <Nav.Link href="#">ABOUT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="https://rehanrabbani.github.io/portfolio/" target="_blank">CONTACTS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#">EVENTS</Nav.Link>
            </Nav.Item>
            
          </Nav>
        )
    }
}
export default NavBar;