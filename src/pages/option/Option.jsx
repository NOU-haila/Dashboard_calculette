import React, { useState, useEffect } from 'react';
import axios from 'axios';
import "./Option.scss";

const Option = () => {
  const [options, setOptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newOption, setNewOption] = useState({
    offre_id: "",
    nom: "",
    tarif: "",
  });
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchOptions();
  }, []);

  const fetchOptions = async () => {
    try {
      const response = await axios.get('http://localhost:8086/option'); // Endpoint fictif pour récupérer les options
      setOptions(response.data);
      setIsLoading(false);
    } catch (error) {
      console.error('Erreur lors de la récupération des options : ', error);
      setIsLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewOption((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleAdd = (e) => {
    e.preventDefault();
    if (editingId) {
      const updatedOptions = options.map((option) =>
        option.id === editingId ? { ...option, ...newOption } : option
      );
      setOptions(updatedOptions);
      setEditingId(null);
    } else {
      const newId = options.length > 0 ? options[options.length - 1].id + 1 : 1;
      const newOptionWithId = { ...newOption, id: newId };
      setOptions([...options, newOptionWithId]);
    }
    setNewOption({
      offre_id: "",
      nom: "",
      tarif: "",
    });
  };

  const handleEdit = (id) => {
    const optionToEdit = options.find((option) => option.id === id);
    setNewOption(optionToEdit);
    setEditingId(id);
  };

  const handleSupprimer = (id) => {
    setOptions(options.filter((option) => option.id !== id));
  };

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="option-container">
      <h1>Liste des options</h1>
      <table className="option-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Offre ID</th>
            <th>Nom</th>
            <th>Tarif</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {options.map((option) => (
            <tr key={option.id}>
              <td>{option.id}</td>
              <td>{option.offre_id}</td>
              <td>{option.nom}</td>
              <td>{option.tarif}</td>
              <td>
                <button onClick={() => handleEdit(option.id)}>Modifier</button>
                <button onClick={() => handleSupprimer(option.id)}>Supprimer</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="addOption-container">
        <h2>{editingId ? "Modifier l'option" : "Ajouter une nouvelle option"}</h2>
        <form onSubmit={handleAdd}>
          <input
            type="number"
            placeholder="Offre ID"
            name="offre_id"
            value={newOption.offre_id}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Nom de l'option"
            name="nom"
            value={newOption.nom}
            onChange={handleChange}
          />
          <input
            type="number"
            placeholder="Tarif"
            name="tarif"
            value={newOption.tarif}
            onChange={handleChange}
          />
          <button type="submit">{editingId ? "Mettre à jour" : "Ajouter"}</button>
        </form>
      </div>
    </div>
  );
};

export default Option;
