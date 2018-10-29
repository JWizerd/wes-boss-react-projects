import React from 'react';

/**
 * stateless functional component
 *
 * using the arrow notation and parenthisis
 * instead of brackets around the body implies 
 * a return of all content inside
 */
const Header = (props) => (
    <header className="top">
        <h1>Catch 
            <span className="ofThe">
                Of The
            </span>
            Day
        </h1>
        <h3 className="tagline">
            <span>{ props.tagline }</span>
        </h3>
    </header>
);

export default Header;