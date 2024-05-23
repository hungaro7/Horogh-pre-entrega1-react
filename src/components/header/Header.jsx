import React from "react";
import { NavBar } from "./NavBar";
import { Carrito } from "./Carrito";

export const Header =() =>
    {
        return (
            <header className="header"> 
               
                <NavBar/>
                <Carrito/>

            </header>
        )
    }
    