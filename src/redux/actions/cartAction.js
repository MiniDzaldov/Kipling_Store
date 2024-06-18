export const addToCart = (product)=>{
    return{
        type : "ADDTOCART",
        product
    };
};


export const deleteFromCart = (product)=>{
    return{
        type : "DELETEFROMCART",
        product
    };
};