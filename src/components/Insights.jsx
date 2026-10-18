import { useEffect, useState } from "react";
import { getCalls } from "../services/api.jsx";

const Insights = () => {
  const [calls, setCalls] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCalls() {
      try {
        const data = await getCalls();
        setCalls(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    }

    fetchCalls();
  }, []);

  return (
    <main>
      <h1>Calls</h1>
      {loading && <p>Loading calls...</p>}
      {error && <p>Error loading calls: {error}</p>}
      {!loading && !error && calls.length === 0 && <p>No calls found.</p>}
      {calls.map((call, index) => (
        <article key={call.id ?? index}>
          <h2>{call.name ?? `Call ${index + 1}`}</h2>
          {call.email && <p>{call.email}</p>}
        </article>
      ))}
    </main>
  );
};

export default Insights;