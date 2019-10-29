import React, {Component} from 'react';
import ProfileCardToevoegen from './ProfileCard_toevoegen';



export default class Toevoegen extends Component {
 
  //Constructor

  constructor(props){
    super(props);
    
      this.state = {

      data: { id: "",
              firstname: "",
              lastname: "",
              email: "",
              phone: "",
              date_of_birth: "24-09-1988",
              img: "",
              } }
  }
  
  //API

    dataUpload(){
      var url= "https://api.dev-master.ninja/reactjs/smoelenboek/post"
      var body = JSON.stringify(this.state.data);
      fetch(url, {method: 'POST', headers:{'Content-Type': 'application/json'}, body })
      .then(response => response.json())
      .then(data => { console.log(data); })
      .catch( error => {console.log(error);});
      alert("Data has been uploaded")
    }    

    //Event Handlers

    onchangeFN(event){
      var info = this.state.data; 
      info.firstname = event.target.value
      this.setState({data: info})
    }

    onchangeLN(event){
      let data = this.state.data; 
      data.lastname = event.target.value
      this.setState({data: data})
    }

    onchangeEM(event){

      var info = this.state.data; 
      info.email = event.target.value
      this.setState({data: info})
    }
    onchangePH(event){
      var info = this.state.data; 
      info.phone = event.target.value
      this.setState({data: info})
    }

    onchangeIMG(event){
    var afbeelding = event.target.files[0];
    var reader = new FileReader();
    reader.onloadend = () => {
      var B64 = reader.result;
      var info = this.state.data; 
      info.img = B64
      this.setState({data: info})
    };

    reader.readAsDataURL(afbeelding)
    }
       
    fileuploadClick(){
      this.refs.uploader.click();
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
    
              <div style={{padding: 50}} className="row">
               <h1 style={{ marginLeft: 327}}> Add Person </h1>
              </div>

              <div className="row">

              <input type="file" id="file" ref="uploader" onChange={this.onchangeIMG.bind(this)} style={{display:"none"}} /> 

                <div onClick={ ()=>this.fileuploadClick()} className="col-md-6"><ProfileCardToevoegen  data={this.state.data}> </ProfileCardToevoegen></div>
                
                <div className="col-md-6" style={{marginTop: 5}}>
                  
                   
                      <label style={{width:100}}> First name:  &nbsp; </label>
                      <input type="text" style={{width: 500}} onChange={this.onchangeFN.bind(this)} placeholder={"First Name"}/><br></br>
                   
                      <label style={{width:100}}> Last name:  &nbsp; </label>
                    <input type="text" style={{width: 500}} onChange={this.onchangeLN.bind(this)} placeholder={"Last Name"}/> <br></br>
                     
                      <label style={{width:100}}> E-mail:  &nbsp; </label>
                     <input type="text" style={{width: 500}} onChange={this.onchangeEM.bind(this)}  placeholder={"E-Mail"}/><br></br>
                      
                      <label style={{width:100}}> Phone:  &nbsp; </label>
                     <input style={{width: 500}} type="text" onChange={this.onchangePH.bind(this)} placeholder={"Phone"}/><br></br>  
                      
                 </div>
                </div>

                <div className="row">

                <button style={{marginLeft: 1750}} className="btn btn-primary" onClick={()=> this.dataUpload()} variant="primary">Upload Data</button>
              
              </div>
         
              </div>

          </React.Fragment>
        )
      }
}