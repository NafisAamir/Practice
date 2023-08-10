import { Link } from "react-router-dom"
function Navbar() {
    return(
        <div className = "navbar" style={{display:"flex", justifyContent:"space-around"}} >
            <h2><Link to={"/login"}>Login</Link></h2>
            <h2><Link to={"/"}>Home</Link></h2>
            <h2><Link to={"/about"}>About</Link></h2>
            <h2><Link to={"/contact"}>Contact</Link></h2>
            <h2><Link to={"/products"}>Products</Link></h2>
        </div>
    )
}

export { Navbar }