import { useState } from "react";
import axios from "axios";
import "../App.css"; // Import CSS file

const InputForm = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    location: "",
    soilPH: "",
    nitrogen: "",
    phosphorus: "",
    potassium: "",
    rainfall: "",
    temperature: "",
    humidity: "",
    cropType: "",
    soilImage: null,
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e) => {
    setFormData({ ...formData, soilImage: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const response = await axios.post("http://localhost:5000/predict", formData);
    onPredict(response.data);
  };

  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input type="text" name="location" placeholder="Location" onChange={handleChange} required />
      <input type="number" name="soilPH" placeholder="Soil pH" onChange={handleChange} required />
      <input type="number" name="nitrogen" placeholder="Nitrogen (ppm)" onChange={handleChange} required />
      <input type="number" name="phosphorus" placeholder="Phosphorus (ppm)" onChange={handleChange} required />
      <input type="number" name="potassium" placeholder="Potassium (ppm)" onChange={handleChange} required />
      <input type="number" name="rainfall" placeholder="Rainfall (mm)" onChange={handleChange} required />
      <input type="number" name="temperature" placeholder="Temperature (°C)" onChange={handleChange} required />
      <input type="number" name="humidity" placeholder="Humidity (%)" onChange={handleChange} required />
      <select name="cropType" onChange={handleChange} required>
        <option value="">Select Crop Type</option>
        <option value="maize">Maize</option>
        <option value="wheat">Wheat</option>
        <option value="rice">Rice</option>
      </select>
      <input type="file" accept="image/*" onChange={handleImageChange} className="file-input" />
      <button type="submit" className="submit-btn">Predict Yield</button>
    </form>
  );
};

export default InputForm;
