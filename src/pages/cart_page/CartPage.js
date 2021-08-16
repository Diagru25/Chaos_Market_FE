import globalActions from '@src/redux/global/actions';
import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

const CartPage = () => {

    const dispatch = useDispatch();
    const {items} = useSelector(state => state.globalReducer.carts);

    useEffect(() => {
        dispatch(globalActions.actions.getSyncCart());
    },[dispatch])
    
    return (
        <div>
            <h1>CART</h1>
            {
                items.map((item, index) => (
                    <p key={index}>{item.product ? item.product.name : 'error'} - {item.quantity }</p>
                ))
            }
        </div>
    );
};

export default CartPage;