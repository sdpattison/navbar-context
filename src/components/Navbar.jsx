import { render } from '@testing-library/react';
import React, { useContext, useState } from 'react';
import MyContext from './Context';

const Navbar = props =>{
    
    
        return (
            <div className=" d-flex flex-row-reverse bg-primary p-5 justify-content-right">
                <h1 className="text-right text-white">Hello </h1>
            </div>
        );
}
export default Navbar;