import React from 'react'
import { Link } from 'react-router-dom'
//Pizza photo
import Pizza from '../Assets/Pizza.jpg'
//Styling
import style from 'styled-components'
const StyledDiv = style.div`
width:60%;
margin:0 auto;
border:2px solid black;
display:flex;
flex-direction:column;

label{
    margin:0;
}

form{
    display:flex;
    flex-flow:column wrap;
}
h2{
    margin:0 auto;
    font-size:2rem
}
`

const StyledLabel = style.label`
border-bottom:1px solid black;
padding-bottom:1%;
padding-left:0.5%;

p{
    font-size: 1.6rem;
}
`
const StyledLabelTop = style.label`
border-bottom:1px solid black;
padding-bottom:1%;
padding-left:0.5%;
display:flex;
flex-flow: column wrap;
justify-content:space-even;



label{
    padding:1%;
}
p{
    font-size: 1.6rem;    
}
`

export default function Form(props){
    const { values,update,submit,disabled,errors} = props
    
    const onChange = (e) =>{
        const { name, value,type,checked} = e.target
        const valueToUse = type === 'checkbox'? checked : value
        update(name,valueToUse)
    }

    const onSubmit = (e) =>{
        e.preventDefault()
        submit()
    } 

    return(
        <StyledDiv>
            <form id='order-pizza' onSubmit={onSubmit}>
                <img src={Pizza} alt="pizza" />
                <h2>Build Your Own Pizza</h2>
                <StyledLabel> <p>Making the Order to Who?</p>  
                    <input 
                    id='name-input'
                    name='name'
                    value = {values.name}
                    type='text'
                    onChange={onChange}
                    />
                </StyledLabel>
                <StyledLabel><p>Choice of Size</p>
                    <select id='size-dropdown' name='size' value = {values.size} onChange={onChange}>
                        <option value=''>-Pick a size-</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value ='large'>Large</option>
                    </select>
                </StyledLabel>
                <StyledLabel> <p>Choice of Sauce</p> 
                  <label>  <input type ='radio' data-test='radio' name='sauce' onChange={onChange} value='originalRed' checked={values.sauce === 'originalRed'}/> Original Red </label>
                   <label> <input type ='radio' name='sauce' onChange={onChange} value='garlicRanch' checked={values.sauce === 'garlicRanch'} />Garlic Ranch</label>
                   <label> <input type ='radio' name='sauce' onChange={onChange} value='bbqSauce' checked={values.sauce === 'bbqSauce'} /> BBQ Sauce</label>
                   <label> <input type ='radio' name='sauce' onChange={onChange} value='spinachAlfredo' checked={values.sauce === 'spinachAlfredo'} />Spinach Alfredo</label>
                </StyledLabel>
                <StyledLabelTop><p>Toppings</p>
                    <label> <input type='checkbox' name='pepperoni' checked ={values.pepperoni} onChange={onChange}/>Pepperoni</label>
                    <label> <input type='checkbox' name='sausage' checked ={values.sausage} onChange={onChange}/>Sausage</label>
                    <label> <input type='checkbox' name='canadianBacon' checked ={values.canadianBacon} onChange={onChange}/>CanadianBacon</label>
                    <label> <input type='checkbox' name='spicyItalianSausage' checked ={values.spicyItalianSausage} onChange={onChange}/>Spicy Italian Sausage</label>
                    <label> <input type='checkbox' name='grilledChicken' checked ={values.grilledChicken} onChange={onChange}/>Grilled Chicken</label>
                    <label> <input type='checkbox' name='onions' checked ={values.onions} onChange={onChange}/>Onions</label>
                    <label> <input type='checkbox' name='greenPepper' checked ={values.greenPepper} onChange={onChange}/>Green Pepper</label>
                    <label> <input type='checkbox' name='dicedTomatoes' checked ={values.dicedTomatoes} onChange={onChange}/>Diced Tomatoes</label>
                    <label> <input type='checkbox' name='blackOlives' checked ={values.blackOlives} onChange={onChange}/>Black Olives</label>
                    <label> <input type='checkbox' name='artichokeHearts' checked ={values.artichokeHearts} onChange={onChange}/>Artichoke Hearts</label>
                    <label> <input type='checkbox' name='threeCheese' checked ={values.threeCheese} onChange={onChange}/>Three Cheese</label>
                    <label> <input type='checkbox' name='roastedGarlic' checked ={values.roastedGarlic} onChange={onChange}/>Roasted Garlic</label>
                    <label> <input type='checkbox' name='pineapple' checked ={values.pineapple} onChange={onChange}/>Pineapple</label>
                    <label> <input type='checkbox' name='extraCheese' checked ={values.extraCheese} onChange={onChange}/>Extra Cheese</label>
                    
                </StyledLabelTop>
                <StyledLabel><p>Special Instructions</p>
                    <input id='special-text' type='text' name='special' value={values.special} onChange={onChange} />
                </StyledLabel>
                {/* Errors */}
                <div className='errors'>
                    <div>{errors.name}</div>
                    <div>{errors.sauce}</div>
                    <div>{errors.size}</div>
                    <div>{errors.topping}</div>
                    <div>{errors.special}</div>
                </div> 
                
                <button id='order-button' disabled={disabled}>Add to Order</button> <Link to='/pizza/confirmation'>Continue</Link>
            </form>
        </StyledDiv>
    );
}

