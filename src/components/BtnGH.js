import "../styles.css"
import GitHubIcon from "../images/icons/gitHub-black.svg"


const BtnGitHub = ({link}) =>{
    return(
        <a href={link} target="_blank" rel="noreferrer" className="git-button">
                    <img src={GitHubIcon} alt=""/>
                    GitHub repo
               
                </a>

    )
}


export default BtnGitHub