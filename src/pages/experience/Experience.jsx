import React, {useEffect} from 'react';
import './experience.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';

const Experience = () => {
    useEffect(() => {
        document.body.style.overflow = "auto";  
        return () => {
          document.body.style.overflow = "hidden";
        }
      }, [])
    return (
        <div className="experience">
            <Navbar/>
            <ContentTemplate heading="Education & Experience" subtext=""/>
        </div>
    )
}

export default Experience;