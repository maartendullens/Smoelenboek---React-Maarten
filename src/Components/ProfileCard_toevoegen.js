import React, { Component } from 'react';
import{
    Card, CardImg}
    from "reactstrap";


export default class ProfileCardToevoegen extends Component{
    render(){
        return(

            <React.Fragment>
            <Card style={{ marginTop: -20, marginLeft: "auto", marginRight: "auto",width: 250, height: 250,  borderRadius: "100%",  marginBottom: -60, textAlign: "center", borderColor: "#808080"}}>
                
               <CardImg
                top
                width="100%"
                src= {this.props.data.img}
                alt=""
                style={{ borderRadius: "100%",
                        width: 250, height: 250,
                   marginBottom: -20}}>
            
                </CardImg>
                
            </Card>
            </React.Fragment>
            
        )
    }
}