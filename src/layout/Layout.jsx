import React from 'react'
import Navbar from '../Components/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div>
     <Navbar />
     <main >
        <Outlet />
     </main>
      <div><Footer /></div>
    </div>
  );
};

const Footer = () => (
    <footer style={{ background: "#222", color: "#fff", textAlign: "center", padding: "1rem 0", marginTop: "2rem" }}>
        <div>
            &copy; {new Date().getFullYear()} BlogSphere. Tous droits réservés.
        </div>
    </footer>
);

export default Layout