import React, { useEffect, useState } from "react";
import CompanyService from "../services/CompanyService";
import { Card, Grid, Button } from "semantic-ui-react";

export default function CompanyList() {
  const [companies, setCompanies] = useState([]);
  useEffect(() => {
    let companyService = new CompanyService();
    companyService
      .getAllCompanies()
      .then((result) => setCompanies(result.data.data));
  });
  return (
    <Grid>
      <Grid.Row width={16} textAlign="center">
        <Grid.Column width={16}>
          <Card.Group itemsPerRow={4}>
            {companies.map((company) => (
              <Card key={company.id}>
                <Card.Content>
                  <Card.Header textAlign="center">{company.companyName}</Card.Header>
                  <Card.Meta textAlign="center">
                    <span>Web sitesi :</span>
                    <a href={company.webSite}>{company.webSite}</a>
                    <br/>
                    <span className="string"></span>
                  </Card.Meta>
                </Card.Content>
                <Card.Content>
                  <Button circular compact floated="right" color="violet">
                    Şirketin detaylarına git
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
