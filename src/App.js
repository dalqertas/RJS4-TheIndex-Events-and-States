import React,{Component} from "react";

// Data
import authors from "./data";

// Components
import Sidebar from "./Sidebar";
import AuthorsList from "./AuthorsList";
import AuthorDetail from './AuthorDetail';
class App extends Component{
  state={
    currentAuthor: null
  }
      
   selectAuthor = author => {
    this.setState({currentAuthor: author});
 
  }
  unselectAuthor = () =>{
    this.setState({currentAuthor: null});
  }
  render(){

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar fnc={this.unselectAuthor}/>
        </div>
        <div className="content col-10">
        {this.state.currentAuthor === null? <AuthorsList authors={authors} fnc={this.selectAuthor}/> : <AuthorDetail author={this.state.currentAuthor}/>}

        </div>
      </div>
    </div>
  );
  }
}

export default App;
