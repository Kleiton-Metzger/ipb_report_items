export default async function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
      res.status(200).json({ message: 'Item reportado com sucesso' });
    } else {
      res.status(405).json({ message: 'Método não permitido' });
    }
  }
  