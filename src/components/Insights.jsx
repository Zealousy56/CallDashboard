import { useEffect, useState } from "react";
import { getCalls } from "../services/api.jsx";
import Kpis from "./Kpis.jsx";



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
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    }

    fetchCalls();
  }, []);

    const stats = {
    totalCalls: calls.length,
    totalCost: (calls.reduce((sum, call) => sum + Number(call.callCost), 0)).toFixed(2),
    averageDuration: calls.length
        ? calls.reduce((sum, call) => sum + call.callDuration, 0) / calls.length
        : 0, 
    totalSuccCalls: calls.reduce((sum, call) => call.callStatus ? sum + 1 : sum, 0),
    totalFailCalls: calls.reduce((sum, call) => !call.callStatus ? sum + 1 : sum, 0)   
    };

    const statTitles = {
        totalCalls: "Total Calls",
        totalCost: "Total Call Costs",
        averageDuration: "Average Call Duration",
        totalSuccCalls: "Total Successful Calls",
        totalFailCalls: "Total Failed Calls"
    };

  return (
    <div className = "flex-1 p-6 grid grid-cols-4">
        {loading && <p>Loading calls...</p>}
        {error && <p>Error loading calls: {error}</p>}
        {!loading && !error && calls.length === 0 && <p>No calls found.</p>}

        {
          !loading && !error && calls.length > 0 &&
          <Kpis stats = {stats} titles = {statTitles}/>
        }
    </div>
  );
};

export default Insights;