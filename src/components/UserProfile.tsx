import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { users } from '../data/users';
import { getCurrentUser, hasAccess } from '../utils/auth';
import { UserIcon, Lock, Shield, Clock } from 'lucide-react';

export function UserProfile() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [error, setError] = useState<string>('');
  
  // Vulnerable: ID validation can be bypassed
  const userId = parseInt(id || '1');
  const currentUser = getCurrentUser();
  const user = users.find(u => u.id === userId);

  if (!user) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-600">User not found. Nice try!</p>
        </div>
      </div>
    );
  }

  // Vulnerable: Access check can be bypassed by manipulating the token
  const hasPermission = hasAccess(currentUser.accessToken, user.department);
  if (!hasPermission) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-red-600">Access denied. You don't have permission to view this profile.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="px-4 py-5 sm:px-6 bg-blue-600">
          <div className="flex items-center justify-center">
            <UserIcon className="h-20 w-20 text-white" />
          </div>
        </div>
        <div className="px-4 py-5 sm:p-6">
          <dl className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <dt className="text-sm font-medium text-gray-500">Username</dt>
                <dd className="mt-1 text-lg font-semibold text-gray-900">{user.username}</dd>
              </div>
              {user.isAdmin && (
                <Shield className="h-5 w-5 text-red-500" />
              )}
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Email</dt>
              <dd className="mt-1 text-lg text-gray-900">{user.email}</dd>
            </div>
            <div>
              <dt className="text-sm font-medium text-gray-500">Department</dt>
              <dd className="mt-1 text-lg text-gray-900">{user.department}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Private Note</span>
                <Lock className="h-4 w-4 text-gray-400" />
              </dt>
              <dd className="mt-1 text-lg text-gray-900 bg-gray-50 p-3 rounded">{user.privateNote}</dd>
            </div>
            <div>
              <dt className="flex items-center gap-2">
                <span className="text-sm font-medium text-gray-500">Last Login</span>
                <Clock className="h-4 w-4 text-gray-400" />
              </dt>
              <dd className="mt-1 text-sm text-gray-600">{user.lastLogin}</dd>
            </div>
            {user.accessToken && (
              <div>
                <dt className="text-sm font-medium text-gray-500">Access Token</dt>
                <dd className="mt-1 text-xs font-mono bg-gray-50 p-2 rounded break-all">
                  {user.accessToken}
                </dd>
              </div>
            )}
          </dl>
        </div>
      </div>
    </div>
  );
}