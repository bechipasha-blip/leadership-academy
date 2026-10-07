export const VALID_USER = {
  email: "manager@leadership.academy",
  password: "password123",
  role: "leader",
  name: "Jordan Kim",
};

export const VALID_ADMIN = {
  email: "admin@leadership.academy",
  password: "Password123!",
  role: "admin",
  name: "Elena Vasquez",
};

export function isValidDemoLogin(email: string, password: string) {
  const normalizedEmail = email.trim().toLowerCase();
  const normalizedPassword = password.trim();

  return (
    (normalizedEmail === VALID_USER.email && normalizedPassword === VALID_USER.password) ||
    (normalizedEmail === VALID_ADMIN.email && normalizedPassword === VALID_ADMIN.password)
  );
}

export function getUserFromSessionValue(value?: string | null) {
  if (value !== "active") {
    return null;
  }

  return {
    name: VALID_USER.name,
    email: VALID_USER.email,
    role: VALID_USER.role,
  };
}
