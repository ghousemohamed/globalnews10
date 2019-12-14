import React from 'react';
import './App.css';

import NewsCollection from './NewsCollection';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      response: false,
      input: '',
      newsArray: []
    }
  }
  getResponse = () => {
    if(this.state.input.length){
      this.setState({response: true})
    fetch(`https://newsapi.org/v2/everything?q=${this.state.input}&apiKey=7e55080898d84e5abfded9455036e449&pageSize=100`)
        .then(response => response.json())
        .then(data => this.setState({newsArray: data.articles}, ()=> {console.log('Logging now')}));
    }
    else{
      this.setState({response: false})
    }
}

onInputChange =(event) => {
  this.setState({input: event.target.value});

}
  render(){
    return(
      <div>
        <nav className="navbar fixed-top navbar-expand-lg ">
    <p className='para'>GLOBAL NEWS 10</p>
    <form className="center form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={this.onInputChange}/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit" onClick={this.getResponse}>Search</button>
    </form>
  
</nav>
<div className="navdiv"></div>
      {this.state.response ? <NewsCollection input={this.state.input} newsArray={this.state.newsArray}/>:<div></div>}
      </div>

    );
  }
}

export default App;
