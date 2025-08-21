import React, { useContext } from "react";
import { AuthContext } from "../contacts/AuthProvider";
import defaultProfile from "../assets/profilepicture.jpg";

const Dashboard = () => {
  const { user } = useContext(AuthContext);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center justify-between bg-white shadow-md rounded-xl p-6 mb-8">
        <h1 className="text-2xl font-bold text-gray-800">User Dashboard</h1>
        <div className="mt-4 md:mt-0">
          {user?.photoURL ? (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
            />
          ) : (
            <img
              src={defaultProfile}
              alt="Default Profile"
              className="w-16 h-16 rounded-full border-2 border-gray-300 object-cover"
            />
          )}
        </div>
      </header>

      {/* User Information Card */}
      <main className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-xl font-semibold mb-6 text-gray-700 border-b pb-2">
            User Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Full Name */}
            <div>
              <label className="text-gray-600 text-sm font-medium">
                Full Name
              </label>
              <input
                type="text"
                value={user?.displayName || "Not Provided"}
                readOnly
                className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-100 cursor-not-allowed text-gray-700"
              />
            </div>

            {/* Email */}
            <div>
              <label className="text-gray-600 text-sm font-medium">Email</label>
              <input
                type="text"
                value={user?.email || "Not Provided"}
                readOnly
                className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-100 cursor-not-allowed text-gray-700"
              />
            </div>

            

            {/* Account Created */}
            <div>
              <label className="text-gray-600 text-sm font-medium">
                Account Created
              </label>
              <input
                type="text"
                value={user?.metadata?.creationTime || "Not Available"}
                readOnly
                className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-100 cursor-not-allowed text-gray-700"
              />
            </div>

            {/* Last Login */}
            <div>
              <label className="text-gray-600 text-sm font-medium">
                Last Login
              </label>
              <input
                type="text"
                value={user?.metadata?.lastSignInTime || "Not Available"}
                readOnly
                className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-100 cursor-not-allowed text-gray-700"
              />
            </div>

            {/* UID */}
            {/* <div>
              <label className="text-gray-600 text-sm font-medium">User ID</label>
              <input
                type="text"
                value={user?.uid || "Not Available"}
                readOnly
                className="w-full mt-1 px-4 py-3 border rounded-lg bg-gray-100 cursor-not-allowed text-gray-700"
              />
            </div> */}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
