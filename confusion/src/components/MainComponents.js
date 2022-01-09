import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeadComponents';
import Home from './HomeComponents';
import Footer from './FootComponents';
import DishDetail from './DishDetailComponents';
import { DISHES } from '../shared/dishes';
import {Route, Switch, Redirect } from 'react-router-dom'
class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
        dishes: DISHES,

    };
  }

  render(){
    const HomePage =()=>{
      return (<Home />)
    }
  
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path='/menu' component={()=> <Menu dishes={this.state.dishes }/> } />
          <Redirect to="/Home" />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default Main;