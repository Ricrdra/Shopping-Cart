import React from 'react';

function Header(props) {
    const children = React.Children.toArray(props.children);

    return (
        <React.Fragment>
            <div className="h-16 w-full flex-row px-4 bg-red-400 flex justify-between items-center
        shadow-[0_14px_24px_-11px_rgba(0,0,0,0.7)]">
                {children.map((child, index) => {
                    return React.cloneElement(child, {
                        className: props.childClass,
                        key: index,
                    });
                })}
            </div>
            <h1 className="text-center w-full text-5xl font-extrabold select-none mt-16 text-red-500 text-shadow-black-sm"> The
                Captain's
                Arbejas</h1>

        </React.Fragment>

    )
}


export default Header;