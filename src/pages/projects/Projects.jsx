import React, { useEffect, useState } from 'react';
import './projects.scss';
import Navbar from '../../components/navbar/Navbar';
import ContentTemplate from '../../components/content-template/ContentTemplate';
import ProjectCard from '../../components/project-card/ProjectCard';

const Projects = () => {
  const [data, setData] = useState([]);

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

  const renderCards = () => {
    return data.map((proj) => <ProjectCard key={proj.id} project={proj} />);
  };
  

  return (
    <div className="projects">
      <Navbar />
      <ContentTemplate heading="Project Portfolio" subtext="Thanks for checking out my work!" />
      {renderCards()}
    </div>
  );
};

export default Projects;
