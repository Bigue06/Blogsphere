import React from 'react';

const Profile = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-full max-w-md text-center">
        <h1 className="text-2xl font-bold mb-4">Profil de {user?.prenom}</h1>
        <p className="text-gray-700 mb-2"><strong>Prénom :</strong> {user?.prenom}</p>
        <p className="text-gray-700"><strong>Email :</strong> {user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
