
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFromCart } from "../redux/actions/cartAction";
import { addQty, decreaseQty } from "../redux/actions/productsAction";
import { useNavigate } from "react-router-dom";
import gar from "../Pictures/garbage1.png"
import cerditCard from "../Pictures/credit-card.png"
export default function MyCart() {
    const cart = useSelector((state) => state.cartReducer);
    const products = useSelector((prod) => prod.productReducer);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const d = (itemID) => {
        if (products[itemID].cart > 1) {
            dispatch(addQty(itemID));
        }
        else {
            dispatch(deleteFromCart(itemID));
            dispatch(addQty(itemID));
        }
    };

    const plus = (itemID) => {
        if (products[itemID].qty > 0) {
            dispatch(decreaseQty(itemID));
        }
        else {
            alert("no more left");
        }
    }
    const designCard = { "width": "18rem", "marginRight": "8px", "borderColor": "black"}


    return (
        <>
            <button style={{ "borderColor": "pink" }} onClick={() => { alert("u want 2 pay???"); navigate("/payment") }}><img src={cerditCard} style={{ "width": "50px", }}></img></button>

            <div style={{ "display": "flex" }}>
                {cart.map((item) => (

                    <div className="card" style={designCard}>
                        <img style={{ "width": "10rem", "marginLeft":"3.5rem"}} src={item.image}></img>
                        <div className="card-body">
                            <center>
                                <h5 style={{ "fontFamily": "monospace", "fontSize": "15px" }} className="card-title">{item.name}</h5>
                                <p className="card-text">{item.price} $</p>
                            </center>
                            <br></br>
                            <center >
                                <td class="card-text">
                                    <button class="btn btn-outline-dark" onClick={(e) => { e.preventDefault(); d(item._id) }}>-</button>
                                    <span style={{"padding": "1rem"}}>{item.cart}</span>
                                    <button class="btn btn-outline-dark" onClick={(e) => { e.preventDefault(); plus(item._id);}}>+</button>
                                    <br></br><br></br>
                                    <center>
                                        <button class="btn btn-outline-dark" style={{ "marginLeft": "0.1rem" }} onClick={(e) => { e.preventDefault(); dispatch(deleteFromCart(item._id)); dispatch(addQty(item._id)) }}>
                                            <img className={gar} src={gar} style={{ "width": "20px", "height": "20px"}}></img>
                                        </button>
                                    </center>
                                </td>
                            </center>              
                        </div>
                    </div>
                ))}
            </div>

        </>
    )
}
