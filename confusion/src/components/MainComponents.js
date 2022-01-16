import React, { Component } from 'react';
import Menu from './MenuComponent';
import Header from './HeadComponents';
import Home from './HomeComponents';
import Footer from './FootComponents';
import Contact from './ContactComponents';
import DishDetail from './DishDetailComponents';
import { DISHES } from '../shared/dishes';
import { Route, Switch, Redirect } from 'react-router-dom'
import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      promotions: PROMOTIONS,
      leaders: LEADERS,
      comments: COMMENTS,
    };
  }

  render() {

    const HomePage = () => {
      return (<Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
        promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
        leader={this.state.leaders.filter((leader) => leader.featured)[0]} />)
    }
    const DishWithId = ({match}) => {
      return(
          <DishDetail dish={this.state.dishes.filter((dish) => dish.id === parseInt(match.params.dishId,10))[0]} 
            comments={this.state.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId,10))} />
      );
    };
    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path='/menu' component={() => <Menu dishes={this.state.dishes} />} />
          <Route path='/menu/:dishId' component={DishWithId} />
          <Route exact path="/contactus" component={Contact} />
          
          <Redirect to="/Home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;