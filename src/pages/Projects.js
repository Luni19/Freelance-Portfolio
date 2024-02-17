import Project from "../components/main/project/project";
import {projects} from "./../helpers/projectsList"

const Projects = () => {
	return (
		<main className="project-section">
			<div className="conteiner">
				<h2 className="projects-text">Projects</h2>
				<ul className="projects">
					{projects.map((project, index) => {
						return (
							<Project
								key={index}
								title={project.title}
								img={project.img}
								index={index}
							/>
						);
					})}
				</ul>
			</div>
		</main>
	);
};
export default Projects;


