import React from 'react';

class MyInput extends React.Component {
    render() {
        const { name, age, children, handleClick, handleChange } = this.props
        return (
            <div>
                <div>Data from parent: { name }</div>
                <div>age : { age }</div>
                <div>{ children }</div>
                <button onClick={ handleClick }>Second click</button>
                <input onChange={ handleChange } />
            </div>
        );
    }
}

export default MyInput;