import React, { useState } from 'react';
import './Avantage.scss'; // Assurez-vous d'importer votre fichier de styles CSS/SCSS approprié

const Avantage = () => {
  // État local pour gérer les avantages
  const [avantages, setAvantages] = useState([
    { id: 1, offre_id: 1, nom: 'Avantage 1' },
    { id: 2, offre_id: 1, nom: 'Avantage 2' },
    { id: 3, offre_id: 2, nom: 'Avantage 3' },
    { id: 4, offre_id: 2, nom: 'Avantage 4' },
  ]);

  // État local pour gérer le formulaire d'ajout et d'édition
  const [nom, setNom] = useState('');
  const [editingId, setEditingId] = useState(null);
  const [editingNom, setEditingNom] = useState('');

  // Fonction pour gérer l'ajout d'un nouvel avantage
  const handleAdd = (event) => {
    event.preventDefault();
    const newAvantage = {
      id: avantages.length > 0 ? avantages[avantages.length - 1].id + 1 : 1,
      offre_id: 1, // Exemple statique pour l'offre_id
      nom: nom,
    };
    setAvantages([...avantages, newAvantage]);
    setNom('');
  };

  // Fonction pour gérer l'édition d'un avantage existant
  const handleEdit = (id) => {
    const avantage = avantages.find((avantage) => avantage.id === id);
    setEditingId(id);
    setEditingNom(avantage.nom);
  };

  // Fonction pour mettre à jour un avantage après édition
  const handleUpdate = (event) => {
    event.preventDefault();
    setAvantages(
      avantages.map((avantage) =>
        avantage.id === editingId ? { ...avantage, nom: editingNom } : avantage
      )
    );
    setEditingId(null);
    setEditingNom('');
  };

  // Fonction pour supprimer un avantage
  const handleDelete = (id) => {
    setAvantages(avantages.filter((avantage) => avantage.id !== id));
  };

  return (
    <div className="avantage-container">
      <h1>Liste des avantages</h1>
      <table className="avantage-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Offre ID</th>
            <th>Nom</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {avantages.map((avantage) => (
            <tr key={avantage.id}>
              <td>{avantage.id}</td>
              <td>{avantage.offre_id}</td>
              <td>{avantage.nom}</td>
              <td>
                <button onClick={() => handleEdit(avantage.id)}>Modifier</button>
                <button onClick={() => handleDelete(avantage.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="addAvantage-container">
        <h2>{editingId ? 'Modifier un avantage' : 'Ajouter un nouvel avantage'}</h2>
        <form onSubmit={editingId ? handleUpdate : handleAdd}>
          <div>
            <label>Nom:</label>
            <input
              type="text"
              value={editingId ? editingNom : nom}
              onChange={(e) => (editingId ? setEditingNom(e.target.value) : setNom(e.target.value))}
              required
            />
          </div>
          <button type="submit">{editingId ? 'Mettre à jour' : 'Ajouter'}</button>
        </form>
      </div>
    </div>
  );
};

export default Avantage;
