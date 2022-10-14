import { legacy_createStore as createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk'
import { cartReducer } from './reducers/cartReducer';
import { productDetailsReducer, productListReducer } from './reducers/productReducer';

const reducer = combineReducers({
    productList: productListReducer,
    productDetails: productDetailsReducer,
    cart: cartReducer
});

const composeEhn = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose
const initialState = {};

const store = createStore(reducer, initialState, composeEhn(applyMiddleware(thunk)));

export default store