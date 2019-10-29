import React, {Component} from 'react';
import ProfileCardRow from './ProfileCardRow';
import API from './API';

export default class Home extends Component {

    //Constructor

    constructor(props){
        super(props);
        this.state = {
          data: []
        }
      }

    //API

    componentDidMount() {
      API.fetchData()
          .then(data => {
            this.setState({
              data: data
            });
          })
      }  
    
    //Render

    render(){
        
        return(
                  
          <React.Fragment>
          <div className="container-fluid">
              
              <div className="row" style={{padding: 0, backgroundColor: "#f2f2f2"}}>
                
                  <div className="col-md-">
                  <h2 style={ { textAlign: "left", verticalAlign: "text-bottom", padding: 20}}>Smoelenboek</h2>
                  </div>

                  <div className="col-md" style={{textAlign: "right", padding: 20, marginLeft: 1200}}>
                  <div className="btn-block">
                        <button type="button" style={{padding: 0, align: "center"}} className="btn btn-block dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          <h4>Smoelenboek <i className="fas fa-caret-down"></i>  </h4>
                        </button>
                        <div className="dropdown-menu">
                          <a className="dropdown-item" href="/homepage">Toon Kaarten</a>
                          <a className="dropdown-item" href="/homepage_rows">Toon Rijen</a>
                        </div>
                      </div>
                  </div>
                  
                  <div className="col-md" style={{ textAlign: "left",  marginLeft: 10, padding: 20}}>
                  <h4><a style={{color: "#000000"}} href="/toevoegen">Toevoegen</a></h4>
                  </div>
              
              </div>
    
              <div className="row" style={{marginLeft: 40, padding: 20}}>
                  {
                  this.state.data.map( item => {
                  return(  <ProfileCardRow key={ item.id } data={item}/>)})
                  }
                </div>        
              </div>   
              
          </React.Fragment>
        )
      }
}