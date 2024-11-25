// src/components/ItemForm.js
import { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Importando estilos do calendário
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const ItemForm = ({ onSubmit, formType }) => {
  const [formData, setFormData] = useState({ type: '', color: '', location: '', description: '', date: new Date(), image: null });
  const [showCalendar, setShowCalendar] = useState(false);
  const options = [ "ESTIG", "ESA", "ESE", "ESAC", "ESSA" ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch('/api/report', {
      method: 'POST',
      body: JSON.stringify({ ...formData, formType }),
      headers: { 'Content-Type': 'application/json' },
    });
    alert("Item reportado com sucesso!");
    if (onSubmit) onSubmit(formData);
  };

  const handleDateChange = (date) => {
    setFormData({ ...formData, date });
    setShowCalendar(false);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
      <h2 className="text-2xl font-bold mb-6 text-gray-900">{formType === 'found' ? 'Reportar Item Encontrado' : 'Reportar Item Perdido'}</h2>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Tipo do Item"
          onChange={(e) => setFormData({ ...formData, type: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Cor do Item"
          onChange={(e) => setFormData({ ...formData, color: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>

      <div className="mb-4">
        <Select>
          <SelectTrigger className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
            <SelectValue placeholder="Selecione um tipo" />
          </SelectTrigger>
          <SelectContent>
            {options.map((option) => (
              <SelectItem key={option} value={option}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      <div className="mb-4">
        <input
          type="text"
          placeholder={formType === 'found' ? "Localização onde encontrou o item" : "Localização Provável"}
          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <textarea
          placeholder="Descrição do Item"
          onChange={(e) => setFormData({ ...formData, description: e.target.value })}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          required
        />
      </div>
      <div className="mb-4">
        <button type="button" onClick={() => setShowCalendar(!showCalendar)} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400">
          {formData.date.toLocaleDateString()}
        </button>
        {showCalendar && (
          <Calendar
            onChange={handleDateChange}
            value={formData.date}
            className="mt-2"
          />
        )}
      </div>
      <div className="mb-6">
        <input
          type="file"
          onChange={(e) => setFormData({ ...formData, image: e.target.files[0] })}
          className="w-full text-gray-700"
        />
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">
        Reportar
      </button>
    </form>
  );
};

export default ItemForm;
