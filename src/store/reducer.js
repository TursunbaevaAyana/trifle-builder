import * as actions from "./actions";

const initialState = {
    ingredients: {
      banana: 1,
      biscuit: 1,
      redVelvet: 1,
      chocolateBiscuit: 1,
      strawberry: 1,
      iceCream: 1,
      kiwi: 1,
      strawberryJam: 1,
      blueberries: 1,
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
     case actions.ADD_INGREDIENT:
        return{
            ...state,
            ingredients: {
                ...state.ingredients,
                [action.ingredient]: state.ingredients[action.ingredient] + 1,
            },
            price: state.price + PRICES[action.ingredient],
        };
         
     case actions.REMOVE_INGREDIENT:
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