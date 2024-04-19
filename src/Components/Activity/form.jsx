import { useState } from "react";

const EnrollmentForm = () => {
  const [formData, setFormData] = useState({
    schoolName: '',
    email: '',
    phoneNo: '',
    location: '',
    enroll: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
  };

  return (
    <div className="bg-gray-100 min-h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl text-center mb-4 font-bold text-gray-800">
          Ued Enrollment Form
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="schoolName" className="block mb-1">
              School Name
            </label>
            <input
              type="text"
              id="schoolName"
              name="schoolName"
              value={formData.schoolName}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phoneNo" className="block mb-1">
              Phone No
            </label>
            <input
              type="tel"
              id="phoneNo"
              name="phoneNo"
              value={formData.phoneNo}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="location" className="block mb-1">
              Location
            </label>
            <input
              type="text"
              id="location"
              name="location"
              value={formData.location}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="enroll" className="block mb-1">
              Enroll
            </label>
            <input
              type="text"
              id="enroll"
              name="enroll"
              value={formData.enroll}
              onChange={handleChange}
              className="w-full px-3 py-2 rounded border border-gray-300 focus:outline-none focus:border-indigo-500"
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="bg-F9A11B hover:bg-yellow-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EnrollmentForm;
