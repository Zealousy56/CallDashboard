import InsightCard from "./InsightCard";
import CallsTable from "./Table/Table";

const RecentCalls = ({calls}) => {
  return(
    <>
        <div className = "p-2 col-span-2 row-span-3">
            <InsightCard className = "p-20" title= "Recent Calls">
                <CallsTable calls = {calls} />
            </InsightCard>
        </div>
    </>
  )
}

export default RecentCalls