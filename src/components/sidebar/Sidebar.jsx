import "./Sidebar.scss"
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DensityMediumIcon from '@mui/icons-material/DensityMedium';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BeenhereIcon from '@mui/icons-material/Beenhere';
import EditNoteIcon from '@mui/icons-material/EditNote';
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { useContext } from "react";
const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext);

  return (
    <div className='sidebar'>
        <div className="top">
            <span className="logo">FREE</span>
        </div>
        <hr />
        <div className="center">
            <ul>
                <p className="title">
              main
                </p>
                <li>
                    <DashboardIcon  className="icon"/>
                    <span>Dashboard</span>
                </li>

                <p className="title">System configuration </p>
                <li>
                    <VolunteerActivismIcon  className="icon"/>
                    <Link className="link" to="/offre">
                    <span> Offer</span>
                    </Link>
                </li>
                 <li>
                    <DensityMediumIcon className="icon"/>
                    <Link className="link " to="/option">
                    <span> Option </span>
                    </Link>
                </li> 
                <li>
                    <EditNoteIcon className="icon"/>
                    <Link className="link" to="/typeOffre">

                    <span> Type offer </span>
                    </Link>
                </li>
                <li>
                    <BeenhereIcon   className="icon"/>
                    <Link className="link " to="/avanatge">

                    <span> Advantage</span>
                    </Link>
                </li>

                <p className="title">
Utilisateur                   </p> 
                <li>
                    < AccountCircleIcon className="icon"/>
                    <Link className="link " to="/login">

                    <span>Login</span>
                    </Link>
                </li>
              
            </ul>
        </div>
        <div className="bottom">
            <div className="colorOption"  onClick={() => dispatch({ type: "LIGHT" })}></div>
            <div className="colorOption"  onClick={() => dispatch({ type: "DARK" })}></div>
            
        </div>
    </div>
  )
}

export default Sidebar