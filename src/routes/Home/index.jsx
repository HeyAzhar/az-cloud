import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import StorageBarChart from "../Operations/StorageBarChart";
import { storageBarChartData } from "../../utils/operationData";
import { resourceChartData } from "../../utils/resourceData";

const Home = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <>
      <Grid container item spacing={3} my={3} justifyContent={"center"}>
        {storageBarChartData.map((storageGatewayItem, i) => (
          <Grid item key={i}>
            <Paper sx={{ border: 1, borderColor: "grayish.main", p: 1 }}>
              <StorageBarChart
                size={{ width: largeScreen ? 400 : 320, height: 250 }}
                data={storageGatewayItem}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>

      <Grid container item justifyContent={"center"} spacing={4}>
        <Grid item xs={12} md={8}>
          <Paper sx={{ p: 3, border: 1, borderColor: "grayish.main" }}>
            <Typography variant='subtitle1'>Used Resources</Typography>
            <Divider />

            <PieChart
              margin={{ top: largeScreen ? 0 : 200 }}
              height={largeScreen ? 200 : 400}
              slotProps={{
                legend: {
                  position: {
                    vertical: largeScreen ? "middle" : "top",
                    horizontal: largeScreen ? "right" : "middle",
                  },
                  labelStyle: {
                    fontSize: 14,
                  },
                },
              }}
              series={[
                {
                  data: resourceChartData,
                  cx: largeScreen ? 120 : null,
                  arcLabel: (item) => item.value,
                },
              ]}
              sx={{
                mt: 2,
                [`& .${pieArcLabelClasses.root}`]: {
                  fill: "white",
                  fontWeight: "bold",
                },
              }}
            />
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
