import React from 'react';


function Item({item, onClick}) {
    return (
        <div key={item.name}
             className="max-w-xs w-full flex-center flex-col
             sm:shadow-red-900 sm:shadow-xl shadow-xl shadow-red-900
               rounded-md  overflow-hidden">

            <div className="card-body flex flex-col items-center justify-center  w-full">
                <h1 className="md:text-3xl select-none sm:text-2xl">{item.name}</h1>
                <span className={`${item.image} w-full select-none h-32 bg-center bg-contain bg-no-repeat`}/>
                <span className="text-black  md:text-3xl select-none sm:text-2xl">${item.price}</span>
            </div>
            <div
                className="card-footer bg-red-400 w-full h-full flex self-end justify-center transition  hover:scale-110">
                <button
                    onClick={onClick}
                    className="md:text-xl bg-red-400 sm:text-md text-center text-white w-full select-none">
                    Add to cart
                </button>
            </div>

        </div>
    );
}


export default Item;
