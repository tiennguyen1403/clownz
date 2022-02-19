const initialState = {
  cart: [],
};

const productReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "ADD_PRODUCT": {
      const newCart = [...state.cart];
      const productIndex = state.cart.findIndex(
        (item) => item.id === payload.id
      );

      if (productIndex !== -1) {
        newCart[productIndex].quantity += 1;
        return { ...state, cart: newCart };
      } else {
        const newProduct = {
          id: payload.id,
          info: payload,
          quantity: 1,
        };
        newCart.push(newProduct);
        return { ...state, cart: newCart };
      }
    }
    case "REMOVE_PRODUCT": {
      const newCart = [...state.cart];
      const productIndex = state.cart.findIndex((item) => item.id === payload);
      if (productIndex !== -1) {
        newCart.splice(productIndex, 1);
        return { ...state, cart: newCart };
      }
      return state;
    }
    case "RESET_PRODUCT": {
      return initialState;
    }
    default: {
      return state;
    }
  }
};

export default productReducer;
