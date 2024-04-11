import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import FolderIcon from "@mui/icons-material/Folder";

const ResourceCard = ({ data }) => {
  return (
    <Paper sx={{ width: 380, border: 1, borderColor: "grayish.main" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          my: 1,
          mx: 2,
        }}
      >
        <Typography p={1} variant='subtitle2'>
          <FolderIcon sx={{ mr: 2, ml: 1, mb: -0.7 }} />
          {data.title}
        </Typography>
        <Typography p={1} variant='subtitle2'>
          {data.total}
        </Typography>
      </Box>

      <Divider />
      {data.infoList.map((item, i) => (
        <Box
          key={i}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            my: 1,
            mx: 2,
          }}
        >
          <Typography p={1} variant='subtitle2'>
            {item.name}
          </Typography>
          <Typography p={1} mb={1} variant='subtitle2'>
            {item.count}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default ResourceCard;
