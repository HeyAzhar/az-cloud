import { LineChart } from "@mui/x-charts/LineChart";
import Typography from "@mui/material/Typography";

const StorageChart = ({ data, size }) => {
  return (
    <>
      <Typography variant='body1' fontWeight={600} pl={2} pt={2}>
        {data.title}
      </Typography>
      <LineChart
        width={size.width}
        height={size.height}
        grid={{ vertical: true, horizontal: true }}
        series={data.series}
        xAxis={[{ scaleType: "point", data: data.labels }]}
      />
    </>
  );
};

export default StorageChart;
