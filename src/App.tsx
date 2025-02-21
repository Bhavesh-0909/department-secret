import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UserProfile } from './components/UserProfile';
import { ShieldAlert, User, ScrollText } from 'lucide-react';

function Home() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-md w-full space-y-8 p-8 bg-white rounded-lg shadow-lg">
        <div className="text-center">
          <ShieldAlert className="mx-auto h-12 w-12 text-blue-600" />
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Department Secrets
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Welcome! You are logged in as 'alice' (Marketing Department)
          </p>
          <div className="mt-4 flex items-center justify-center gap-2 text-xs text-gray-500">
            <User className="h-4 w-4" />
            <code className="bg-gray-100 px-2 py-1 rounded">
              Token: eyJhbGciOiJIUzI1NiJ9.user1
            </code>
          </div>
          
          <div className="mt-8 p-4 bg-gray-50 rounded-lg">
            <ScrollText className="mx-auto h-6 w-6 text-indigo-600 mb-2" />
            <h3 className="text-lg font-semibold text-gray-800 mb-2">The Riddle of Access</h3>
            <p className="text-sm text-gray-600 italic">
              "Through departments three the truth is split,<br/>
              Each holds a piece, but none admit.<br/>
              Marketing, Engineering, HR divine,<br/>
              Cross boundaries with tokens fine.<br/>
              When all three parts you finally see,<br/>
              The flag reveals its mystery."
            </p>
          </div>
        </div>
        <div className="mt-8">
          <Link
            to="/profile/1"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            View My Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:id" element={<UserProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;