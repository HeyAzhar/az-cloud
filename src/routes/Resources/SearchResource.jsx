import { useState } from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Grid from "@mui/material/Grid";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TableBody from "@mui/material/TableBody";
import Box from "@mui/material/Box";
import Tooltip from "@mui/material/Tooltip";
import InfoIcon from "@mui/icons-material/InfoOutlined";
import { resourceData, resourceTitles } from "../../utils/resourceData";

const SearchResource = () => {
  const [search, setSearch] = useState("");
  const [resource, setResource] = useState("");
  const [result, setResult] = useState(null);

  const handleSearch = () => {
    if (!search || !resource) return;
    const response = [];

    resourceData.forEach((resourceValue) => {
      if (resourceValue.title.toLowerCase() === resource.toLowerCase()) {
        resourceValue.item?.forEach((itemValue) => {
          if (itemValue.toLowerCase().includes(search.toLowerCase()))
            response.push(itemValue);
        });
      }
    });

    if (response.length > 0) {
      setResult(response);
    } else {
      setResult([]);
    }
  };

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };

  const onResourceChange = (e) => {
    setResource(e.target.value);
  };

  return (
    <Paper
      sx={{
        width: "100%",
        height: "85vh",
        border: 1,
        borderColor: "grayish.main",
      }}
    >
      <Typography variant='h6' p={3}>
        Search Resources
      </Typography>

      <Divider />

      {/* Search resources form */}

      <Grid container mt={1} p={2} spacing={2}>
        {/* search input */}

        <Grid item xs={12}>
          <TextField
            fullWidth
            label='Search'
            variant='outlined'
            size='small'
            value={search}
            onChange={onSearchChange}
          />
        </Grid>

        {/* resources drowpdown */}

        <Grid item xs={12}>
          <FormControl size='small' fullWidth>
            <InputLabel id='resource-select'>Select Resource</InputLabel>
            <Select
              variant='outlined'
              labelId='resource-select'
              label='Resources'
              value={resource}
              onChange={onResourceChange}
            >
              {resourceTitles.map((item, i) => (
                <MenuItem key={i} value={item}>
                  {item}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Grid>

        {/* search button */}

        <Grid container item justifyContent={"flex-end"} xs={12}>
          <Button
            startIcon={<SearchIcon />}
            variant='contained'
            sx={{ bgcolor: "primary.dark" }}
            disabled={!search || !resource}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Grid>
      </Grid>

      {/* Searched result */}

      {result?.length > 0 && (
        <>
          <Typography variant='subtitle2' ml={2} color={"secondary.dark"}>
            {result.length} {result.length === 1 ? "item" : "items"} found
          </Typography>
          <TableContainer sx={{ maxHeight: 400 }}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {result.map((resultItem, i) => (
                  <TableRow
                    key={i}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component='th' scope='row'>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Typography ariant='subtitle2'>{resultItem}</Typography>
                        <Tooltip title='Restricted data'>
                          <InfoIcon />
                        </Tooltip>
                      </Box>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </>
      )}

      {/* No result found */}

      {Array.isArray(result) && result.length <= 0 && (
        <Grid container justifyContent='center'>
          <Typography variant='h6'>No result found</Typography>
        </Grid>
      )}
    </Paper>
  );
};

export default SearchResource;
