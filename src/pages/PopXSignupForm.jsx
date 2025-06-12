import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function PopXSignupForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    password: '',
    companyName: '',
    isAgency: 'yes'
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRadioChange = (value) => {
    setFormData(prev => ({
      ...prev,
      isAgency: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    navigate("/setting");
  };

  return (
   
      <div className=" bg-gray-100 flex flex-col border border-gray-300 rounded-lg shadow-lg p-8 w-[384px]">
        <div className=" mb-8">
          <h1 className="text-2xl font-bold text-gray-800 mb-2">Create your</h1>
          <h2 className="text-2xl font-bold text-gray-800">PopX account</h2>
        </div>

        <div className="space-y-6">
          <div className=" relative">
            <label className=" absolute -top-3 bg-gray-100 px-2 left-2 z-10  block text-sm font-medium text-purple-600 mb-2">
              Full Name<span className=" text-red-500">*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="w-full relative bg-gray-100 z-0 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          <div className=" relative">
            <label className="absolute -top-3 bg-gray-100 px-2 left-2 z-10  block text-sm font-medium text-purple-600 mb-2">
              Phone number<span className=" text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          <div className=" relative">
            <label className="absolute -top-3 bg-gray-100 px-2 left-2 z-10  block text-sm font-medium text-purple-600 mb-2">
              Email address<span className=" text-red-500">*</span>
            </label>
            <input
              type="email"
              name="emailAddress"
              value={formData.emailAddress}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          <div className=" relative">
            <label className="absolute -top-3 bg-gray-100 px-2 left-2 z-10  block text-sm font-medium text-purple-600 mb-2">
              Password<span className=" text-red-500">*</span>
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 bg-gray-100 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
              required
            />
          </div>

          <div className=" relative">
            <label className="absolute -top-3 bg-gray-100 px-2 left-2 z-10  block text-sm font-medium text-purple-600 mb-2">
              Company name
            </label>
            <input
              type="text"
              name="companyName"
              value={formData.companyName}
              onChange={handleInputChange}
              placeholder="Marry Doe"
              className="w-full px-4 py-3 border bg-gray-100 border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent placeholder-gray-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Are you an Agency?<span className=" text-red-500">*</span>
            </label>
            <div className="flex space-x-6">
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="yes"
                  checked={formData.isAgency === 'yes'}
                  onChange={() => handleRadioChange('yes')}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center ${
                  formData.isAgency === 'yes' 
                    ? 'border-purple-600 bg-purple-600' 
                    : 'border-gray-300'
                }`}>
                  {formData.isAgency === 'yes' && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-gray-700">Yes</span>
              </label>
              
              <label className="flex items-center cursor-pointer">
                <input
                  type="radio"
                  name="isAgency"
                  value="no"
                  checked={formData.isAgency === 'no'}
                  onChange={() => handleRadioChange('no')}
                  className="sr-only"
                />
                <div className={`w-5 h-5 rounded-full border-2 mr-2 flex items-center justify-center ${
                  formData.isAgency === 'no' 
                    ? 'border-purple-600 bg-purple-600' 
                    : 'border-gray-300'
                }`}>
                  {formData.isAgency === 'no' && (
                    <div className="w-2 h-2 rounded-full bg-white"></div>
                  )}
                </div>
                <span className="text-gray-700">No</span>
              </label>
            </div>
          </div>

          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3 px-4 rounded-lg transition duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2"
          >
            Create Account
          </button>
        </div>
      </div>
    
  );
}