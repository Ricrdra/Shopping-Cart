import React from 'react';

function Cart(props) {


    return (

        <React.Fragment>

            <div className={`${props.className}  w-8 h-8 bg-cover bg-center relative`}>
                <div onClick={() => props.setWatchable(!props.watchable)}
                     className="cursor-pointer transition ease-in-out hover:scale-110 ">
                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35"
                         viewBox="0 0 16 16">
                        <path className="fill-black"
                              d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
                    </svg>
                    <span
                        className="absolute right-0 top-0  w-4 h-4
                text-white bg-blue-400 rounded-full
                flex-center text-xs select-none">
                {props.size < 10 ? props.size : "9+"}
                 </span>
                </div>

                <div className={`${!props.watchable && 'hidden'} p-4 shadow-sm opacity-[.95]  z-10
                        shadow-red-200 rounded-xl grid gap-y-2 grid-cols-1
                        bg-white text-black absolute w-64 top-6 right-0`}>

                    {props.size > 0 ? props.cart.map(props.cartRender) :
                        <p className='text-sm select-none'>No items in cart yet</p>
                    }
                    {props.size > 0 ?
                        <React.Fragment>
                            <div className="flex justify-between">
                                <p className='text-sm select-none'>Total:</p>
                                <p className='text-sm select-none'>${props.cart.reduce((total, item) => item.product.price * item.quantity + total, 0)}</p>
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-sm text-white font-bold  px-4 rounded-full"
                            >Pay
                            </button>
                        </React.Fragment>
                        : null}

                </div>
            </div>


        </React.Fragment>
    );
}

export default Cart;