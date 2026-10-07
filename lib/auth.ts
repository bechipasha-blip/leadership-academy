export const VALID_USERS = {
  leader: {
    email: "manager@leadership.academy",
    password: "password123",
    role: "leader",
    name: "Jordan Kim",
  },
  admin: {
    email: "admin@leadership.academy",
    password: "Password123!",
    role: "admin",
    name: "Elena Vasquez",
  },
} as const;

export function isValidDemoLogin(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  return (
    (normalizedEmail === VALID_USERS.leader.email && normalizedPassword === VALID_USERS.leader.password) ||
    (normalizedEmail === VALID_USERS.admin.email && normalizedPassword === VALID_USERS.admin.password)
  );
}

export function getUserFromSessionValue(value?: string | null) {
  if (!value) return null;

  const user = Object.values(VALID_USERS).find((entry) => entry.role === value);
  if (user) {
    return {
      name: user.name,
      email: user.email,
      role: user.role,
    };
  }

  if (value === "active") {
    return {
      name: VALID_USERS.leader.name,
      email: VALID_USERS.leader.email,
      role: VALID_USERS.leader.role,
    };
  }

  return null;
}

export function getRoleFromEmail(email: string) {
  const normalized = email.trim().toLowerCase();

  if (normalized === VALID_USERS.admin.email) return VALID_USERS.admin.role;
  if (normalized === VALID_USERS.leader.email) return VALID_USERS.leader.role;
  return null;
}
