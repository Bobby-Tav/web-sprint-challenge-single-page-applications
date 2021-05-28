import React from 'react'
import Pizza from '../Assets/Pizza.jpg'




export default function Confirmation(){

    return(
        <div>
            <img src={Pizza} alt="pizza" /> 
            <h2>You are done</h2> 
        </div>
    )
}