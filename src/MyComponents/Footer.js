import React from 'react'
import './footer.css'
export const Footer = () => {
    let footerStyle={
        position: "relative",
        width: "100%",
        height:"40px"
    }
    return (
        <footer className="bg-dark text-light" style={footerStyle}>
            <p className="text-center">
            Copyright &copy; My ToDosList
            </p>
           
        </footer>
    )
}


export default Footer;