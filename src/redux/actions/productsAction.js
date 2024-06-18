
export const addQty = (_idProduct)=>{
    return{
        type : "ADDQTY",
        _idProduct
    };
};

export const decreaseQty = (_idProduct)=>{
    return{
        type : "DECREASEQTY",
        _idProduct
    };
};

