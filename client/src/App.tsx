import { useEffect, useState } from "react";
import { type AppType } from "../../server/index";
import { hc, type InferResponseType } from "hono/client";

const client = hc<AppType>("/");

function App() {
  const [books, setBooks] = useState<
    InferResponseType<typeof client.api.books.$get>
  >([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const resp = await client.api.books.$get();
      const data = await resp.json();
      setBooks(data);
    };
    fetchBooks();
  }, []);

  return (
    <div>
      <h1>Book list</h1>
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            {book.title} {book.author}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
