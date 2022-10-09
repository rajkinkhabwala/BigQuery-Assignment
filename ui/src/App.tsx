import { AppShell, Header, Title } from "@mantine/core";
import Main from "./main/Main";
import "./App.css";

function App() {
  return (
    <AppShell
      padding="md"
      header={
        <Header height={60} p="xs" title="Boston Crime Visualization">
          <Title>Boston Crime Data Visualization</Title>
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      <Main />
    </AppShell>
  );
}

export default App;
