import axios from 'axios';
import { CART_ADD_ITEM, CART_REMOVE_ITEM,CART_SAVE_SHIPPING_ADRESS,CART_SAVE_PAYMENT_METHOD } from '../constants/cartConstants';


export const addToCart=(id,qty)=>async(dispatch,getState)=>{
    const {data}= await axios.get(`https://mern-commerce-backend-ohn1.onrender.com/api/products/${id}`)
    console.log("data : " , data)
    dispatch({
    type:CART_ADD_ITEM,
    payload:{
        product:data._id,
        name:data.name,
        image:data.image,
        price:data.price,
        countInStock:data.CountInStock,
        qty,

    },
})
localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))

}
export const removeFromCart=(id)=>(dispatch,getState)=>{
    dispatch({
        type:CART_REMOVE_ITEM,
        payload:id,
    })
    localStorage.setItem('cartItems',JSON.stringify(getState().cart.cartItems))
}
//saveShipping adress
export const saveShippingAddress=(data)=>(dispatch,getState)=>{
    dispatch({
        type:CART_SAVE_SHIPPING_ADRESS,
        payload:data,
    })
    localStorage.setItem('shippingAddress',JSON.stringify(data))
}
//savePaymentMethod
export const savePaymentMethod=(data)=>(dispatch,getState)=>{
    dispatch({
        type:CART_SAVE_PAYMENT_METHOD,
        payload:data,
    })
    localStorage.setItem('paymentMethod',JSON.stringify(data))
}
