
import React, {useEffect,useState} from 'react';
import{Route,Link,Switch} from 'react-router-dom'
//Components
import Home from './components/Home'
import Form from './components/PizzaForm'
import Confirmation from './components/Confirmation'
//Validations
import schema from './validation/schema';
import * as yup from 'yup'

//Styling
import style from 'styled-components'

const StyledDiv = style.div`
 width:100%;
 
 img{
  width:100%;
  height:50vh;
 }

 nav{
  margin:1% 1% 1% auto;
  width:10%;
}
 nav a{
  text-decoration: none;
  color: black;
  border:1px solid black;
  padding: 2% 5% 2% 5%;
 }
 h1{
   padding:.5%;
 }
 `


//Initial States
const initialFormValues ={
  name:'',
  size:'',
  sauce:'',
  sub:'',
  special:'',
  pepperoni:false,
  sausage:false,
  canadianBacon:false,
  spicyItalianSausage:false,
  grilledChicken:false,
  onions:false,
  greenPepper:false,
  dicedTomatoes:false,
  blackOlives:false,
  artichokeHearts:false,
  threeCheese:false,
  roastedGarlic:false,
  pineapple:false,
  extraCheese:false,
}

const initialFormErrors = {
  name:'',
  size:'',
  sauce:'',
  sub:'',
  special:'',
}
const initialPizzas = []
const initialDisabled = true

const App = () => {
  //States
  const [pizza,setPizza] = useState(initialPizzas)
  const [formValues,setFormValues] = useState(initialFormValues)
  const [formErrors,setFormErrors] = useState(initialFormErrors)
  const [disabled,setDisabled] = useState(initialDisabled)

//Helper Functions 
const validate = (name, value) => {
  yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({ ...formErrors, [name]: ''}))
    .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0]}))
}
//Event Handlers
  const change = (name,value) =>{
    validate(name,value)
    setFormValues({...formValues, [name]: value})
  }

  const submit = () =>{
    const newPizza = {
      name: formValues.name,
      size: formValues.size,
      sauce: formValues.sauce,
      sub: formValues.sub,
      special: formValues.special,
      toppings: ['pepperoni','sausage','canadianBacon','spicyItalianSausage','grilledChicken','onions','greenPepper','dicedTomatoes','blackOlives','artichokeHearts','threeCheese','roastedGarlic','pineapple','extraCheese'].filter(topping => formValues[topping]),
      //Topping as Booleans
      pepperoni: formValues.pepperoni,
      sausage: formValues.sausage,
      canadianBacon: formValues.canadianBacon,
      spicyItalianSausage: formValues.spicyItalianSausage,
      grilledChicken: formValues.grilledChicken,
      onions: formValues.onions,
      greenPepper: formValues.greenPepper,
      dicedTomatoes: formValues.dicedTomatoes,
      blackOlives: formValues.blackOlives,
      artichokeHearts: formValues.artichokeHearts,
      threeCheese: formValues.threeCheese,
      roastedGarlic: formValues.roastedGarlic,
      pineapple: formValues.pineapple,
      extraCheese: formValues.extraCheese,
    }
    setPizza([ ...pizza, newPizza])
    setFormValues(initialFormValues)
    console.log(newPizza)

  }

  //Use Effect
useEffect(() =>{
  schema.isValid(formValues).then(valid => setDisabled(!valid))
},[formValues])


//--------return--------
  return (
    <StyledDiv>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/'>Help</Link>
      </nav>
    {/* Routes */}
      <Switch>
        <Route path='/pizza/confirmation' render={props =>{
          return <Confirmation />
        }}/>
        <Route path='/pizza' render={props => {
          return <Form values ={formValues} update={change} submit={submit} errors={formErrors} disabled={disabled} />
        }}/>
        <Route path='/' component={Home} />
      </Switch>
    </StyledDiv>
  );
};
export default App;
