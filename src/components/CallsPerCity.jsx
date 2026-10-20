import InsightCard from "./InsightCard";
import CallPieChart from "./charts/PieChart";

const CallsPerCity = ({data}) => {
  return(
    <>
        <div className = "p-2 col-span-2 row-span-2">
            <InsightCard className = "p-20" title= "Calls per City">
                <CallPieChart data = {data} />
            </InsightCard>
        </div>
    </>
  )
}

export default CallsPerCity