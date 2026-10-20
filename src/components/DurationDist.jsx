import Plot from "react-plotly.js";
import InsightCard from "./InsightCard";

const DurationDist = ({data}) => {
  return(
    <>
        <div className = "p-2 col-span-2 ">
            <InsightCard className = "p-20" title= "Duration Distribution">
                <Plot
                    data={[
                        {
                            x: data,
                            type: "box",
                            name: "Call Duration",
                            boxpoints: "outliers",

                            fillcolor: "rgba(0, 255, 247, 0.43)",
                            line: {
                                color: "#00fcf8",
                                width: 2,
                            },
                            marker: {
                                color: "#2563eb",
                            },
                        },
                    ]}
                    layout={{
                        title: { text: "Call Duration Distribution" },
                        autosize: true,
                    }}
                    useResizeHandler
                    style={{ width: "100%", height: "300px" }}
                />
            </InsightCard>
        </div>
    </>
  )
}

export default DurationDist