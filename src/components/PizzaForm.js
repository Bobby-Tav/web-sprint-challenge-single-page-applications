import React from 'react'
//Pizza photo
import Pizza from '../Assets/Pizza.jpg'


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
        <div>
            <form id='order-pizza' onSubmit={onSubmit}>
                <img src={Pizza} />
                <h2>Build Your Own Pizza</h2>
                <label> Making the Order to Who?
                    <input 
                    id='name-input'
                    name='name'
                    value = {values.name}
                    type='text'
                    onChange={onChange}
                    />
                </label>
                <label>Choice of Size
                    <select id='size-dropdown' name='size' value = {values.size} onChange={onChange}>
                        <option value=''>-Pick a size-</option>
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value ='large'>Large</option>
                    </select>
                </label>
                <label> Choice of Sauce 
                  <label>  <input type ='radio' name='sauce' onChange={onChange} value='originalRed' checked={values.sauce === 'originalRed'}/> Original Red </label>
                   <label> <input type ='radio' name='sauce' onChange={onChange} value='garlicRanch' checked={values.sauce === 'garlicRanch'} />Garlic Ranch</label>
                   <label> <input type ='radio' name='sauce' onChange={onChange} value='bbqSauce' checked={values.sauce === 'bbqSauce'} /> BBQ Sauce</label>
                   <label> <input type ='radio' name='sauce' onChange={onChange} value='spinachAlfredo' checked={values.sauce === 'spinachAlfredo'} />Spinach Alfredo</label>
                </label>
                <label>Toppings
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
                </label>
                <label>Choice of Substitute
                    {/* work on  */}
                    <label><input type='checkbox' name='sub' checked={values.sub} onChange={onChange} /> 
                    
                    </label>
                </label>
                <label>Special Instructions
                    <input id='special-text' type='text' name='special' value={values.special} onChange={onChange} />
                </label>
                {/* adding more than one */}
                <button id='order-button' disabled={disabled}>Add to Order</button>
            </form>
        </div>
    );
}

