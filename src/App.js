
import React, {useEffect,useState} from 'react';
import{Route,Link,Switch} from 'react-router-dom'
import Home from './components/Home'
import Form from './components/PizzaForm'
import schema from './validation/schema';
import * as yup from 'yup'

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
  return (
    <div>
      <h1>Lambda Eats</h1>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/#'>Help</Link>
      </nav>
    {/* Routes */}
    <Switch>
    <Route path='/pizza' render={props => {
      return <Form values ={formValues} update={change} submit={submit} error={formErrors} disabled={disabled} />
    }}/>
    <Route path='/' component={Home} />
    </Switch>
    </div>
  );
};
export default App;
