import "./styles.css"
import { NavLink } from "react-router-dom";

function header () {
    const activeLink ='nav-list__link nav-list__link--active'
    const normalLink ='nav-list__link'

    return(
    
    <header>
    <nav className="navigation">
        <div className="conteiner">
          <div className="nav-row">
            <NavLink to="/" className="logo">
            <span className="Freelancer-text">Freelancer</span> portfolio
            </NavLink>
            <ul className="nav-list">
                
                <li className="nav-list-item">
                    <NavLink to="/" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Home </NavLink>
                    </li>
          
                <li className="nav-list-item">
                    <NavLink to="../../projects" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Projects </NavLink>
                    </li>
                    
        
                <li className="nav-list-item">
                <NavLink to="/skills" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Skills </NavLink>
                    </li>
    
                <li className="nav-list-item">
                <NavLink to="/Contacts" className={({isActive}) => isActive ? activeLink : normalLink}>
                    Contacts </NavLink>
                    </li>
            </ul>
        </div>
       </div>
    </nav>
    
    </header>
);}

export default header;