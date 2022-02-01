module.exports = {
    content: ['src/**/*.{js,jsx,ts,tsx}', 'src/index.html'],
    theme: {
        extend: {


            backgroundImage: {
                'fruit-arbejas': 'url("/src/img/arbejas.jpg")',
                'fruit-tomate': 'url("/src/img/tomate.jpg")',
                'fruit-lechuga': 'url("/src/img/lechuga.jpg")',
                'shopping-cart': 'url("/src/icons/cart.png")',
            }
        },
    },
    plugins: [],
}