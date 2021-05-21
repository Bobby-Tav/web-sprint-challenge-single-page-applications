import React from 'react'
import Pizza from '../Assets/Pizza.jpg'
import {Route , Link} from 'react-router-dom'




export default function Home(){

    return(
        <div>
            <img src={Pizza} />
            <Link to='/pizza' >Pizza?</Link>
            <h2>Why code on an empty stomach?</h2>
        </div>
    )
}
