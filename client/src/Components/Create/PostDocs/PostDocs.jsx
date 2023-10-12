import React, { useState } from "react";
import axios from "axios";

const PostDocs = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    specialty: "",
    image: null,
  });

  const [error, setError] = useState(null);

  const changeHandler = (event) => {
    const property = event.target.name;
    const value = event.target.value;
    setForm({ ...form, [property]: value });
  };

  const handleImageChange = (event) => {
    const image = event.target.files[0];
    setForm({ ...form, image });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("description", form.description);
      formData.append("specialty", form.specialty);
      if (form.image) {
        formData.append("image", form.image);
      }

      const response = await axios.post(
        "http://localhost:3001/doctors",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      console.log(response.data);
      setError(null); // Limpiar cualquier error anterior
    } catch (error) {
      console.error(error);
      setError("Error al enviar el formulario");
    }
  };

  return (
    <div>
      <h1>POST DOCTORS</h1>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            value={form.name}
            onChange={changeHandler}
            name="name"
            id="name"
          />
        </div>
        <div>
          <label htmlFor="image">Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            name="image"
            id="image"
          />
        </div>
        <div>
          <label htmlFor="specialty">Specialty:</label>
          <select
            value={form.specialty}
            onChange={changeHandler} // Asociar el evento a la selección
            name="specialty"
            id="specialty"
          >
            <option value="Dermatology">Dermatology</option>
            <option value="Rheumatology">Rheumatology</option>
            <option value="Psychiatry">Psychiatry</option>
            <option value="Gastroenterology">Gastroenterology</option>
            <option value="Endocrinology">Endocrinology</option>
            <option value="Radiology">Radiology</option>
            <option value="Urology">Urology</option>
            <option value="Cardiology">Cardiology</option>
          </select>
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            value={form.description}
            onChange={changeHandler}
            name="description"
            id="description"
          />
        </div>
        <button type="submit">Submit</button>
        {error && <p className="error">{error}</p>}
      </form>
    </div>
  );
};

export default PostDocs;
