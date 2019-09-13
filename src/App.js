import React from 'react';
import './App.css';
import list_dat from './data'

class App extends React.Component{

  
  render(){

    const list = list_dat.map(dat=>
            
            <div key={dat.id} className="block">   
            <li className ="li">            
            <a  className ="list" href={`${dat.address}`}  target="_blank"  rel = "noopener noreferrer">
            <img style={{margin:"20%", height:"35px",width:"50px"}} src = {require(`${dat.icon}`)} alt={dat.name}/><br/>
            {dat.name}              
            </a></li><br/>
            </div>)

    return (
      <div>
      <div className ="header">
        <h1>Pages</h1>
      </div>
      <div className="App">
        <ul className ="list">
       {list}
       </ul>
      </div>
      <div className ="footer"></div>
      </div>
          );
  }
  
}

export default App;
