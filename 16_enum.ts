//? Enums in TS
// Enums in TypeScript are commonly used when you want to represent a set of related values and choose one
// value from multiple options. Enums provide a convenient way to define a set of named values and associate
// them with specific meanings.

// In TypeScript, when enum constants are not explicitly assigned numeric values, they are automatically
// assigned incremental numeric values starting from 0. The default numeric value for the first enum
// constant is 0, and subsequent enum constants receive values incremented by 1.

enum Roles {
  user = "user",
  admin = "admin",
}

type LoginDetails = {
  name?: string;
  email: string;
  password: string;
  role: Roles;
};

const user1: LoginDetails = {
  email: "ydh2306@gmail.com",
  password: "qwe",
  role: Roles.admin,
};

const user2: LoginDetails = {
  email: "jai@gmail.com",
  password: "qwdse",
  role: Roles.user,
};

const isAdmin: (user: LoginDetails) => string = (
  user: LoginDetails
): string => {
  const { email, role } = user;
  return role === "admin"
    ? `${email} is allow to edit the website`
    : `${email} is not allow to edit the profile.`;
};

console.log(isAdmin(user1));
console.log(isAdmin(user2));
