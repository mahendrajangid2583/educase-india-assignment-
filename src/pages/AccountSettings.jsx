import React from 'react';
import image from "../assets/image.jpg"

const AccountSettings = () => {
  return (
   
      <div className=" bg-gray-100 flex flex-col  border border-gray-300 rounded-lg h-[95vh] shadow-lg p-8 w-[384px]">
        
        <h1 className="text-xl font-semibold text-gray-800 mb-6">Account Settings</h1>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <div className="flex items-center mb-6">
            <div className="relative">
              <img
                src={image}
                alt="Profile"
                className="w-16 h-16 rounded-full object-cover"
              />
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-purple-500 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
            
            <div className="ml-4">
              <h2 className="text-lg font-semibold text-gray-900">Marry Doe</h2>
              <p className="text-sm text-gray-600">Marry@Gmail.Com</p>
            </div>
          </div>
          
          <div className="space-y-3">
            <p className="text-sm text-gray-700 leading-relaxed">
              Lorem Ipsum Dolor Sit Amet, Consectetur Sadipscing Elitr, Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat, Sed Diam
            </p>
          </div>
        </div>
        
        
      </div>
    
  );
};

export default AccountSettings;