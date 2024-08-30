import { useEffect, useState } from 'react';
import '../globals.css';

export default function ReadNetflix() {
  const [netflix, setNetflix] = useState([]);


  useEffect(() => {
    const fetchNetflix = async () => {
      try {
        const response = await fetch('http://localhost:5000/netflix');
        const data = await response.json();
        setNetflix(data);
      } catch (error) {
        console.error('Erro ao buscar as contas:', error);
      }
    };

    fetchNetflix();
  }, []);

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://localhost:5000/netflix/${id}`, {
        method: 'DELETE',
      });
      if (response.ok) {

        setnetflix(netflix.filter((netflix) => netflix._id !== id));
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
          {netflix.map((netflix) => (
            <tr key={netflix._id}>
              <td>{netflix._id}</td>
              <td>{netflix.nome}</td>
              <td>{netflix.email}</td>
              <td>{netflix.senha}</td>
              <td>
                <button onClick={() => handleDelete(netflix._id)}>Excluir conta</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
