import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className='bg-slate-900 text-white'>
      
      <div className='container mx-auto px-4 py-6'>
        <div className='flex justify-between items-center flex-col md:flex-row'>
          <h3 className='text-2xl font-semibold mb-4 md:mb-0'>
        Rejoignez la communauté BlogSphere"
          </h3>
          <form className='relative w-full md:w-1/3'>
            <input
              type='email'
              placeholder='Entrez votre email'
              className='w-full py-2 px-4 pr-28 rounded-full shadow-md text-black text-sm'
            />
            <button
              type='submit'
              className='absolute right-1 top-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1.5 rounded-full hover:bg-blue-500 transition text-sm'
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>

 
      <div className='border-t border-slate-700 py-6'>
        <div className='container mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm'>
      
          <div>
            <h2 className='text-xl font-bold'>BlogSphere</h2>
            <p className='mt-3 text-gray-400 leading-relaxed'>
              BlogSphere est une plateforme de blogging simple, élégante et collaborative pour tous.
            </p>
          </div>

       
          <div>
            <h3 className='font-semibold mb-2'>Navigation</h3>
            <ul className='space-y-1 text-gray-400'>
              <li><a href='#' className='hover:text-white'>Accueil</a></li>
              <li><a href='#' className='hover:text-white'>Articles</a></li>
              <li><a href='#' className='hover:text-white'>Auteurs</a></li>
              <li><a href='#' className='hover:text-white'>Contact</a></li>
            </ul>
          </div>

   
          <div>
            <h3 className='font-semibold mb-2'>Légal</h3>
            <ul className='space-y-1 text-gray-400'>
              <li><a href='#' className='hover:text-white'>Confidentialité</a></li>
              <li><a href='#' className='hover:text-white'>Conditions</a></li>
              <li><a href='#' className='hover:text-white'>Cookies</a></li>
            </ul>
          </div>

    
          <div>
            <h3 className='font-semibold mb-2'>Suivez-nous</h3>
            <div className='flex space-x-3'>
              <a href='#' className='text-gray-400 hover:text-white'><FaFacebook size={20} /></a>
              <a href='#' className='text-gray-400 hover:text-white'><FaTwitter size={20} /></a>
              <a href='#' className='text-gray-400 hover:text-white'><FaLinkedin size={20} /></a>
              <a href='#' className='text-gray-400 hover:text-white'><FaInstagram size={20} /></a>
            </div>
          </div>
        </div>
      </div>

    
      <div className='bg-slate-800 text-center py-3 text-xs text-gray-400'>
         2025 BlogSphere. Tous droits réservés.
      </div>
    </footer>
  );
}
