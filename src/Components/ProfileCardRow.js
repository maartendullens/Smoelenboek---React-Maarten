import React, { Component } from 'react';
import{
    Card, CardImg, CardBody, CardTitle, CardSubtitle}
    from "reactstrap";

export default class ProfileCardRow extends Component{
    render(){
        return(

            <Card style={{width: "100%",   marginBottom: 20, textAlign: "left", borderColor: "#808080"}}>
                
               <CardImg
                top
          
                src= { this.props.data.img }
                alt="Card image cap"
                style={{ borderRadius: "100%",
                        width: 150, height: 150,
                        marginLeft: 20, marginTop: 20, marginBottom: -20}}/>
                
                <CardBody>
                <CardTitle style={{
                     marginLeft:200,
                     marginTop: -130}} >
                <h4>{ (this.props.data.firstname)+" "+(this.props.data.lastname) }</h4></CardTitle>

                <CardSubtitle style={{
                     marginLeft:200,
                     marginTop: 10}} >{ this.props.data.email } </CardSubtitle>


                <CardSubtitle style={{
                     marginLeft:200,
                     marginTop: 15}} > { this.props.data.phone} </CardSubtitle>

                </CardBody>              
            </Card>
            
        )
    }
}