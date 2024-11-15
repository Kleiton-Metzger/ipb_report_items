import Navbar from '../components/Navbar';
import ItemForm from '../components/ItemForm';

export default function FoundItems() {
  const handleItemReported = (formData) => {
    console.log('Item encontrado reportado:', formData);
  };

  return (
    <div className="min-h-screen bg-gray-100 text-gray-800">
      <Navbar />
      <main className="flex flex-col items-center p-6">
        <div className="w-full max-w-md">
          <ItemForm onSubmit={handleItemReported} formType="found" />
        </div>
      </main>
    </div>
  );
}

