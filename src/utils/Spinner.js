import React, { Component } from 'react';
import loading from '../assets/loading.gif';

class Loading extends Component {
    render() {
        return (
            <div className='text-center my-2'>
                <img src={loading}  alt={loading}/>
            </div>
        );
    }
}

export default Loading;
