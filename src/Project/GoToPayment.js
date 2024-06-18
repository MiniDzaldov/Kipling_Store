import { useState } from "react";
import { useSelector } from "react-redux";

export default function GoToPayment() {

    const cart = useSelector((state) => state.cartReducer);
    const products = useSelector((prod) => prod.productReducer);
    return (
        <>
            <center>
                <table class="table table-striped" style={{"width": "50rem", "alignContent":"center"}}>
                    <tr>
                        <th style={{ "textAlign": "center" }}> Item Name</th>
                        <th style={{ "textAlign": "center" }}> Item Price</th>
                        <th style={{ "textAlign": "center" }}>Item Quentity</th>
                        <th style={{ "textAlign": "center" }}>Item Image</th>
                        <th style={{ "textAlign": "center" }}>Total</th>
                    </tr>
                    {cart.map((item) => (
                        <tr>
                            <td style={{ "textAlign": "center" }}>{item.name}</td>
                            <td style={{ "textAlign": "center" }}>{item.price} $</td>
                            <td style={{ "textAlign": "center" }}>{products[item._id].cart}</td>
                            <td style={{ "textAlign": "center" }}> <img className={item.image} src={item.image} style={{ "width": "8rem" }}></img></td>
                            <td style={{ "textAlign": "center" }}>{item.price * products[item._id].cart} $</td>
                        </tr>

                    ))}
                </table>
                <h3>Total: {cart.reduce((sum, item) => sum + (item.price * products[item._id].cart), 0)} $</h3>
            </center>
        </>
    )
}