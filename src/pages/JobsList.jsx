import React, { useEffect, useState } from "react";
import JobService from "../services/JobService";
import { Button, Card, Grid, Label } from "semantic-ui-react";

export default function JobsList() {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    let jobsService = new JobService();
    jobsService.getAllJobs().then((result) => setJobs(result.data.data));
  });
  return (
    <Grid>
      <Grid.Row width="16" textAlign="center">
        <Grid.Column width="12">
          <Card.Group itemsPerRow={3}>
            {jobs.map((job) => (
              <Card raised key={job.id}>
                <Card.Content>
                  <Button
                    compact
                    circular
                    color="yellow"
                    icon="bookmark outline"
                    floated="right"
                  />
                  <Card.Header textAlign="left">
                    {job.title.titleName}
                  </Card.Header>
                  <Card.Meta textAlign="left">
                    {job.employer.companyName}
                    <br />
                    <strong>Alınacak kişi : </strong>
                    <Label circular color="green">
                      {job.openPosition}
                    </Label>
                    <br />
                    <span className="date">
                      Son başvuru :{" "}
                      {new Date(job.applicationDeadline).toDateString()}
                    </span>
                  </Card.Meta>
                  <Card.Description>{job.jobDesc}</Card.Description>
                </Card.Content>
                <Card.Content>
                  <Button circular compact floated="right" color="violet">
                    Detayları göster
                  </Button>
                </Card.Content>
              </Card>
            ))}
          </Card.Group>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
