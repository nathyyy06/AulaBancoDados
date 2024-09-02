import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="container">
            <button className="menu-toggle" onClick={toggleMenu}>
                {isOpen ? 'Fechar Menu' : 'Abrir Menu'}
            </button>
            <div className={`sidebar ${isOpen ? 'open' : ''}`}>
                <h3>Menu</h3>
                <ul class="nav-list">
    <li><Link to="/netflix/cadastrar"><i class="bi bi-person-lines-fill"></i>Cadastrar conta</Link></li>
    <li><Link to="/netflix"><i class="bi bi-people-fill"></i>Contas cadastradas</Link></li>
    <li><Link to="/netflix/alterar"><i class="bi bi-pencil-square"></i>Editar conta</Link></li>
</ul>
            </div>
            </div>
            
            
    );
}