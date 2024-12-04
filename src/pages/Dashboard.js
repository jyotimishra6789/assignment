import React from "react";
import { Typography, Card, CardContent, Grid } from "@mui/material";

const Dashboard = () => {
  const stats = [
    { title: "Total Users", value: 120 },
    { title: "Roles Defined", value: 5 },
    { title: "Active Sessions", value: 45 },
  ];

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Dashboard
      </Typography>
      <Grid container spacing={2}>
        {stats.map((stat, index) => (
          <Grid item xs={12} sm={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h6">{stat.title}</Typography>
                <Typography variant="h4">{stat.value}</Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Dashboard;
