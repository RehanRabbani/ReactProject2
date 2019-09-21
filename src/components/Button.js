import React from 'react';
import Button from 'react-bootstrap/Button';
class LargeButton extends React.Component{
    render(){
        return(
            <Button variant="primary" size="lg" block>
          {this.props.titleText}
          </Button>
        )
    }
}
export default LargeButton;