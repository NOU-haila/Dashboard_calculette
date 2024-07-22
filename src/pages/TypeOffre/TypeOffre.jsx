import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './typeOffre.scss';
import { Link } from 'react-router-dom';

const TypeOffre = () => {
  const [typesOffre, setTypesOffre] = useState([
    { id: 1, nom: 'Offre Standard' },
    { id: 2, nom: 'Offre Premium' },
    { id: 3, nom: 'Offre Entreprise' },
    { id: 4, nom: 'Offre Essentielle' },
    { id: 5, nom: 'Offre Fix' },
    { id: 6, nom: 'Offre Free' },
  ]);

  const [nom, setNom] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingNom, setEditingNom] = useState('');

  const handleAdd = (event) => {
    event.preventDefault();
    if (editingId) {
      const updatedTypesOffre = typesOffre.map((type) =>
        type.id === editingId ? { ...type, nom: editingNom } : type
      );
      setTypesOffre(updatedTypesOffre);
      setEditingId(null);
    } else {
      const newId = typesOffre.length > 0 ? typesOffre[typesOffre.length - 1].id + 1 : 1;
      const newTypeOffre = { id: newId, nom: nom };
      setTypesOffre([...typesOffre, newTypeOffre]);
    }
    setNom('');
    setEditingNom('');
  };

  const handleEdit = (id) => {
    const typeToEdit = typesOffre.find((type) => type.id === id);
    setEditingId(id);
    setEditingNom(typeToEdit.nom);
  };

  const handleDelete = (id) => {
    const filteredTypesOffre = typesOffre.filter((type) => type.id !== id);
    setTypesOffre(filteredTypesOffre);
  };

  return (
    <div className="typeOffre-container">
      <h1>Liste des types d'offre</h1>
      <table className="typeOffre-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {typesOffre.map((type) => (
            <tr key={type.id}>
              <td>{type.id}</td>
              <td>{type.nom}</td>
              <td>
                <button onClick={() => handleEdit(type.id)}>Modifier</button>
                <button onClick={() => handleDelete(type.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="addTypeOffre-container">
        <h2>{editingId ? "Modifier le type d'offre" : "Ajouter un nouveau type d'offre"}</h2>
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Nom du type d'offre"
            value={editingId ? editingNom : nom}
            onChange={(e) => editingId ? setEditingNom(e.target.value) : setNom(e.target.value)}
            required
          />
          <button type="submit">{editingId ? "Mettre à jour" : "Ajouter"}</button>
        </form>
      </div>
    </div>
  );
};

export default TypeOffre;
