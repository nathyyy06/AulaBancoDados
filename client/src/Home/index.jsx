import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../globals.css';






export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(prevState => !prevState);
    };

    return (
        
       
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <h3>Menu</h3>
                <div className="sidebar">
                    <ul>
                        <li>
                            <Link to="/netflix/cadastrar">
                                <span className="icon">
                                    <i className="bi bi-person-lines-fill"></i>
                                </span>
                                <span className="text">Cadastrar conta</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/netflix">
                                <span className="icon">
                                    <i className="bi bi-people-fill"></i>
                                </span>
                                <span className="text">Contas cadastradas</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/netflix/alterar">
                                <span className="icon">
                                    <i className="bi bi-pencil-square"></i>
                                </span>
                                <span className="text">Editar conta</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            

    );
}