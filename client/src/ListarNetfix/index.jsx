import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadNetfix() {
  const [netfix, setNetfix] = useState([]);


  useEffect(() => {
    const fetchNetfix = async () => {
      try {
        const response = await fetch('http://localhost:5000/netfix');
        const data = await response.json();
        setNetfix(data);
      } catch (error) {
        console.error('Erro ao buscar as contas:', error);
      }
    };

    fetchNetfix();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/netfix/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setnetfix(netfix.filter((netfix) => netfix._id !== id));
        alert('Conta excluída com sucesso!');
      } else {
        alert('Erro ao excluir conta.');
      }
    } catch (error) {
      console.error('Erro ao excluir login:', error);
    }
  };

  return (
    <div className='container'>
      <h2>Lista de login cadastrado</h2>
      <table  className="table-container" border="1">
        <thead>
          <tr>
            <th>Código da conta</th>
            <th>Nome do usuario</th>
            <th>email</th>
            <th>senha</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {netfix.map((netfixa) => (
            <tr key={netfix._id}>
              <td>{netfix._id}</td>
              <td>{netfix.nome}</td>
              <td>{netfix.email}</td>
              <td>{netfix.senha}</td>
              <td>
                <button onClick={() => handleDelete(netfix._id)}>Excluir conta</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
