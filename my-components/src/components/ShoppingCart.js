import React, { useReducer, useState } from 'react'

const cartReducer = (state, action)=>{
    switch(action.type){
        case 'add':
            return [...state, action.payload];
        case 'remove':
            return state.filter((item) => item.id !== action.payload);
        case 'clear':
            return [];
        default:
            return state;
    }
}

const ShoppingCart = () => {
    const [cartItems, dispatch] = useReducer(cartReducer, []);
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);

    // add product to cart
    const addToCart = ()=> {
        const newItem = {
            id: cartItems.length + 1,
            name,
            price: Number(price),
        }
        dispatch({
            type: 'add',
            payload: newItem
        })
        setName('');
        setPrice(0);
    }

    // remove product from cart
    const removeFromCart = (itemId) => {
        dispatch({
            type: 'remove',
            payload: itemId
        })
    }

    // clear all products from cart
    const clearCart = ()=> {
        dispatch({
            type: 'clear'
        })
    }
    return (
        <div>
            <h2>Shopping Cart</h2>
            <ul>
                {cartItems.map((item)=>(
                    <li key={item.id}>
                        {item.name} - ${item.price}
                        <button onClick={()=> removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            <div>
                <input type='text' value={name} onChange={(e) => {setName(e.target.value)}} placeholder="Product Name" /> 
                <input type='number' value={price} onChange={(e) => {setPrice(e.target.value)}} placeholder='Price' />
                <button onClick={addToCart}>Add to Cart</button>
            </div>
            <button onClick={clearCart}>Clear Cart</button>
        
        </div>
    )
}

export default ShoppingCart
