import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

const CallsTable = ({ calls }) => {
  const sortedCalls = [...calls].sort(
    (a, b) =>
      new Date(b.callStartTime).getTime() -
      new Date(a.callStartTime).getTime()
  );

  return (
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
        {sortedCalls.map((call) => (
          <TableRow key={call.id}>
            <TableCell>{call.callerName}</TableCell>
            <TableCell>{call.callerNumber}</TableCell>
            <TableCell>{call.receiverNumber}</TableCell>
            <TableCell>{call.city}</TableCell>
            <TableCell>{call.callDuration}s</TableCell>
            <TableCell>£{Number(call.callCost).toFixed(2)}</TableCell>
            <TableCell>{new Date(call.callStartTime).toLocaleString("en-GB")}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default CallsTable;