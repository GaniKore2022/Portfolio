import React, { useState } from 'react';
import './Projects.css';

function Projects() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const projects = [
    {
      title: "Face Glass Detection",
      description: "Developed a machine learning model using TensorFlow to detect whether an individual is wearing glasses, achieving 99.8% accuracy. And also, created a user interface with Gradio to allow users to upload photos and receive real-time detection results. "
    },
    {
      title: "Apple Stock Price Prediction",
      description: "Developed a machine learning model for predicting Apple stock prices using Linear Regression, leveraging features such as open, close, high, low, and volume. Achieved accurate predictions of the Adj Close variable, showcasing proficiency in financial data analysis and predictive modeling."
    },
    {
      title: "Mental Math using C",
      description: "I have developed a project named “Mental Math” that offers a user-friendly interface with options for addition, subtraction, multiplication, and division, dynamically generating random arithmetic questions to enhance users’ math skills, acknowledging correct answers and displaying the correct solution for incorrect responses, contributing to a gamified learning experience within the application."
    },
    {
      title: "Literacy Rate Analysis",
      description: "In this project, I have done research on the Literacy rate in India, gathered information, and visualized those data in the form of graphs and charts. And I have designed a model to predict the future literacy rate in upcoming years. "
    }
  ];

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        <button className="arrow left-arrow" onClick={handlePrevClick}>◀</button>
        <div className="project-card">
          <h3 className="project-title">{projects[currentIndex].title}</h3>
          <p className="project-description">{projects[currentIndex].description}</p>
        </div>
        <button className="arrow right-arrow" onClick={handleNextClick}>▶</button>
      </div>
    </section>
  );
}

export default Projects;
