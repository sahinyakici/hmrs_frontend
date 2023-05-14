import React, { useEffect, useState } from "react";
import CandidateService from "../services/CandidateService";
import { Grid, Card, Button } from "semantic-ui-react";

export default function CandidateList() {
  const [candidates, setCandidates] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getAllCandidates()
      .then((result) => setCandidates(result.data.data));
  });
  return (
    <Grid>
      <Grid.Row width="16" textAlign="center">
        <Grid.Column width={16}>
          <Card.Group itemsPerRow={4}>
            {candidates.map((candidate) => (
              <Card key={candidate.id}>
                <Card.Content>
                  <Card.Header>
                    {candidate.name} {candidate.surname}
                  </Card.Header>
                  <Card.Meta>
                    <span className="date">
                      Doğum tarihi:{" "}
                      {new Date(candidate.birthDate).toDateString()}
                    </span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button circular compact floated="right" color="violet">
                    Kişinin detaylarına bak
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
