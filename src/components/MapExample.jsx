import React from 'react';

const MapExample = () => {
    const names = ['HTML', 'CSS', 'JavaScript', 'React'];
    const nameList = names.map((item, index) => { return <li key={ index }>{ item }</li> });

    return (
        <div>
            <ul>{ nameList }</ul>
        </div>
    );
};

export default MapExample;