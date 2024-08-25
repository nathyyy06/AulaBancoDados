import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Sistema Acadêmico</h2>
            <div className="card-container">
                <Link to="/netfix/cadastrar" className="card">
                    <div>Cadastrar conta</div>
                </Link>
                <Link to="/netfix" className="card">
                    <div>Listar login</div>
                </Link>
                <Link to="/netfix/alterar" className="card">
                    <div>Editar login</div>
                </Link>
            </div>
        </div>
    );
}
