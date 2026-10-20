import InsightCard from "./InsightCard";
import CallsTable from "./Table/Table";

const RecentCalls = ({data}) => {
  return(
    <>
        <div className = "p-2 col-span-2 row-span-3">
            <InsightCard className = "p-20" title= "Recent Calls">
                <CallsTable data = {data} />
            </InsightCard>
        </div>
    </>
  )
}

export default RecentCalls