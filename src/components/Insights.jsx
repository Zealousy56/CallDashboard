import { useEffect, useState } from "react";
import { getCalls } from "../services/api.jsx";
import CallsPerHour from "./CallsPerHour.jsx";
import CostsPerCity from "./CostsPerCity.jsx";
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

    const cityCounts = calls.reduce((acc, call) => {
      const city = call.city;

      acc[city] = (acc[city] || 0) + Number(call.callCost);

      return acc;
    }, {});

    const barChartData = Object.entries(cityCounts).map(
      ([city, total]) => ({
        city: city,
        cost: total,
      })
    );

      const hourCounts = calls.reduce((acc, call) => {
        const hour = call.callStartTime.slice(11,13);

        acc[hour] = (acc[hour] || 0) + 1;

        return acc;
      }, {});

    const lineChartData = Object.entries(hourCounts)
      .sort(([hourA], [hourB]) => hourA.localeCompare(hourB))
      .map(
        ([hour, count]) => ({
          hour: hour,
          calls: count,
        })
      );
    

  return (
    <div className = "flex-1 p-6 grid grid-cols-4">
        {loading && <p>Loading calls...</p>}
        {error && <p>Error loading calls: {error}</p>}
        {!loading && !error && calls.length === 0 && <p>No calls found.</p>}

        {
          !loading && !error && calls.length > 0 && 
          <>
            <Kpis stats = {stats} titles = {statTitles}/>
            <CostsPerCity data = {barChartData} /> 
            <CallsPerHour data = {lineChartData} />
          </>
        }
    </div>
  );
};

export default Insights;