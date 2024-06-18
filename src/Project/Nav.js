import { useNavigate } from "react-router-dom";
import l from "../kiplingImages/logo2.png"
import lo from "../kiplingImages/logo6.png"
import myCart from "../Pictures/ccc.png"

export default function Header() {
    const navigate = useNavigate();
    const font = { "color": "white", "fontSize": "2rem", "cursor": "pointer" }
    return (
        <>
            <img className={lo} src={lo} style={{ "width": "100vw", "height": "50vh" }}></img>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark navbar-mine" style={{ "position": "sticky", "top": "0", "zIndex": "1", "width": "100vw" }}>
                <div class="collapse navbar-collapse" id="navbarText" >
                    <ul class="navbar-nav mr-auto" style={{ "display": "grid", "grid-auto-rows": "auto", "grid-template-columns": "repeat(7, 1fr)", "place-items": "center", "width": "100vw" }} >
                        <li class="nav-item active" >
                            <a class="nav-link bt"><img src={l} style={{ "width": "3rem" }}></img></a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link bt" onClick={() => navigate("/about")} style={font}>About</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link bt"><img src={l} style={{ "width": "3rem" }}></img></a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link bt" onClick={() => navigate("/products")} style={font}>Show Product</a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link bt"><img src={l} style={{ "width": "3rem" }}></img></a>
                        </li>
                        <li class="nav-item" >
                            <a class="nav-link bt" onClick={() => navigate("/my_cart")} style={font}>
                                <img className={myCart} src={myCart} style={{ "width": "50px" }}></img>
                            </a>
                        </li>
                        <li class="nav-item active">
                            <a class="nav-link bt"><img src={l} style={{ "width": "3rem" }}></img></a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
