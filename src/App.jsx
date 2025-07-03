import './App.css'
import { FaCat } from "react-icons/fa";


function App() {
  return (
    <div className='h-screen flex flex-col bg-pink-400'>
      <header className='w-full h-10 bg-white fixed top-0 left-0 shadow-md flex items-center justify-center gap-2 font-bold text-violet-950'>
        <FaCat className="text-2xl" />DudaSys<FaCat className="text-2xl" />
      </header>
      <main className='flex-1 mt-8 flex items-center justify-center'>
        <form
          action="https://getform.io/f/bronjoqa"
          method="POST"
          className="bg-white p-5 rounded-xl shadow-md flex flex-col gap-4 min-w-[300px]"
        >
          <h2 className="text-xl font-bold text-center text-black mb-4">Entrar na sua conta</h2>
          <input
            type="email"
            name="email"
            placeholder="Email"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <input
            type="password"
            name="password"
            placeholder="Senha"
            required
            className="border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-violet-400"
          />
          <button
            type="submit"
            className="bg-violet-800 text-white py-2 rounded hover:bg-violet-700 transition"
          >
            Entrar
          </button>
        </form>
      </main>
    </div>
  );
}

export default App
