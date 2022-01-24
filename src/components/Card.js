import React from 'react';
import classes from './Card.module.css';
import {GrLocation} from "react-icons/gr";

function Card(props){
    return(
        <div className={classes.card}>
            <img src={process.env.PUBLIC_URL + 'props.imgUrl'}/>
            <div className={classes.info}>
                <small> <GrLocation /> {props.location}</small>
                <h3><strong>{props.title}</strong></h3>
                <small><strong>{props.startDate} - {props.endDate}</strong></small>
                <p className={classes.text}>{props.description}</p>
            </div>
        </div>
    )
}

export default Card;