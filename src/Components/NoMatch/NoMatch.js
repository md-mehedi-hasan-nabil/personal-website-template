import React from 'react';
import Menu from '../Home/Menu';

const NoMatch = () => {
    return (
        <div className="text-center container mt-5 pt-5">
            <Menu></Menu>
            <h1 className="mt-5">
                <code>
                    404 not found
                </code>
            </h1>
        </div>
    );
};

export default NoMatch;