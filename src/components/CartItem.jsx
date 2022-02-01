import React from 'react';

export function CartItem({item}) {

    return <div className='border-b border-solid flex border-black justify-evenly w-full'>
        <p className="select-none text-xs flex items-center"> {item.name} </p>
        <p className="select-none text-xs flex items-center"> {item.quantity}x${item.product.price} </p>
        <span className={`${item.product.image} w-12 h-8 bg-contain bg-no-repeat bg-center`}/>
        <p className="select-none text-xs flex items-center"> ${item.product.price * item.quantity} </p>
    </div>
}

