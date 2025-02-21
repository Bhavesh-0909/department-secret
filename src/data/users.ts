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
    privateNote: "Found part 1/4 of admin secret: 'G8KEY{IDO'",
    isAdmin: false,
    accessToken: "eyJhbGciOiJIUzI1NiJ9.user1",
    department: "marketing",
    lastLogin: "2024-03-15T10:30:00Z"
  },
  {
    id: 369,
    username: "bob",
    email: "bob@example.com",
    privateNote: "Found part 2/4 of admin secret: 'Rh4ck'",
    isAdmin: false,
    accessToken: "eyJhbGciOiJIUzI1NiJ9.user2",
    department: "engineering",
    lastLogin: "2024-03-15T09:15:00Z"
  },
  {
    id: 1793,
    username: "carol",
    email: "carol@example.com",
    privateNote: "Found part 3/4 of admin secret: '_Qu3'",
    isAdmin: false,
    accessToken: "eyJhbGciOiJIUzI1NiJ9.user3",
    department: "hr",
    lastLogin: "2024-03-15T11:45:00Z"
  },
  {
    id: 7803,
    username: "carol",
    email: "carol@example.com",
    privateNote: "Found part 4/4 of admin secret: 'st}'",
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
