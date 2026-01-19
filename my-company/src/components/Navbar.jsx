import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        padding: "15px",
        backgroundColor: "#1e293b",
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: 0,
      }}
    >
      <Link style={{ color: "white" }} to="/">Home</Link>
      <Link style={{ color: "white" }} to="/about">About</Link>
      <Link style={{ color: "white" }} to="/services">Services</Link>
      <Link style={{ color: "white" }} to="/contact">Contact</Link>
    </nav>
  );
}

export default Navbar;