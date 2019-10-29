import React, { Component } from 'react';
import{
    Card, CardImg, CardBody, CardTitle,  CardSubtitle}
    from "reactstrap";


export default class ProfileCard extends Component{

    render(){
        return(
               
            <Card style={{width: 380,  marginBottom: 0, textAlign: "Center", borderColor: "#808080", paddingTop: 0}}>
                
                <CardImg
                src= { this.props.data.img }
                alt="Card image cap"
                style={{ borderRadius: "100%", display: "block", 
                        marginLeft: "auto", marginRight: "auto",
                        width: 300, height: 300, 
                        margin: "auto", marginTop: 40 }}>
                </CardImg>
                
                <CardBody>
                    <CardTitle><h4>{ (this.props.data.firstname)+" "+(this.props.data.lastname) }</h4></CardTitle>
                    <CardSubtitle>{ this.props.data.email } </CardSubtitle>
                    <CardSubtitle> { this.props.data.phone} </CardSubtitle> 
                </CardBody>              
            
            </Card>  
        )
    }
}