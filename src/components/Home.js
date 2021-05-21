import React from 'react'
import Pizza from '../Assets/Pizza.jpg'
import {Link} from 'react-router-dom'




export default function Home(){

    return(
        <div>
            <img src={Pizza} alt="pizza"  />
            <Link to='/pizza' >Pizza?</Link>
            <h2>Why code on an empty stomach?</h2>
        </div>
    )
}
