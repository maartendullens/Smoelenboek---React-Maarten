import React, { Component } from 'react';
import{
    Card, CardImg}
    from "reactstrap";

export default class ProfileCardEdit extends Component{

    render(){
        return(

            <Card style={{width: "90%",  marginBottom: 20, textAlign: "Center", padding: 0, borderColor: "#FFFFFF"}}>
                
                <CardImg
                top
                width="100%"
                src= { this.props.data.img }
                alt="Card image cap"
                style={{ borderRadius: "50%",
                        width: 300, height: 300,
                        margin: "auto", marginTop: 40 }}>
                </CardImg>  

            </Card>
            
        )
    }
}