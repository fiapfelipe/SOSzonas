export default async function handler(req, res) {
  try {
    const response = await fetch('https://api-java-gs-production.up.railway.app/mensagens', {
      method: req.method,
      headers: {
        'Content-Type': 'application/json',
      },
      body: ['POST', 'PUT', 'PATCH'].includes(req.method)
        ? JSON.stringify(req.body)
        : undefined,
    });

    const data = await response.json();
    res.status(response.status).json(data);
  } catch (error) {
    console.error('Erro ao conectar com a API:', error);
    res.status(500).json({ message: 'Erro ao conectar com a API' });
  }
}
