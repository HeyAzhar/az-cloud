import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import StorageLineChart from "./StorageLineChart";
import StorageBarChart from "./StorageBarChart";
import {
  storageBarChartData,
  storageLineChartData,
} from "../../utils/operationData";

const Resources = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Paper sx={{ border: 1, borderColor: "grayish.main", p: 3 }}>
      <Typography variant='h5' mb={2}>
        Storage Gateway
      </Typography>
      <Divider />

      <Grid container spacing={3} my={3} justifyContent={"center"}>
        {storageLineChartData.map((storageGatewayItem, i) => (
          <Grid item key={i}>
            <Paper sx={{ border: 1, borderColor: "grayish.main", p: 1 }}>
              <StorageLineChart
                size={{ width: largeScreen ? 400 : 320, height: 250 }}
                data={storageGatewayItem}
              />
            </Paper>
          </Grid>
        ))}

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
    </Paper>
  );
};

export default Resources;
