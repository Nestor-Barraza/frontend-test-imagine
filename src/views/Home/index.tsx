/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect } from "react";
import { Grid, Header } from "semantic-ui-react";

import "./styles.css";
import { SidebarCustom } from "src/components";

const Home: FC = (): JSX.Element => {
  useEffect(() => {}, []);

  return (
    <SidebarCustom>
    <Grid stackable>
      <Grid.Column width={3}></Grid.Column>
      <Grid.Column width={9}>
        <Header className="container-title" as="h1">
          Full stack developer
        </Header>
        <br />
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid>
    </SidebarCustom>
  );
};

export default Home;
