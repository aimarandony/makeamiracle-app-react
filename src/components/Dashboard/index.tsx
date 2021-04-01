import React, { FunctionComponent, useContext, useEffect, useState } from 'react'

import { Home, Book, AccountBox, SupervisedUserCircle, VerifiedUser, Business, ArrowDropDown, PowerSettingsNew } from '@material-ui/icons'

import LogoMakeMin from '../../images/makeamiracle-logo.min.svg'
import './Dashboard.css'
import { NavLink, useHistory } from 'react-router-dom'
import { AuthContext } from '../../auth/AuthContext'
import MMAvatar from '../MMAvatar'

type Props = {}

const Dashboard: FunctionComponent<Props> = ({ children }) => {

    const [navBgColor, setNavBgColor] = useState<string>("");
    const { setAuthenticated } = useContext(AuthContext)
    const history = useHistory();

    const handleLogout = () => {
        setAuthenticated(false)
    }

    useEffect(() => {
        history.location.pathname === "/home" ? setNavBgColor("#1890FF") : setNavBgColor("#fff")
    }, [history.location])

    return (
        <div className="Dashboard">
            <div className="sidebar">
                <div className="logo-content">
                    <div className="logo">
                        <img src={LogoMakeMin} alt="Logo" />
                    </div>
                    <div className="logo-information">
                        <h1>Make a Miracle</h1>
                        <p>Perú, Lima</p>
                    </div>
                </div>
                <ul>
                    <li>
                        <NavLink className="link" to="/home" activeClassName="active">
                            <div className="left">
                                <Home className="icon-link" />
                                <h6>Inicio</h6>
                            </div>
                        </NavLink>
                    </li>
                    <span className="title">Procesos</span>
                    <li>
                        <NavLink className="link" to="/proccess/scholarship" activeClassName="active">
                            <div className="left">
                                <Book className="icon-link" />
                                <h6>Beca</h6>
                            </div>
                        </NavLink>
                    </li>
                    <span className="title">Mantenimiento</span>
                    <li>
                        <NavLink className="link" to="/maintenance/student" activeClassName="active">
                            <div className="left">
                                <AccountBox className="icon-link" />
                                <h6>Estudiante</h6>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/maintenance/sponsor" activeClassName="active">
                            <div className="left">
                                <SupervisedUserCircle className="icon-link" />
                                <h6>Patrocinador</h6>
                            </div>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="link" to="/maintenance/school" activeClassName="active">
                            <div className="left">
                                <Business className="icon-link" />
                                <h6>Institución</h6>
                            </div>
                        </NavLink>
                    </li>
                    <span className="title">Configuración</span>
                    <li>
                        <NavLink className="link" to="/config/users" activeClassName="active">
                            <div className="left">
                                <VerifiedUser className="icon-link" />
                                <h6>Usuario</h6>
                            </div>
                            <ArrowDropDown className="icon-link menu-down" />
                        </NavLink>
                    </li>
                    <li className="logout">
                        <span className="link" onClick={handleLogout}>
                            <div className="left">
                                <PowerSettingsNew className="icon-link" />
                                <h6>Cerrar Sesión</h6>
                            </div>
                        </span>
                    </li>
                </ul>
            </div>
            <div className="right">
                <nav className="navbar" style={{ backgroundColor: navBgColor }}>
                    <div className="user">
                        <MMAvatar image="https://randomuser.me/api/portraits/women/17.jpg" size={35}/>                        
                        <h5>Andrea Campos</h5>
                        <ArrowDropDown className="icon-link menu-down" />
                    </div>
                </nav>
                <div className="content">
                    {children}
                </div>
            </div>
        </div>
    )
}

export default Dashboard
