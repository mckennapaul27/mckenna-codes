export const url =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3002"
    : process.env.NEXT_PUBLIC_URL;

// export const url = process.env.NEXT_PUBLIC_URL;
