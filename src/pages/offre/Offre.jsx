import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Offre.scss';

const Offre = () => {
  const [offres, setOffres] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newOffre, setNewOffre] = useState({
    offrename: "",
    contenu: "",
    type_id: "",
    sans_engagement: false,
    youtube_inclus: false,
    tarif_12_mois: "",
    tarif_plus_12_mois: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchOffres();
  }, []);

  const fetchOffres = async () => {
    try {
      const response = await axios.get('http://localhost:8086/offre');
      setOffres(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des offres : ', error);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setNewOffre((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (editingId) {
      const updatedOffres = offres.map((offre) =>
        offre.id === editingId ? { ...offre, ...newOffre } : offre
      );
      setOffres(updatedOffres);
      setEditingId(null);
    } else {
      const newId = offres.length > 0 ? offres[offres.length - 1].id + 1 : 1;
      const newOffreWithId = { ...newOffre, id: newId };
      setOffres([...offres, newOffreWithId]);
    }
    setNewOffre({
      offrename: "",
      contenu: "",
      type_id: "",
      sans_engagement: false,
      youtube_inclus: false,
      tarif_12_mois: "",
      tarif_plus_12_mois: "",
    });
  };

  const handleEdit = (id) => {
    const offreToEdit = offres.find((offre) => offre.id === id);
    setNewOffre(offreToEdit);
    setEditingId(id);
  };

  const handleSupprimer = (id) => {
    setOffres(offres.filter((offre) => offre.id !== id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="offre-container">
      <h1>Liste des offres</h1>
      <table className="offre-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom de l'offre</th>
            <th>Contenu</th>
            <th>Type ID</th>
            <th>Sans engagement</th>
            <th>Youtube inclus</th>
            <th>Tarif 12 mois</th>
            <th>Tarif plus 12 mois</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {offres.map((offre) => (
            <tr key={offre.id}>
              <td>{offre.id}</td>
              <td>{offre.offrename}</td>
              <td>{offre.contenu}</td>
              <td>{offre.type_id}</td>
              <td>{offre.sans_engagement ? 'Oui' : 'Non'}</td>
              <td>{offre.youtube_inclus ? 'Oui' : 'Non'}</td>
              <td>{offre.tarif_12_mois}</td>
              <td>{offre.tarif_plus_12_mois}</td>
              <td>
                <button onClick={() => handleEdit(offre.id)}>Modifier</button>
                <button onClick={() => handleSupprimer(offre.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="addOffre-container">
        <h2>{editingId ? "Modifier l'offre" : "Ajouter une nouvelle offre"}</h2>
        <form onSubmit={handleAdd}>
          <input
            type="text"
            placeholder="Nom de l'offre"
            name="offrename"
            value={newOffre.offrename}
            onChange={handleChange}
          />
          <textarea
            rows={5}
            placeholder="Contenu"
            name="contenu"
            value={newOffre.contenu}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Type ID"
            name="type_id"
            value={newOffre.type_id}
            onChange={handleChange}
          />
          <label>
            Sans engagement:
            <input
              type="checkbox"
              name="sans_engagement"
              checked={newOffre.sans_engagement}
              onChange={handleChange}
            />
          </label>
          <label>
            Youtube inclus:
            <input
              type="checkbox"
              name="youtube_inclus"
              checked={newOffre.youtube_inclus}
              onChange={handleChange}
            />
          </label>
          <input
            type="number"
            placeholder="Tarif 12 mois"
            name="tarif_12_mois"
            value={newOffre.tarif_12_mois}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Tarif plus 12 mois"
            name="tarif_plus_12_mois"
            value={newOffre.tarif_plus_12_mois}
            onChange={handleChange}
          />
          <button type="submit">{editingId ? "Mettre à jour" : "Ajouter"}</button>
        </form>
      </div>
    </div>
  );
};

export default Offre;
