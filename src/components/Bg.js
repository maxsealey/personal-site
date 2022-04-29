import React from 'react';

export class Bg extends React.Component {
    render() {
        const bgStyle={
            backgroundImage: "url(../../public/images//Users/maxsealey/Development/personal/personal-site/public/images/bg-image-by-roman-odintsov.jpg)",
            height:'100vh',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
        };
        return (
          <div style={myStyle}></div>
        ); 
    }
}