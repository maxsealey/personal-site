import React, { Component } from 'react';
import './footer.scss'

export default class Footer extends Component {
    render() {
        const textStyle = {color:'black', fontSize:'12px'}
        const containerStyle = { width:'100%', position:'absolute' }

        return (
            <div className='footer' style = { containerStyle }>
                <p className = "text-center" style = { textStyle }>Copyright &copy; 2022 Max Sealey</p>
            </div>
        )
    }
}