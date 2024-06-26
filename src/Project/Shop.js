
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/cartAction";
import { decreaseQty } from "../redux/actions/productsAction";

export default function Shop() {
    const products = useSelector((state) => state.productReducer);
    const cart = useSelector((state) => state.cartReducer);
    const dispatch = useDispatch();

    const plus = (itemID) => {
        if (products[itemID].qty > 0) {
            dispatch(decreaseQty(itemID));
        }
        else {
            alert("no more left");
        }
    }
    const addItem = (product) => {
        const isFound = cart.some(ele => {
            if (ele._id === product)
                return true;
            return false;
        });
        if (!isFound)
            dispatch(addToCart(products[parseInt(product)]));
        else {
            plus(product);
        }
    }

    const desighnAddToCar = { "fontFamily": "monospace", "fontSize": "15px", "fontWeight": "bold", "textAlign": "center", "color": "white" }

    return (
        <>
            <center>
                <div style={{ "display": "flex", "flex-wrap": "wrap" }}>
                    {products.map((item) => (
                        <div className="card" style={{ "width": "18rem", "marginRight": "auto", "marginLeft": "auto", "marginBottom": "5px", "borderColor": "gray", "marginTop": "1.5rem" }}>
                            <img src={item.image}></img>
                            <h7 style={{}}>kipling</h7>
                            <div className="card-body">
                                <center>
                                    <h5 style={{ "fontFamily": "monospace", "fontSize": "2.1rem" }} className="card-title">{item.name}</h5>
                                </center>
                                <p className="card-text" style={{ "fontSize": "1.5rem" }} >{item.price} $</p>
                                <p className="card-text"> {item.description}</p>
                                <br></br>
                                <center>
                                    <button style={{ "position": "absolute", "bottom": "1rem", "left": "1rem", "right": "1rem", "borderColor": "pink", "backgroundColor": "gray", "opacity": "0.9" }} id={item._id} onClick={(e) => { e.preventDefault(); addItem(e.target.parentElement.id); dispatch(decreaseQty(item._id)) }} >
                                        <h5 id="addToCar" style={desighnAddToCar}>add to cart</h5>
                                    </button>
                                </center>
                            </div>
                        </div>
                    ))}
                </div>
            </center>
        </>
    )
}


