import React from 'react';
import '../../style.css';

export default class Nav extends React.Component {
    render (){
        const navStyle = { height:'70px', display:'flex', justifyContent:'space-between', position:'absolute' }
        const linkStyle = { color:'white', textDecoration:'none', cursor:'pointer' }

        return (
            <div>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark fixed-top' 
            style={ navStyle }>
                <a href="#" style={ linkStyle }>
                    <h3 style={{margin:'auto', marginLeft:'20px'}}>Max Sealey</h3>
                </a>
            </nav>
        </div>
        )
    }
}