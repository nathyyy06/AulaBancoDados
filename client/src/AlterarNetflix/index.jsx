import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function UpdateNetflix() {
  const [id, setId] = useState('');
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const atualizacao = { nome, email, senha};

    try {
      const response = await fetch(`http://localhost:5000/netflix/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(atualizacao),
      });
      if (response.ok) {
        alert('conta atualizada com sucesso!');
        navigate("/netflix");
      } else {
        alert('Erro ao atualizar conta.');
      }
    } catch (error) {
      console.error('Erro ao atualizar conta:', error);
    }
  };

  return (
    <div className='container'>
    <form  className="form-container" onSubmit={handleSubmit}>
      <h2>Atualizar Conta</h2>
      <input
        type="text"
        placeholder="Codigo da Conta"
        value={id}
        onChange={(e) => setId(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Nome do usuario"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Email"
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
      <button type="submit">Atualizar conta</button>
    </form>
    </div>
  );
}
