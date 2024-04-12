import Typography from "@mui/material/Typography";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import useMediaQuery from "@mui/material/useMediaQuery";
import ResourceCard from "./ResourceCard";
import { resourceChartData, resourceData } from "../../utils/resourceData";
import SearchResource from "./SearchResource";

const Resources = () => {
  const largeScreen = useMediaQuery((theme) => theme.breakpoints.up("sm"));

  return (
    <Grid container spacing={4}>
      <Grid container item md={8} spacing={2}>
        <Grid item xs={12}>
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
        <Grid container item spacing={4} justifyContent={"center"} mt={1}>
          {resourceData.map((data, i) => (
            <Grid key={i} item>
              <ResourceCard data={data} />
            </Grid>
          ))}
        </Grid>
      </Grid>
      <Grid container item xs={12} md={4}>
        <SearchResource />
      </Grid>
    </Grid>
  );
};

export default Resources;
