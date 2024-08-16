import React, { useEffect, useState } from 'react';
import './projects.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';
import ProjectCard from '../../components/project-card/ProjectCard';

const Projects = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
            document.body.style.overflow = "auto";  
            return () => {
              document.body.style.overflow = "hidden";
            }
          }, [])

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:8787/api/projectdata');
      if (!response.ok) {
        throw new Error('Failed to fetch project data');
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching project data', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="projects">
      <Navbar />
      <ContentTemplate heading="Project Portfolio" subtext="" />
      <div className='card-container'>
        {data.map((value, index) => {
          return (
            <ProjectCard key={index} imgsrc={value.Thumbnail} title={value.Title} desc={value.Description} demo={value.DemoLink} repo={value.GitLink}/>
          )
        })}
      </div>
    </div>
  );
};

export default Projects;
