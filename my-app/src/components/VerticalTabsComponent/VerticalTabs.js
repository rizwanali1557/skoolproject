"use client";
import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Button } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardActionArea from "@mui/material/CardActionArea";
// import '.././globals.css'
const cards = [
  {
    id: 1,
    title: "$0",
    description: "Last 30 days",
  },
  {
    id: 2,
    title: "$0",
    description: "Lifetime",
  },
  {
    id: 3,
    title: "$0",
    description: "Account balance",
  },
];

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const VerticalTabs = () => {
  const [value, setValue] = useState(0);
  const [selectedCard, setSelectedCard] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mutable-golabalclass">
      <Box className="mutable-boxtabs">
        <Tabs
          orientation="vertical"
          variant="scrollable"
          value={value}
          onChange={handleChange}
          aria-label="Vertical tabs example"
          TabIndicatorProps={{ style: { display: "none" } }}
        >
          <Tab label="Communities" {...a11yProps(0)} />
          <Tab label="Profile" {...a11yProps(1)} />
          <Tab label="Affiliates" {...a11yProps(2)} />
          <Tab label="Payouts" {...a11yProps(3)} />
          <Tab label="Account" {...a11yProps(4)} />
          <Tab label="Notifications" {...a11yProps(5)} />
          <Tab label="Chat" {...a11yProps(6)} />
          <Tab label="Payment methods" {...a11yProps(7)} />
          <Tab label="Payment history" {...a11yProps(8)} />
          <Tab label="Theme" {...a11yProps(8)} />
        </Tabs>
        <TabPanel value={value} index={0} className="tab-panel">
          <Typography variant="h1" component="h1">
            Communities
          </Typography>
          <Box className="tab-panel-text">
            Drag and drop to reorder, pin to sidebar, or hide.
          </Box>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Content for Item Two
        </TabPanel>
        <TabPanel value={value} index={2} className="tab-panel">
          <Typography variant="h1" component="h1">
            Affiliates
          </Typography>
          <Box className="tab-panel-para">
            Earn commission for life when you invite somebody to create or join
            a Skool community.
          </Box>
          <Box className="tab-paneltext-cards">
            {cards.map((card, index) => (
              <Card key={index}>
                <CardActionArea
                  onClick={() => setSelectedCard(index)}
                  data-active={selectedCard === index ? "" : undefined}
                >
                  <CardContent>
                    {index === 2 ? (
                      <Box className="tab-panel-cardcontin">
                        <Box>
                          <Typography
                            variant="h1"
                            component="div"
                            className="tab-panel-heading"
                            sx={{ color: "#009e5d" }}
                          >
                            {card.title}
                          </Typography>
                          <Typography variant="body2" className="body-two-text">
                            {card.description}
                          </Typography>
                        </Box>
                        <Box>
                          <Button variant="contained" disabled>
                            PAYOUT
                          </Button>
                        </Box>
                      </Box>
                    ) : (
                      <>
                        <Typography
                          variant="h1"
                          component="div"
                          className="tab-panel-heading"
                        >
                          {card.title}
                        </Typography>
                        <Typography variant="body2" className="body-two-text">
                          {card.description}
                        </Typography>
                      </>
                    )}
                  </CardContent>
                </CardActionArea>
              </Card>
            ))}
          </Box>
          <Typography variant="h1" component="h1">
            Affiliates
          </Typography>
        </TabPanel>
      </Box>
    </div>
  );
};
export default VerticalTabs;
