import { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { getInsights } from "../services/api";
import CallsPerCity from "./CallsPerCity.jsx";
import CallsPerHour from "./CallsPerHour.jsx";
import CostsPerCity from "./CostsPerCity.jsx";
import DurationDist from "./DurationDist.jsx";
import Kpis from "./Kpis.jsx";
import RecentCalls from "./RecentCalls.jsx";

const Insights = () => {
  const [insights, setInsights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { token } = useAuth();

  useEffect(() => {
    async function fetchInsights() {
      try {
        const data = await getInsights(token);
        setInsights(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    }

    fetchInsights();
  }, [token]);

  const stats = {
    totalCalls: insights.totalCalls,
    totalCost: insights.totalCost,
    averageDuration: insights.averageDuration,
    totalSuccCalls: insights.totalSuccCalls,
    totalFailCalls: insights.totalFailCalls
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
        {!loading && !error && insights.totalCalls === 0 && <p>No calls found.</p>}

        {
          !loading && !error && insights.totalCalls > 0 && 
          <>
            <Kpis stats = {stats} titles = {statTitles}/>
            <CallsPerCity data = {insights.cityCalls} />
            <DurationDist data = {insights.durations} />
            <CostsPerCity data = {insights.cityCosts} /> 
            <CallsPerHour data = {insights.hourlyCalls} />
            <RecentCalls calls = {insights.recentCalls} />
          </>
        }
    </div>
  );
};

export default Insights;