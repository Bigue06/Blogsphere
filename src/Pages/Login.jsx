import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginUser } from '../Api/authAPI'; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const connexion = async (e) => {
    e.preventDefault();

    try {
      const response = await loginUser({ email, password });
      console.log('Connexion réussie:', response);

     
      localStorage.setItem('token', response.token);
      localStorage.setItem('username', response.user.username);
      localStorage.setItem('email', response.user.email);

    
      setEmail('');
      setPassword('');

    
      navigate('/Profile');
    } catch (error) {
      console.error('Erreur lors de la connexion:', error);
      alert('Identifiants invalides ou erreur serveur.');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 via-purple-100 to-pink-100 px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Connexion à votre compte</h1>
        <form onSubmit={connexion} className="space-y-5">
          <div>
            <label htmlFor="email">Adresse Email</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Mot de passe</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg">
            Se connecter
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-500">
          Vous n’avez pas de compte ? <a href="/register" className="text-blue-600 hover:underline">S’inscrire</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
