import React from 'react';
import './MenuToggle.css';

const menuToggle = (props) => {

    return(
        <div className='DrawerToggle' onClick={props.click}>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}

export default menuToggle;