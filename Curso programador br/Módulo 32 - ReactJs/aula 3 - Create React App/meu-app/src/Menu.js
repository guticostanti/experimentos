import React from 'react'
import './App.css'

function Menu(props) {
    return (
        <ul className="menu">
            {props.links.map((link, index) => {
                return (
                    <li key={index}>{link}</li>
                )
            })}
        </ul>
    )
}

export default Menu;