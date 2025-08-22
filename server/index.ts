import { Hono } from "hono";

const app = new Hono();

const route = app.get("/api/books", (c) => {
  return c.json([
    { id: 1, title: "1984", author: "George Orwell" },
    { id: 2, title: "To kill a Mockingbirb", author: "Harper Lee" },
    { id: 3, title: "The great Gatsby", author: "F. Scoot Fitzgerald" },
    { id: 4, title: "The catcher in the Rye", author: "J.D. Salinger" },
  ]);
});

export type AppType = typeof route;

export default app;
