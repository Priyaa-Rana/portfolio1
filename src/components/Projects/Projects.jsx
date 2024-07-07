import styles from './Projects.module.css';

import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLT0TatZw9a36E5NV3TwWr4x1HnFxDWPiuog&s"
          link="https://github.com/Priyaa-Rana/freeCodeCamp/tree/main/Responsive%20Web%20Design/TechnicalDocumentationPage"
          h3="Technical Documentation page"
          p="Technical Documentation Page"
        />
        <ProjectCard
          src="data:image/png;base64,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"
          link="https://github.com/Priyaa-Rana/freeCodeCamp/tree/main/Responsive%20Web%20Design/ProductLandingPage"
          h3="Product landing page"
          p="Product Landing Page"
        />
        <ProjectCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSO7FNw0e45BT8w-Sc03VVDm6ROpSkU4v6uyA&s"
          link="https://github.com/Priyaa-Rana/freeCodeCamp/tree/main/Responsive%20Web%20Design/Survey%20Form"
          h3="Survey Form"
          p="Survey Form"
        />
        <ProjectCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRC5r7JkuCdxyhRhn9IuxDOaMRY6Rki20XsVg&s"
          link="https://github.com/Priyaa-Rana/freeCodeCamp/tree/main/Responsive%20Web%20Design/TributePage"
          h3="Tribute Page"
          p="Tribute Page"
        />
         <ProjectCard
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9qfdVX2xc0b6e43DmBw-kvYMos1WB5MRqSg&s"
          link="https://github.com/Priyaa-Rana/freeCodeCamp/tree/main/Responsive%20Web%20Design/Portfolio"
          h3="Portfolio Page"
          p="Portfolio Page"
        />
      </div>
    </section>
  );
}

export default Projects;