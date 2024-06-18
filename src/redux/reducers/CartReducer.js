var cart = [];
export const cartReducer = (state = cart, action) => {
    switch (action.type) {
        case ("ADDTOCART"):
            const add_state = [...state, action.product];
            return add_state;

        case ("DELETEFROMCART"):
            return state.filter((product) => product._id != action.product)
    }
    return state;
};