import React, {Component} from 'react';
import ProfileCard from './ProfileCard';
import ProfileCardEdit from './ProfileCardEdit';
import API from './API';

export default class Home extends Component {

    constructor(props){
        super(props);
        
          this.state = {
          loaded: false,
          data: [],
          activeID: 3,
          style: {  position: "fixed",
            display: "none",
            width: "50%",
            height: "50%",
            right: 500,
            left:  500,
            backgroundColor: "#FFFFFF",
            zIndex: 2},          
        }
      }

    //API

    componentDidMount() {
      API.fetchData()
        .then(data => {
          this.setState({
            data: data,
            loaded: true
          });
        })
    }  

    //EventHandlers

    onBlurFN(event){
      let items = this.state.data;
      let activeID = this.state.activeID;
      let item = items[activeID];
      item.firstname = event.target.value
      items[activeID] = item;
      this.setState({data: items})
    }

    onBlurLN(event){
      let items = this.state.data;
      let activeID = this.state.activeID;
      let item = items[activeID];
      item.lastname = event.target.value
      items[activeID] = item;
      this.setState({data: items})
    }

    onBlurEM(event){
      let items = this.state.data;
      let activeID = this.state.activeID;
      let item = items[activeID];
      item.email = event.target.value
      items[activeID] = item;
      this.setState({data: items})
    }
    onBlurPH(event){
      let items = this.state.data;
      let activeID = this.state.activeID;
      let item = items[activeID];
      item.phone = event.target.value
      items[activeID] = item;
      this.setState({data: items})
    }
    
    //Overlay

    Overlay = (id) => {
        var x = id-1;
        this.setState({activeID: x})
        document.getElementById("overlay").style.display="block"
    }

      OverlaySluiten(){
        document.getElementById("overlay").style.display="none"
      }

      Cancel(){
        this.OverlaySluiten();
        document.location.reload(true);
      }
    
    //Render

    render(){
        if(this.state.loaded){
        return(
          
          <React.Fragment>
  
              <div className="container-fluid">
              
                <div className="row" style={{padding: 0, backgroundColor: "#f2f2f2"}}>
                
                  <div className="col-md-">
                  <h2 id="smoelenboek" style={ { textAlign: "left", verticalAlign: "text-bottom", padding: 20}}>Smoelenboek</h2>
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
                
              <div  id="overlay" style={this.state.style}>

                <div className="row">   
                      <h2>  Edit person</h2> 
                </div> 

                <div className="row">
                        <div className="col-md-5">
                        <ProfileCardEdit data={this.state.data[this.state.activeID]} />
                        </div>
                        <div className="col-md-6" style={{marginTop: 80, marginLeft:0, width: 500}}>
                        
                            <label style={{width:100}}> First name:  &nbsp; </label>
                            <input type="text" onBlur={this.onBlurFN.bind(this)} placeholder={this.state.data[this.state.activeID].firstname}/> <br></br>
                        
                            <label style={{width:100}}> Last name:  &nbsp; </label>
                            <input type="text" onBlur={this.onBlurLN.bind(this)} placeholder={this.state.data[this.state.activeID].lastname}/> <br></br>
                          
                            <label style={{width:100}}> E-mail:  &nbsp; </label>
                            <input type="text" onBlur={this.onBlurEM.bind(this)} placeholder={this.state.data[this.state.activeID].email}/><br></br>
                            
                            <label style={{width:100}}> Phone:  &nbsp; </label>
                            <input type="text" onBlur={this.onBlurPH.bind(this)} placeholder={this.state.data[this.state.activeID].phone}/><br></br>
                          
                        </div>
                        
                        <div className="col-md-1"></div>
                </div>               

                <div className="row">

                      <div className="col-md-8"> </div>
      
                      <div style={{marginRight: 5}} className="col-md-1"><button type="submit" 
                      className="btn btn-primary" id="submit" onClick={ () =>  this.OverlaySluiten()}> Opslaan </button>
                      </div>

                      <div className="col-md-1">
                      <button onClick= { () =>  this.Cancel()} className="btn btn-danger"> Annuleren</button>
                      </div>

                 </div>

              </div>

                 {
                  this.state.data.map( item => {
                   
                  return( <div key={item.id} className="col-md-3"> 

                          <ProfileCard key={ item.id } data={item}/>
                          
                          <button onClick={() => this.Overlay(item.id)} className="btn btn-primary" style={{width: 380,
                          marginBottom: 30 }}> 
                          
                          Wijzig Profiel
                          
                          </button>
                          </div>) 
                 })
                }
              </div>

            </div>   
          </React.Fragment>
        )
      }
      else{
        return(
          <h1 style={{textAlign: "center"}}> LOADING SMOELENBOEK ... </h1>
        )
      }
}
}