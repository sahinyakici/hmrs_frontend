import React from "react";
import { Grid } from "semantic-ui-react";
import JobCard from "./JobCard";

export default function Dashboard() {
  return (
    <div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <JobCard />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
