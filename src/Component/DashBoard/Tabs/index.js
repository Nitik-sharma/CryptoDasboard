import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import { createTheme, ThemeProvider } from "@mui/material";
import Grid from "../Grid";
import './Tab.css'
import List from "../List";

export default function TabsComponent({coin}) {
  const [value, setValue] = React.useState("Grid"); // Initial value should match one of the Tab components.

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const style = {
    color: "#fff",
    fontSize: "1.2rem",
    fontWeight: 600,
    textTransform: "capitalize",
  };
  const theme = createTheme({
    palette: {
      primary:{
        main:"#FFCE30"
      }
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <TabContext value={value}>
        <div>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab label="Grid" value="Grid" sx={style} />
            <Tab label="List" value="List" sx={style} />
          </TabList>
        </div>

        <TabPanel value="Grid">
          <div className="grid-info">
            {
              coin.map((item,i)=>(
                <Grid coin={item} key={i}/>
              ))
            }
          </div>
        </TabPanel>
        <TabPanel value="List">'
        <table  className="list-info">
            {
              coin.map((item,i)=>(
               <List coin={item} key={i}/>
              ))
            }
          </table></TabPanel>
      </TabContext>
    </ThemeProvider >
  );
}
