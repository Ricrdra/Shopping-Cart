import React from 'react';

function useCart() {
    const [cart, setCart] = React.useState([]);
    const [watchable, setWatchable] = React.useState(false);

    function addToCart(product) {
        const item = cart.findIndex(item => item.name === product.name)
        if (item === -1) {
            setCart([...cart, {name: product.name, product, quantity: 1}]);
        } else {
            const newCart = [...cart];
            newCart[item].quantity += 1;
            setCart(newCart);
        }
    }

    function removeFromCart(product) {
        setCart(cart.filter(p => p.id !== product.id));
    }


    return {
        cart,
        addToCart,
        removeFromCart,
        cartSize: cart.reduce((acc, item) => acc + item.quantity, 0),
        watchable,
        setWatchable
    };

}

export default useCart;