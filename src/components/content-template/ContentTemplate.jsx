import React from 'react';
import "./content-template.scss";

class ContentTemplate extends React.Component {
    render(){
        return (
            <div className='img-container'>
                <div className='main-img'>
                <div className='heading'>
                    <h1>{this.props.heading}</h1>
                    <div style={{maxWidth:"60%"}}>
                    <p>{this.props.subtext}</p>
                    </div>
                </div>
                </div>
            </div>
        )
    }
}

export default ContentTemplate;