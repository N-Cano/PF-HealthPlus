import React, { useState } from "react";
import styles from "./PostDocs.module.css";
import NavBarDesp from "../../NavBar/NavBarDesp";
import { postData } from "./postDataDocs";

const PostDocs = () => {
  const [form, setForm] = useState({
    name: "",
    description: "",
    specialty: "",
    email: "",
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
      formData.append("email", form.email);

      if (form.image) {
        formData.append("image", form.image);
      }

      await postData(formData);

      setError(null);
    } catch (error) {
      console.error(error);
      setError("Error al enviar el formulario");
    }
  };

  return (
    <div>
      <NavBarDesp />
      <div className="bg-blue-400 w-full h-full flex items-center justify-center">
        <div className="w-full h-full bg-[#daf1f8] flex flex-col justify-between max-w-md p-4 rounded-lg">
          <h2 className="text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2 text-center mt-8">
            POST DOCTORS
          </h2>
          <div className="flex justify-center">
            <div className={styles.title}>
              <div className={styles.userdetails}>
                <form className="flex flex-col" onSubmit={submitHandler}>
                  <div className="mb-4">
                    <label htmlFor="image">Image:</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      name="image"
                      id="image"
                    />
                  </div>
                  <div className={styles.inputbox}>
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      value={form.name}
                      onChange={changeHandler}
                      name="name"
                      id="name"
                    />
                  </div>
                  <div className={styles.inputbox}>
                    <label htmlFor="email">Email:</label>
                    <input
                      type="text"
                      value={form.email}
                      onChange={changeHandler}
                      name="email"
                      id="email"
                    />
                  </div>

                  <div className={styles.inputbox}>
                    <label htmlFor="description">Description:</label>
                    <input
                      value={form.description}
                      onChange={changeHandler}
                      name="description"
                      id="description"
                    />
                  </div>
                  <div>
                    <label htmlFor="specialty">Specialty:</label>
                    <select
                      value={form.specialty}
                      onChange={changeHandler}
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
                  <button
                    className="font-bold w-60 bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300 m-24 py-4"
                    type="submit"
                  >
                    Submit
                  </button>
                  {error && <p className="error">{error}</p>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDocs;