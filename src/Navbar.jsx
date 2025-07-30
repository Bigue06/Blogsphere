import React from 'react';
import { Link } from 'react-router-dom';


export default function Navbar() {
  const user = {
    nom: "Bigué",
    avatar: "/assets/avatar.jpg", 
  };

  return (
    <nav className="bg-slate-900 text-white">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
     
        <div className="flex items-center space-x-2">
          <Link to="/" className="text-xl font-bold">
            BlogSphere
          </Link>
          <img 
            src="C:\Users\SAMBA DIENG\Desktop\BlogSphere\public\assets\speech-bubble-dialog-illustration-business-600nw-306465737-removebg-preview.png" 
            alt="Logo" 
            className="w-8 h-8" 
          />
        </div>

        
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/articles" className="hover:underline">Articles</Link>
          <Link to="/dashboard" className="hover:underline">Dashboard</Link>
          <Link to="/editor" className="hover:underline">Editor</Link>
          <Link to="/register" className="hover:underline">Register</Link>
          <Link to="/login" className="hover:underline">Login</Link>

         
    
        
  
  <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" class="inline-block size-6 rounded-full ring-2 ring-white" />
</div>

        </div>
     
    </nav>
  );
}
