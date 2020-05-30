import * as types from "../actions/types";

const initialState = {
    ingredients: {
      banana: { quantity: 0, price: 2, label: "Banana"},
      biscuit: { quantity: 0, price: 10, label: "Biscuit"},
      redVelvet: { quantity: 0, price: 14, label: "Red-Velvet"},
      chocolateBiscuit: { quantity: 0, price: 12, label: "Chocolate-Biscuit"},
      strawberry: { quantity: 0, price: 3, label: "Strawberry"},
      iceCream: { quantity: 0, price: 7, label: "Ice-Cream"},
      blueberries: { quantity: 0, price: 4, label: "Blueberries"},
    },
    price: 50,
};

export default (state = initialState, action) => {
    switch (action.type) {
      case types.ADD_INGREDIENT:
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ingredient]: {
              ...state.ingredients[action.ingredient],
              quantity: state.ingredients[action.ingredient].quantity + 1,
            },
          },
          price: state.price + state.ingredients[action.ingredient].price,
        };
  
      case types.REMOVE_INGREDIENT:
        return {
          ...state,
          ingredients: {
            ...state.ingredients,
            [action.ingredient]: {
              ...state.ingredients[action.ingredient],
              quantity: state.ingredients[action.ingredient].quantity - 1,
            },
          },
          price: state.price - state.ingredients[action.ingredient].price,
        };
  
      case types.SET_INGREDIENTS:
        return {
          ...state,
          ingredients: action.ingredients,
          price: initialState.price
        };
  
      default:
        return state;
    }
  };