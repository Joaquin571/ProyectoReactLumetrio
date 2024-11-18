import React from "react";

function Footer() {
    return (
        <footer style={footerStyle}>
        <p>Joaquín González - Estudiante de Lumetrio</p>
        </footer>
    );
}

const footerStyle = {
    backgroundColor: "#333",
    color: "#fff",
    textAlign: "center",
    padding: "10px 0",
    bottom: 0,
    width: "100%",
};

export default Footer;
