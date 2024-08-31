import { Link } from 'react-router-dom';
import '../globals.css';
export default function Home() {
    
    return (
        <div className='container'>
            <h2>Cadastra-se para Maratonar</h2>
            <div className="card-container">
                <Link to="/netflix/cadastrar" className="card">
                    <div>Cadastrar conta</div>
                </Link>
                <Link to="/netflix" className="card">
                    <div>Listar login</div>
                </Link>
                <Link to="/netflix/alterar" className="card">
                    <div>Editar login</div>
                </Link>
            </div>
        </div>
        
       
       
        
    );
    
}
