import React, { useContext } from 'react';
import { useState } from 'react';
import MyContext from './Context';

const Form = (props) =>{
    const context = useContext(MyContext);
    
    const onChange = () => { }
    const onSubmit = () =>{}
    return (
    <form onSubmit ={onSubmit} className="form-control">
        <input type="text" className="form-control"/>
        <button type="submit" className="btn-primary">Submit</button>
    </form>
    );
}
export default Form;