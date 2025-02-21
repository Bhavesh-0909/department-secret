interface User {
  id: number;
  username: string;
  email: string;
  privateNote: string;
  isAdmin: boolean;
  accessToken: string;
  department: string;
  secretKey?: string;
  lastLogin: string;
}

// More realistic data structure with department hierarchy
export const users: User[] = [
  {
    id: 1,
    username: "alice",
    email: "alice@example.com",
    privateNote: "Found part 1/3 of admin secret: 'FLAG{1D0R_'",
    isAdmin: false,
    accessToken: "eyJhbGciOiJIUzI1NiJ9.user1",
    department: "marketing",
    lastLogin: "2024-03-15T10:30:00Z"
  },
  {
    id: 2,
    username: "bob",
    email: "bob@example.com",
    privateNote: "Found part 2/3 of admin secret: '15_N0T_'",
    isAdmin: false,
    accessToken: "eyJhbGciOiJIUzI1NiJ9.user2",
    department: "engineering",
    lastLogin: "2024-03-15T09:15:00Z"
  },
  {
    id: 42,
    username: "carol",
    email: "carol@example.com",
    privateNote: "Found part 3/3 of admin secret: '50_51MPL3}'",
    isAdmin: false,
    accessToken: "eyJhbGciOiJIUzI1NiJ9.user3",
    department: "hr",
    lastLogin: "2024-03-15T11:45:00Z"
  },
  {
    id: 999,
    username: "admin",
    email: "admin@example.com",
    privateNote: "Nice try! The real flag is split across multiple user profiles.",
    isAdmin: true,
    accessToken: "eyJhbGciOiJIUzI1NiJ9.admin",
    department: "executive",
    secretKey: "supersecret123",
    lastLogin: "2024-03-15T08:00:00Z"
  }
];