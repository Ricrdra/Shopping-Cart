import React from 'react';
import Header from './Header';
import Cart from './Cart';
import Logo from './Logo';
import Main from './Main';
import useCart from '../Hooks/useCart';
import Item from './Item';
import {CartItem} from './CartItem';

const initialFruits = [
    {
        'image': 'bg-fruit-arbejas',
        'name': 'Arbejas',
        'price': 10.00,
    },
    {
        'image': 'bg-fruit-tomate',
        'name': 'Tomate',
        'price': 10.0,
    },
    {
        'image': 'bg-fruit-lechuga',
        'name': 'Lechuga',
        'price': 10.00,
    }
];

const App = () => {
    const [products, setProducts] = React.useState(initialFruits);
    const {
        cart,
        addToCart,
        removeFromCart,
        cartSize,
        watchable,
        setWatchable
    } = useCart();


    return (
        <React.Fragment>
            <Header childClass="text-3xl text-white xl:mx-5">
                <Logo/>
                <Cart
                    size={cartSize}
                    setWatchable={setWatchable}
                    watchable={watchable}
                    cart={cart}
                    cartRender={item => <CartItem key={item.product.name} item={item}/>}
                />


            </Header>
            <Main
                render={item => (<Item item={item} onClick={() => addToCart(item)} key={item.name}/>)}
                products={products}
                grid="grid sm:grid-cols-3 gap-5 md:gap-2 xl:gap-0  place-items-center"
            />
        </React.Fragment>
    )
        ;
};
export default App;