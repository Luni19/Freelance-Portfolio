import {useParams} from "react-router-dom";
import BtnGitHub from "../components/BtnGH";
import {projects} from "./../helpers/projectsList"

const Project = () => {
	const {id} = useParams();
	const project = projects[id];

    return (
		<main>
			<section className="project-section">
			<div className="conteiner">
				<div className="project-wrapper">
					<h1  className="projects-text">{project.title}</h1>

					<img
						src={project.imgBig}
						alt={project.title}
						className="project-image-details"
					/>

					<div className="project-details__desc">
						<p className="skils-text">Skills: {project.skills} </p>
					</div>

					{project.gitHubLink && (
						<BtnGitHub link="https://github.com" />
					)}
				</div>
			</div>
			</section>
		</main>
	);
}

export default Project;