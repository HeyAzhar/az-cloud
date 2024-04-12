import { BarChart } from "@mui/x-charts/BarChart";
import Typography from "@mui/material/Typography";

const StorageBarChart = ({ data, size }) => {
  return (
    <>
      <Typography variant='body1' fontWeight={600} pl={2} pt={2}>
        {data.title}
      </Typography>
      <BarChart
        dataset={data.dataset}
        xAxis={[{ scaleType: "band", dataKey: "key" }]}
        series={data.series}
        grid={{ horizontal: true }}
        width={size.width}
        height={size.height}
      />
    </>
  );
};

export default StorageBarChart;
