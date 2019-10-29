import React, {Component} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default class DatumPicker extends Component{

    state = {
        startDate: new Date(),
        datum2: new Date()
    };

    handleChange(date){
        this.setState({startDate: date});
    }

    check2(date){
        if(date <= this.state.startDate){
            alert("Datum mag niet kleiner zijn dan de eerstgenoemde")
        }
        else{
            this.setState({datum2: date});
        }
    }

    render(){
        return(
            <React.Fragment>
            <DatePicker
            selected={this.state.startDate}
            onChange= { (date) => this.handleChange(date)}
            dateFormat="dd-MM-YYY"
            />
            <br></br> <br></br>
            <DatePicker
            selected={this.state.datum2}
            onChange=            
            { (date) => this.check2(date)}
            dateFormat="dd-MM-YYY"
            />
        
            </React.Fragment>

        );
    }

}