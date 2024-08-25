import { useState } from 'react';
import '../globals.css';
import { useNavigate } from 'react-router-dom';


export default function CreateNetflix() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const novaNetflix = { nome, email, senha };

    try {
      const response = await fetch('http://localhost:5000/netflix', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(novaNetflix),
      });
      if (response.ok) {
        alert('Conta criada com sucesso!');
        setNome('');
        setEmail('');
        setSenha('');
        navigate("/Netflix");
      } else {
        alert('Erro ao criar conta.');
      }
    } catch (error) {
      console.error('Erro ao criar conta:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Criar conta</h2>
      <input
        type="text"
        placeholder="Nome do usuario"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="e
        Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
        required
      />
      <button type="submit">Criar conta</button>
    </form>
    </div>
  );
}
