import Navbar from '../components/Navbar';
import { useState } from 'react';

export default function Home() {
  const [reportedItems, setReportedItems] = useState([]); // Estado para armazenar itens reportados

  const handleNewItem = (item) => {
    setReportedItems((prevItems) => [...prevItems, item]); // Adiciona o novo item ao estado
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <main className="flex flex-col items-center justify-center p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">Bem-vindo à Plataforma de Itens Perdidos</h1>
        
        
        <h2 className="text-2xl font-bold mt-6">Itens Reportados</h2>
        <ul className="mt-4">
          {reportedItems.map((item, index) => (
            <li key={index} className="border p-4 mb-2 rounded-lg shadow hover:shadow-lg transition duration-300">
              <p><strong>Tipo:</strong> {item.type}</p>
              <p><strong>Cor:</strong> {item.color}</p>
              <p><strong>Localização:</strong> {item.location}</p>
              <p><strong>Data:</strong> {item.date.toLocaleDateString()}</p>
              <p><strong>Descrição:</strong> {item.description}</p>
              
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}