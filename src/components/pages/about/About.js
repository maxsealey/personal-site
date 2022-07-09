import './about.scss'

const About = () => {
  return (
    <div className='about' id="about">
      <div className='text-contain'>
        <h1>About Me</h1>
        <h3>Hey, my name is Max Sealey. <br/>Thanks for checking out my website!</h3><br/>
        <p>
          I'm currently pursuing my B.S. in Computer Science from Western Governors University, 
          expecting to graduate in August 2023. I've spent the past several months self-teaching 
          Web Development, specifically JavaScript and a few of its Frontend and Backend frameworks. 
          Interested in hearing about Software and Web Development internships and job opportunities. 
          Connect with me on here, on <a href="https://www.linkedin.com">Linkedin</a>, or on <a href="https://www.github.com">GitHub</a>!<br/>
        </p>
        <p>
          Some of my interests (besides coding) include reading, NFL football (Go Hawks!), video games 
          (Rocket League, Madden, Pokemon, and a few others), genealogical research, and spending time with my
          fiance/family.
        </p>
      </div>
    </div>
  )
}

export default About;