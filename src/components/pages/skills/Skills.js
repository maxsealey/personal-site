import React, { Component } from 'react'
import './skills.scss'
import {images} from '../../../data/Images'

// Considering switching these to Fontawesome icons, use map function for images


const Skills = () => {
  return (
    <div className='skills' id="skills">
      <h4 className='text-center skills-text'>My Skills</h4>
        <div class="d-md-inline-flex justify-content-center logos-contain">
          <img src={images[1].url} alt={images[1].imgName}></img>
          <img src={images[2].url} alt={images[2].imgName}></img>
          <img src={images[3].url} alt={images[3].imgName}></img>
          <img src={images[4].url} alt={images[4].imgName}></img>
          <img src={images[5].url} alt={images[5].imgName}></img>
          <img src={images[6].url} alt={images[6].imgName}></img>
          <img src={images[7].url} alt={images[7].imgName}></img>
          <img src={images[8].url} alt={images[8].imgName}></img>
        </div>
    </div>
  )

}

export default Skills;