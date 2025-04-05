import React, { useContext } from 'react';
import { FormContext } from '../Context/CreateContext';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify';
const Contact = () => {
  const { formData, setFormData } = useContext(FormContext);
  const apiurl= import.meta.env.VITE_API_URL||"url not found";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        apiurl,
        formData
      );
      toast.success("Email sent successfully!");
      setFormData({ name: "", email: "" }); 
    } catch (error) {
      toast.error("Failed to send email. Please try again.");

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="bg-white rounded-2xl shadow-lg flex flex-col md:flex-row w-full max-w-6xl overflow-hidden">
        {/* Left Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <h2 className="text-4xl font-bold text-[#818a60ff] text-center mb-4">Let's Connect</h2>
          <p className="text-lg text-gray-600 text-center mb-6">A place where you can reach me</p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label className="block text-sm font-semibold text-gray-700">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e3ff7dff] focus:outline-none text-lg"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#e3ff7dff] focus:outline-none text-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-[#acba77ff] hover:bg-green-700 text-white font-semibold py-3 rounded-lg text-lg transition duration-300"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Right Side - Image */}
        <div className="hidden md:flex md:w-1/2 items-center justify-center p-10 bg-green-200">
          <img
            src="https://images.unsplash.com/photo-1523966211575-eb4a01e7dd51?q=80&w=2510&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Contact"
            className="w-full max-w-lg object-cover rounded-xl"
          />
        </div>
      </div>
         <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
         rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          transition={Bounce}
          />
    </div>
  );
};

export default Contact;
