import React, { useState } from 'react';
import { Mail, User, Settings, LogOut, ChevronDown, Upload } from 'lucide-react';

// --- COMPONENTES DE LAYOUT ---

const Header = () => (
  <header className="bg-white py-4 px-6 shadow-sm flex flex-col md:flex-row justify-between items-center border-b">
    <div className="flex items-center gap-4">
      {/* Reemplazar con la ruta real del logo */}
      <img src="/logo-transparente_UNS.png" alt="UNS Logo" className="h-16" />
    </div>
    <div className="flex flex-col items-end gap-2 mt-4 md:mt-0">
      <div className="flex items-center gap-4 text-sm text-gray-700">
        <button className="flex items-center gap-1 hover:text-blue-600">
          <Mail size={16} />
          <span className="bg-gray-200 text-xs px-2 rounded-full">0</span>
        </button>
        <div className="relative group cursor-pointer flex items-center gap-1 hover:text-blue-600">
          <User size={16} />
          <span className="font-medium text-xs uppercase">Ezequiel Alejandro Sañico</span>
          <ChevronDown size={14} />
          {/* Dropdown Menu (Hidden by default, shown on hover) */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-white border rounded shadow-lg hidden group-hover:block z-50">
            <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"><Settings size={14} /> Configuración</a>
            <a href="#" className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 text-red-600"><LogOut size={14} /> Cerrar sesión</a>
          </div>
        </div>
      </div>
      <div className="flex items-center gap-2 text-sm mt-2">
        <label className="text-gray-600 text-xs">Carrera:</label>
        <select className="border rounded p-1 text-xs bg-white focus:outline-none focus:border-blue-500">
          <option value="181">(181) INGENIERIA EN SISTEMAS DE INFORMACION</option>
          <option value="EXT">(EXT) EXTRACURRICULAR</option>
          <option value="IDIO">(IDIO) IDIOMAS</option>
        </select>
      </div>
    </div>
  </header>
);

const Navbar = () => {
  const menuItems = ['Cursadas', 'Exámenes', 'Ingreso', 'Matrícula', 'Certificaciones', 'Consultas', 'Servicios', 'Encuestas', 'Egresados', 'Moodle'];
  
  return (
    <nav className="bg-gray-50 border-b shadow-sm">
      <ul className="flex flex-wrap text-sm text-blue-600 font-medium px-6 py-2">
        {menuItems.map((item, idx) => (
          <li key={idx} className="mr-6 cursor-pointer hover:text-blue-800 hover:underline py-1">
            {item} <ChevronDown size={12} className="inline" />
          </li>
        ))}
      </ul>
    </nav>
  );
};

// --- COMPONENTES FUNCIONALES ---

const VerificacionLinea = ({ onVerificar }) => {
  const [captchaInput, setCaptchaInput] = useState('');
  
  const handleVerificar = (e) => {
    e.preventDefault();
    if (captchaInput.trim() !== '') {
      onVerificar(true);
    } else {
      alert("Por favor, ingrese el texto de la imagen (Captcha).");
    }
  };

  return (
    <div className="mb-10">
      <h2 className="text-2xl font-semibold text-blue-500 mb-4 border-b pb-2">Verificación en Línea de Certificaciones</h2>
      
      <div className="bg-blue-100 border border-blue-200 text-gray-700 p-4 rounded mb-4">
        <span className="font-bold text-gray-600">Certificado a verificar: </span> 
        34e5baa2f5ec517a4f01f0efb87489f65c1f0fab
      </div>

      <div className="flex justify-end mb-6">
        <button 
          onClick={handleVerificar}
          className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-1.5 rounded text-sm font-medium transition-colors"
        >
          Verificar
        </button>
      </div>

      <div className="mb-6">
        <h4 className="text-gray-600 font-medium text-sm mb-2">Transcriba el texto de la imagen</h4>
        <div className="flex items-start gap-4">
          {/* Reemplazar con la ruta real del captcha */}
          <div className="border border-gray-300 p-1 bg-teal-50 inline-block">
            <img src="/captcha.png" alt="Captcha" className="h-12 w-auto" />
          </div>
          <div className="flex flex-col">
            <button 
              className="text-blue-500 text-xs text-left font-bold mb-1 hover:underline"
              onClick={() => setCaptchaInput('')} // Simula refrescar limpiando el input
            >
              Nueva imagen
            </button>
            <input 
              type="text" 
              value={captchaInput}
              onChange={(e) => setCaptchaInput(e.target.value)}
              className="border border-gray-300 rounded px-2 py-1 text-sm w-48 focus:outline-none focus:border-blue-500" 
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DatosCertificacion = () => (
  <div className="bg-gray-50 border rounded p-6 mb-10 mx-auto w-full max-w-4xl shadow-sm">
    <h3 className="text-center font-bold text-gray-500 mb-4">Datos de la Certificación</h3>
    <table className="w-full text-sm border-collapse bg-white">
      <tbody>
        {[
          ['Tipo de Certificado', 'Certificado Analítico de Materias'],
          ['Fecha de Emisión', '26/03/2026 13:51:59'],
          ['Legajo', '159234'],
          ['Apellido y Nombres', 'SAÑICO, EZEQUIEL ALEJANDRO'],
          ['Tipo y Nro. de Documento', 'DNI - 47606188'],
          ['Carrera', '(181) INGENIERIA EN SISTEMAS DE INFORMACION'],
          ['Promedio General', '0.00'],
          ['Materias Requeridas', '34'],
          ['Materias Aprobadas', '0'],
          ['Fecha de Vencimiento', '22/09/2026'],
        ].map(([label, value], idx) => (
          <tr key={idx} className="border text-gray-700">
            <td className="border px-4 py-2 font-bold text-right w-1/3 bg-gray-50">{label}</td>
            <td className="border px-4 py-2 w-2/3">{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const VerificacionPDF = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState('idle'); // idle, loading, error

  const handleVerificarPDF = () => {
    if (!file) {
      alert("Por favor seleccione un archivo PDF.");
      return;
    }
    setStatus('loading');
    
    // Simulamos una petición al servidor con un timeout
    setTimeout(() => {
      setStatus('error');
    }, 1500);
  };

  return (
    <div className="mb-10">
      <h2 className="text-xl font-semibold text-gray-500 border-b pb-2 mb-4">Verificación del pdf del certificado</h2>
      
      <div className="bg-blue-50 border border-blue-200 text-gray-800 text-sm p-4 rounded mb-6 italic">
        <p className="font-bold">A continuación puede subir el pdf recibido para comprobar su integridad.</p>
        <p>El archivo a validar tiene que ser exactamente el que generó el sistema. No puede haber sido guardado con ninguna aplicación que manipule pdf.</p>
      </div>

      <div className="flex items-center gap-4 mb-6">
        <input 
          type="file" 
          accept=".pdf,.mp4" // Añadido .mp4 solo para coincidir con la imagen de tu ejemplo, en prod sería solo .pdf
          onChange={(e) => setFile(e.target.files[0])}
          className="border border-gray-300 rounded text-sm file:mr-4 file:py-1 file:px-3 file:border-0 file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200" 
        />
        <button 
          onClick={handleVerificarPDF}
          disabled={status === 'loading'}
          className="bg-teal-500 hover:bg-teal-600 disabled:bg-teal-300 text-white px-4 py-1.5 rounded text-sm transition-colors flex items-center gap-2"
        >
          {status === 'loading' ? 'Verificando...' : 'Subir y Verificar'}
        </button>
      </div>

      {status === 'error' && (
        <div className="bg-red-500 text-white font-bold px-4 py-3 rounded text-sm shadow animate-pulse">
          Hubo un error en la verificación del contenido del certificado
        </div>
      )}
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---

export default function App() {
  const [isVerified, setIsVerified] = useState(false);

  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Navbar />
      
      <main className="container mx-auto px-4 py-8 max-w-5xl">
        <VerificacionLinea onVerificar={setIsVerified} />
        
        {/* La tabla se revela dinámicamente al verificar el captcha */}
        {isVerified && <DatosCertificacion />}
        
        <VerificacionPDF />
      </main>
    </div>
  );
}
