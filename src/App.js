import React from 'react';
import './App.css';
import { CardList } from './componants/card-list/card-list.componant';
import { SearchBox } from './componants/search-box/search-box.componant';
class App extends React.Component {
  constructor(){
    super();
    this.state=
    {
      monsters:[],
      searchField:""
    };
  }
  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=> response.json()).then(data=> this.setState({monsters:data}));
  }
  handelChange= (e)=>{
    this.setState({searchField:e.target.value})
  }
  render(){
    const {monsters, searchField} = this.state;
    const filtredMonsters = monsters.filter(monster=> monster.name.toLowerCase().includes(searchField.toLocaleLowerCase()))
    return (
      <div className="App">
        <SearchBox
          placeholder="Search monster"
          handelChange={this.handelChange}
          />
        <CardList monsters={filtredMonsters} /> 
      </div>
    );
  }
 
}

export default App;
