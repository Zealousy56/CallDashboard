import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useEffect, useState } from "react";
import { useAuth } from "../../context/useAuth";
import { getRecentCalls } from "../../services/api";

const CallsTable = () => {
    const { token } = useAuth();

  const [calls, setCalls] = useState([]);
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) return;

    let cancelled = false;

    async function fetchCalls() {
      setLoading(true);

      try {
        const data = await getRecentCalls(page, 5, token);

        if (!cancelled) {
          setCalls(data.content);
          setTotalPages(data.totalPages);
        }
      } catch (error) {
        if (!cancelled) {
          console.error("Error loading recent calls:", error);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    }

    fetchCalls();

    return () => {
      cancelled = true;
    };
  }, [page, token]);

  return (
    <div>
      {loading ? (
        <p>Loading calls...</p>
      ) : (
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Caller</TableHead>
            <TableHead>Caller Number</TableHead>
            <TableHead>Receiver Number</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead>Cost</TableHead>
            <TableHead>Start Time</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {calls.map((call) => (
            <TableRow key={call.id}>
              <TableCell>{call.callerName}</TableCell>
              <TableCell>{call.callerNumber}</TableCell>
              <TableCell>{call.receiverNumber}</TableCell>
              <TableCell>{call.city}</TableCell>
              <TableCell>{call.callDuration}s</TableCell>
              <TableCell>£{(Number(call.callCost)/100).toFixed(2)}</TableCell>
              <TableCell>{new Date(call.startTime).toLocaleString("en-GB")}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      )}

      <div className="flex justify-between items-center mt-4">
        <button
          disabled={page === 0 || loading}
          onClick={() => setPage((p) => p - 1)}
        >
          Previous
        </button>

        <span>
          Page {totalPages === 0 ? 0 : page + 1} of {totalPages}
        </span>

        <button
          disabled={loading || page + 1 >= totalPages}
          onClick={() => setPage((p) => p + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CallsTable;