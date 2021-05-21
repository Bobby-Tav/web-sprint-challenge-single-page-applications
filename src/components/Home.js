import React from 'react'
import Pizza from '../Assets/Pizza.jpg'
import {Link} from 'react-router-dom'
//Styling
import style from 'styled-components'

const StyledLink = style(Link)`
display:block;
width:50%;
margin:1% auto;
text-decoration: none;
color: black;
border:1px solid black;
padding: 2% ;
text-align:center;
`

const StyledH2 =style.h2`
font-align:center;
font-size:3rem;
margin:1% auto;
width:50%;
`




export default function Home(){

    return(
        <div>
            <img src={Pizza} alt="pizza"  />
            <StyledLink to='/pizza' >Pizza?</StyledLink>
            <StyledH2>Why code on an empty stomach?</StyledH2>
        </div>
    )
}
