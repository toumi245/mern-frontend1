import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {productListReducer,productDetailsReducer} from './reducers/productReducer'
import {userLoginReducer,userRegisterReducer,userDetailsReducer, userUpdateProfileReducer} from './reducers/userReducers'
import {composeWithDevTools} from 'redux-devtools-extension'
import { cartReducer}  from './reducers/cartReducers'
import {orderCreateReducer,orderDetailsReducer,orderPayReducer} from './reducers/orderReducers'
const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    cart:cartReducer,
    userLogin:userLoginReducer,
    userRegister:userRegisterReducer,
    userDetails:userDetailsReducer,
    userUpdateProfile:userUpdateProfileReducer,
    orderCreate:orderCreateReducer,
    orderDetails:orderDetailsReducer,
    orderPay:orderPayReducer
})
const cartItemsFromStorage = localStorage.getItem('cartItems')
  ? JSON.parse(localStorage.getItem('cartItems'))
  : [];
const userInfoFromStorage = localStorage.getItem('userInfo')
  ? JSON.parse(localStorage.getItem('userInfo'))
  : null;
  const shippingAddressFromStorage = localStorage.getItem('shippingAddress')
  ? JSON.parse(localStorage.getItem('shippingAddress'))
  : {};

const initialState = {

    cart: { cartItems: cartItemsFromStorage,shippingAddress:shippingAddressFromStorage },
    userLogin:{userInfo:userInfoFromStorage}
};
  
const middleware=[thunk]
const store=createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
)  
export  default store