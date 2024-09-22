import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginContainer = () => {
    // Estado para almacenar los usuarios
    const [users, setUsers] = useState([]);
    const [passwords, setPasswords] = useState([]);
    const [username, setUsername] = useState('');  // Para capturar el input del usuario
    const [password, setPassword] = useState('');  // Para capturar el input de la contraseña
    const navigate = useNavigate();  // Para redirigir en React Router

    // Realizamos la solicitud cuando el componente se monta
    useEffect(() => {
      fetch('https://reqres.in/api/login&page=1')
        .then(response => response.json())
        .then(data => {
          setUsers(data.email)
          setPasswords(data.password)
        }) // Guardamos la lista de usuarios
        .catch(error => console.error('Error al obtener usuarios:', error));
    }, []);

    // Función que se ejecuta al hacer clic en el botón de login
    const handleLogin = () => {
      // Verificar si el usuario existe en la lista obtenida
      const userExists = users.some(user => user.email === username);
      const passwordCorrect = passwords.some(psswrd => psswrd.password == password);

      if (userExists && passwordCorrect) {
        // Si el usuario existe, redirige a "/"
        navigate('/');
      } else {
        // Si no existe, muestra una alerta
        alert('Usuario o contraseña incorrectos');
      }
    };

    console.log(users, passwords);

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh'}} className="center-login">
          <div className="w-full max-w-xs">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                  Usuario
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  id="username" 
                  type="text" 
                  placeholder="Usuario"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                  Contraseña
                </label>
                <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  id="password"
                  type="password" 
                  placeholder="******************"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <p className="text-red-500 text-xs italic">Por favor escribe la contraseña.</p>
              </div>
      
              <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  onClick={handleLogin}
                >
                  Ingresar
                </button>
                <a style={{ marginLeft: '5em' }} className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                  Olvidaste tu contraseña?
                </a>
              </div>
            </form>
          </div>
        </div>
    );
};

export default LoginContainer;