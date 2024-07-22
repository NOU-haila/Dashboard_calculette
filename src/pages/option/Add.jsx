// AddOption.jsx

import React, { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';

const Add= () => {
  const [option, setOption] = useState({
    offre_id: null,
    nom: '',
    tarif: null,
  });
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOption((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8086/option', option);
      navigate('/option');
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };

  return (
    <div className="form">
      <h1>Ajouter une nouvelle option</h1>
      <label>
        Offre ID:
        <input
          type="number"
          name="offre_id"
          value={option.offre_id || ''}
          onChange={handleChange}
        />
      </label>
      <label>
        Nom:
        <input
          type="text"
          name="nom"
          value={option.nom}
          onChange={handleChange}
        />
      </label>
      <label>
        Tarif:
        <input
          type="number"
          name="tarif"
          value={option.tarif || ''}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleClick}>Ajouter</button>
      {error && <p>Quelque chose s'est mal passé lors de l'ajout de l'option!</p>}
      <Link to="/option">Voir toutes les options</Link>
    </div>
  );
};

export default Add;
