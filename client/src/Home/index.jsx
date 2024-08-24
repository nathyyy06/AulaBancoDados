import { Link } from 'react-router-dom';
import '../globals.css';

export default function Home() {
    return (
        <div className='container'>
            <h2>Sistema Acadêmico</h2>
            <div className="card-container">
                <Link to="/matricula/cadastrar" className="card">
                    <div>Cadastrar conta</div>
                </Link>
                <Link to="/matriculas" className="card">
                    <div>Listar login</div>
                </Link>
                <Link to="/matriculas/alterar" className="card">
                    <div>Editar login</div>
                </Link>
            </div>
        </div>
    );
}
