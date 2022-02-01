import React from 'react';


function Main(props) {
    return (
        <main className="my-32 h-full">
            <div className={`${props.grid} px-2 h-full`}>
                {props.products.map(props.render)}
            </div>
        </main>
    );
}

export default Main;