import React, {Component} from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap';
import Menu from './components/MenuComponent';
import { STAFFS } from './shared/staffs';
import { DEPARTMENTS} from './shared/staffs';
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      staffs: STAFFS ,
      department: DEPARTMENTS
    };
  }
  render () {

  return (
    <div className="App">
     <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
      </Navbar>
      <Menu staffs={this.state.staffs} />
    </div>
  );}
}

export default App;
