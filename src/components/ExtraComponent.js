import React from 'react';
class ExtraComponent extends React.Component{

    
    render(){
        console.log(this.props)
        return(
            <p >this is extra content{this.props.match.params.id}</p>
        )
    }
}
export default ExtraComponent;