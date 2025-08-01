import React from 'react'
    import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // 


const Navbar = () => {
  const navigate = useNavigate();

  const handleDeconnexion = () => {
    navigate("/login");
  };
  return (
   <div className="bg-indigo-800 text-white flex justify-between items-center p-4">

      <div>logo</div>
      <div>
        <ul className='flex space-x-4'>
          <Link to={"/home"}>Home</Link> 
          <Link to={"/articles"}> Articles</Link>


          <Link to={"/editor"}> Editor</Link>
          
          <Link to={"/login"}>Connexion</Link> 
          <Link to={"/register"}>Inscription</Link>
           

          <button onClick={handleDeconnexion}> Deconnexion</button>
        </ul>
  



      </div>
    </div>
  );
};

export default Navbar;