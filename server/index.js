const express = require('express');
const { MongoClient } = require('mongodb');
const cors = require('cors');
const app = express();

app.use(cors());

const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri);
let collection;

async function connectDB() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');

    const db = client.db('netflix');
    collection = db.collection('netflix');

  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
}

connectDB();

app.use(express.json()); 


app.post('/netflix', async (req, res) => {
  try {
    const novaNetflix = req.body;

    
    const result = await collection.insertOne(novaNetflix);
    
    res.status(201).json({ message: 'Conta criada com sucesso', netflixId: result.insertedId });
  } catch (err) {
    res.status(500).json({ message: 'Erro ao criar conta', error: err });
  }
});

app.get('/natflix', async (req, res) => {
  try {
    

    const netflix = await collection.find().toArray();

    res.status(200).json(netflix);
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar contas', error: err });
  }
});

const { ObjectId } = require('mongodb');

app.get('/netflix/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

    

    const netflix = await collection.findOne({ _id: newId });

    if (!netflix) {
      res.status(404).json({ message: 'Conta não encontrada' });
    } else {
      res.status(200).json(netflix);
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao buscar conta', error: err });
  }
});

app.put('/netflix/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);
    const atualizacao = req.body;

    
    const result = await collection.updateOne( { _id: newId }, { $set: atualizacao });

    if (result.matchedCount === 0) {
      res.status(404).json({ message: 'Conta não encontrada' });
    } else {
      res.status(200).json({ message: 'Conta atualizada com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao atualizar Conta', error: err });
  }
});

app.delete('/netflix/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const newId =  new ObjectId(id);

  const result = await collection.deleteOne({ _id: newId });
    

    if (result.deletedCount === 0) {
      res.status(404).json({ message: 'Conta não encontrada' });
    } else {
      res.status(200).json({ message: 'Conta excluída com sucesso' });
    }
  } catch (err) {
    res.status(500).json({ message: 'Erro ao excluir Conta', error: err });
  }
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
