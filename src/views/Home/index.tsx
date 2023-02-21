/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useEffect, useState } from "react";
import { CardContent, Grid, Placeholder } from "semantic-ui-react";
import { SliderCustom } from "src/components";
import GithubCalendar from "react-github-calendar";
import { GithubCard } from "github-user-repo-card";
import "./styles.css";
const Home: FC = (): JSX.Element => {
  const [elementForPush, setElementForPush] = useState(
    <Placeholder className="container-github-card-placeholder" />
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setElementForPush(
        <GithubCard
          name="nestor-barraza"
          type="profile"
          repository=""
          width={300}
        />
      );
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <Grid stackable>
      <Grid.Column width={4}>
        <CardContent className="container-github-card">
          {elementForPush}
        </CardContent>
      </Grid.Column>
      <Grid.Column width={9}>
        <SliderCustom />
        <br />
        <GithubCalendar username="nestor-barraza" />
      </Grid.Column>
      <Grid.Column width={3}></Grid.Column>
    </Grid>
  );
};

export default Home;
