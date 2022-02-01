import React from 'react';

function Logo(props) {
    return (
        <div className="h-full relative flex items-center">
            <span className={`${props.className} pointer-events-none  select-none`}>React</span>
        </div>
    );
}

export default Logo;
