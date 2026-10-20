import CallBarChart from "./charts/BarChart.jsx";
import InsightCard from "./InsightCard.jsx";

const CostsPerCity = ({data}) => {
  return(
    <>
        <div className = "p-2 col-span-2">
            <InsightCard className = "p-20" title= "Costs per City">
                <CallBarChart data = {data} />
            </InsightCard>
        </div>
    </>
  )
}

export default CostsPerCity
