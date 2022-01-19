import { COMMENTS } from '../shared/comments';
import { LEADERS } from '../shared/leaders';
import { PROMOTIONS } from '../shared/promotions';
import { DISHES } from '../shared/dishes';
export const initalState= {
    dishes: DISHES,
    promotions: PROMOTIONS,
    leaders: LEADERS,
    comments: COMMENTS,
 }
 export const Reducer =(state=initalState ,action) =>{
     return state
 }