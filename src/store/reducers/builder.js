import * as types from "../actions/types";

const initialState = {
    ingredients: {
      banana: 0,
      biscuit: 0,
      redVelvet: 0,
      chocolateBiscuit: 0,
      strawberry: 0,
      iceCream: 0,
      kiwi: 0,
      strawberryJam: 0,
      blueberries: 0,
    },
    price: 50,
};

const PRICES = {
    banana: 2,
    biscuit: 10,
    redVelvet: 14,
    chocolateBiscuit: 12,
    strawberry: 3,
    iceCream: 7,
    kiwi: 3,
    strawberryJam: 5,
    blueberries: 4,
  };

export default (state = initialState, action) => {
 switch (action.type) {
     case types.ADD_INGREDIENT:
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] + 1,
            },
            price: state.price + PRICES[action.ingredient],
        };
         
     case types.REMOVE_INGREDIENT:
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] - 1,
            },
            price: state.price - PRICES[action.ingredient],
        };

     default:
         return state;
 }
};