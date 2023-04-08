import './about.scss'

import bg_pattern from '../../../assets/bg_pattern.png';

const About = () => {
  return (
    <div className='about' id="about" 
    style={{backgroundImage:`url(${bg_pattern})`,
            backgroundRepeat:'repeat'}}>
      <div className='about-left'>
        <div className='about-card bg'></div>
      </div>
      <div className='about-right'>
      
      </div>
    </div>
  )
}

export default About;