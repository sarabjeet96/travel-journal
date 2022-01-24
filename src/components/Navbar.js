
import React from 'react';
import {GiEarthAmerica} from "react-icons/gi";
import classes from './Navbar.module.css';

function Navbar(){
    return(
        <div className={classes.nav}>   
            <ul>
                <li>
                    <GiEarthAmerica size={20}/>
                </li>
                <li>my travel journal.</li>
            </ul>
        </div>
    )
}

export default Navbar;