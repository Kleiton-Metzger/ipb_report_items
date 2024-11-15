// src/components/Navbar.js
import Link from 'next/link';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter(); // Obtendo a rota atual

  return (
    <nav className="p-4 bg-purple-600 text-white shadow-md">
      <ul className="flex justify-center space-x-8">
        <li>
          <Link href="/" className={`px-3 py-2 rounded transition duration-300 ${router.pathname === '/' ? 'bg-purple-700' : 'hover:bg-purple-500'}`}>
            Início
          </Link>
        </li>
        <li>
          <Link href="/report-item" className={`px-3 py-2 rounded transition duration-300 ${router.pathname === '/report-item' ? 'bg-purple-700' : 'hover:bg-purple-500'}`}>
            Reportar Item
          </Link>
        </li>
        <li>
          <Link href="/found-items" className={`px-3 py-2 rounded transition duration-300 ${router.pathname === '/found-items' ? 'bg-purple-700' : 'hover:bg-purple-500'}`}>
            Itens Encontrados
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
