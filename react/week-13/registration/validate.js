// The rules for each step. Each function returns an object of error messages;
// an empty object means the step is valid and "Next" can be enabled.
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validatePersonal({ name, email }) {
  const errors = {};
  if (name.trim().length < 2) errors.name = "Name must be at least 2 characters.";
  if (!EMAIL.test(email)) errors.email = "Enter a valid email, like name@example.com.";
  return errors;
}

export function validateAccount({ username, password, confirm }) {
  const errors = {};
  if (username.length < 3) errors.username = "Username must be at least 3 characters.";
  else if (/\s/.test(username)) errors.username = "Username can't contain spaces.";
  if (password.length < 8) errors.password = "Password must be at least 8 characters.";
  if (confirm !== password || confirm === "") errors.confirm = "Passwords don't match.";
  return errors;
}

export function validatePreferences({ role }) {
  return role ? {} : { role: "Choose a role." };
}

export const STEP_VALIDATORS = [validatePersonal, validateAccount, validatePreferences];
