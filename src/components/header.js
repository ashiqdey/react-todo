import React from 'react'
import {
    Link
  } from "react-router-dom";

export default function Header(props) {
    return (
        <header>
            <img src="" alt="Company logo" />
            This is header {props.title}

            <ul>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/todo">Todo</Link></li>
            </ul>
        </header>
    )
}
