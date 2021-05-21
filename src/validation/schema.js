import * as yup from 'yup'

const schema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('A name is required')
        .min(2, "name must be at least 2 characters"),
    size: yup
        .string()
        .oneOf(['small','medium','large'], ' size is required'),   
    // toppings: yup
    //     .string()
    //     .oneOf(['pepperoni','sausage','canadianBacon','spicyItalianSausage','grilledChicken','onions','greenPepper','dicedTomatoes','blackOlives','artichokeHearts','threeCheese','roastedGarlic','pineapple','extraCheese'], 'At least one topping'),
    special: yup
        .string()
        .required('instructions are required'),
    sauce: yup
        .string()
        .oneOf(['originalRed','garlicRanch','bbqSauce','spinachAlfredo'],'Pick a sauce'),
    
    pepperoni: yup.boolean(),
    sausage: yup.boolean(),
    canadianBacon: yup.boolean(),
    spicyItalianSausage: yup.boolean(),
    grilledChicken: yup.boolean(),
    onions: yup.boolean(),
    greenPepper: yup.boolean(),
    dicedTomatoes: yup.boolean(),
    blackOlives: yup.boolean(),
    artichokeHearts: yup.boolean(),
    threeCheese: yup.boolean(),
    roastedGarlic: yup.boolean(),
    pineapple: yup.boolean(),
    extraCheese: yup.boolean(),
})

export default schema