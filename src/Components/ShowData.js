import React, {Component} from 'react';

export default class Showdata extends Component{

    state = {
        numCounts:0
    }

    increaseCount(){
        this.setState({
            numCounts: this.state.numCounts +1
        });
    }

    render() {
        return(
            <div className="row">
                <div className="col-md-3 m-1">
                    {this.props.data.name}
                </div>

                <div className="col-md-2 m1">
                    <button className="btn btn-primary btn-sm"
                    onClick={ () => this.increaseCount() }>
                        { this.state.numCounts} clicked
                    </button>
                </div>

                <div className="col-md-2 m1">
                    <button className="btn btn-primary btn-sm"
                    onClick={ () => this.props.verandernaam(this.props.data.id) }>
                     Verander Naam
                    </button>
                </div>


                <div className="col-md-1 m1">
                    <button className="btn btn-danger btn-sm"
                    onClick={ () => this.props.onDelete(this.props.data.id)}>
                    Delete
                    </button>
                </div>
            </div>
        )
    }

}