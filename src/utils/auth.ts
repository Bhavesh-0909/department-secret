// Simulated authentication utilities
export function getCurrentUser() {
  return {
    id: 1,
    username: 'alice',
    accessToken: 'eyJhbGciOiJIUzI1NiJ9.user1',
    department: 'marketing'
  };
}

export function hasAccess(userToken: string, targetDepartment: string): boolean {
  // Vulnerable: Token validation is weak and can be bypassed
  return userToken.includes('user') || userToken.includes('admin');
}

// Vulnerable: Predictable token generation
export function generateAccessToken(userId: number): string {
  return `eyJhbGciOiJIUzI1NiJ9.user${userId}`;
}