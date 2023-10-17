import { useState } from "react";
import NavBarDesp from "../../NavBar/NavBarDesp";
import { postData } from "./postDataDocs";
import { useTheme } from "../../../contextAPI/ThemeContext";

const PostDocs = () => {
  const { darkMode } = useTheme();
  const [form, setForm] = useState({
    name: "",
    engDescription: "",
    espDescription: "",
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
      formData.append("engDescription", form.engDescription);
      formData.append("espDescription", form.espDescription);
      formData.append("specialty", form.specialty);
      formData.append("email", form.email);

      if (form.image) {
        formData.append("image", form.image);
      }
      await postData(formData);

      setError(null);
    } catch (error) {
      setError("Error al enviar el formulario");
    }
  };

  return (
    <>
      <NavBarDesp />
      <div
        className="bg-blue-400 w-full h-screen flex items-center justify-center"
        style={{ background: darkMode ? "#00519C" : "" }}
      >
        <div
          className="w-full bg-blue-300 flex flex-col justify-between max-w-md p-4 mt-10 mb-10 rounded-2xl"
          style={{ background: darkMode ? "black" : "" }}
        >
          <h2
            className="text-3xl mb-8 font-bold text-neutral-50 bg-gray-950 rounded-2xl p-2 text-center mt-8"
            style={{ background: darkMode ? "#1E3453" : "" }}
          >
            POST DOCTORS
          </h2>

          <form
            onSubmit={submitHandler}
            className="flex flex-col items-center gap-3"
          >
            <div className="flex items-center mb-2">
              <label htmlFor="name" className="w-1/3 text-right pr-4">
                Name:
              </label>
              <input
                type="text"
                value={form.name}
                onChange={changeHandler}
                name="name"
                id="name"
                className="rounded-2xl ml-4"
              />
            </div>
            <div className="flex items-center mb-2">
              <label htmlFor="name" className="w-1/3 text-right pr-4">
                Email:
              </label>
              <input
                type="text"
                value={form.email}
                onChange={changeHandler}
                name="email"
                id="email"
                className="rounded-2xl ml-4"
              />
            </div>
            <div className="flex items-center ml-[35px] mb-2">
              <label htmlFor="image" className="w-1/3 text-right pr-4">
                Image:{" "}
              </label>
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                name="image"
                id="image"
                className="ml-4"
              />
            </div>
            <div className="flex items-center mb-2">
              <label htmlFor="specialty" className="w-1/3 text-right pr-4">
                Specialty:
              </label>
              <select
                value={form.specialty}
                onChange={changeHandler}
                name="specialty"
                id="specialty"
                className="rounded-2xl ml-2 h-[25px] w-[197px]"
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
            <div className="flex items-center mb-2">
              <label htmlFor="engDescription">English description:</label>
              <textarea
                value={form.engDescription}
                onChange={changeHandler}
                name="engDescription"
                id="engDescription"
                className="w-2/3 rounded-2xl -ml-10"
              />
            </div>
            <div className="flex items-center mb-2">
              <label htmlFor="espDescription">Spanish description:</label>
              <textarea
                value={form.espDescription}
                onChange={changeHandler}
                name="espDescription"
                id="espDescription"
                className="w-2/3 rounded-2xl -ml-10"
              />
            </div>
            <button
              className="font-bold h-10 w-20 bg-blue-400 hover:bg-indigo-500 hover:scale-110 rounded-2xl transition ease-in-out duration-300 py-0 mt-18"
              type="submit"
              style={{ background: darkMode ? "#00519C" : "" }}
            >
              Submit
            </button>
            {error && <p className="error">{error}</p>}
          </form>
        </div>
      </div>
    </>
  );
};

export default PostDocs;
