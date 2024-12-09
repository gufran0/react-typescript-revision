import Button from "./components/Button";
import Container from "./components/Container";
import Box from "./components/context/Box";
import { ThemeContextProvider } from "./components/context/ThemeContext";
import User from "./components/context/User";
import { UserContextProvider } from "./components/context/UserContext";
import Greet from "./components/Greet";
import Heading from "./components/Heading";
import Input from "./components/Input";
import Oscar from "./components/Oscar";
import Person from "./components/Person";
import PersonList from "./components/PersonList";
import Status from "./components/Status";

function App() {
  const personName = {
    first: "bruce",
    last: "wayne",
  };

  const nameList = [
    {
      first: "bruce",
      last: "wayne",
    },
    {
      first: "brucew",
      last: "waynes",
    },
    {
      first: "brucer",
      last: "waynes",
    },
  ];

  return (
    <>
      <ThemeContextProvider>
        <Box></Box>
      </ThemeContextProvider>
      <UserContextProvider>
        <User></User>
      </UserContextProvider>
      <Greet name="hehe" messageCount={100} isLogged={true}></Greet>
      <Person names={personName}></Person>
      <PersonList names={nameList}></PersonList>
      <Status status="error"></Status>
      <Heading>placeholder text</Heading>
      <Oscar>
        <Heading>oscar goes to hehe</Heading>
      </Oscar>
      <Button
        handleClick={(event, id) => {
          console.log("button clicked", event);
        }}
      ></Button>
      <Input value="hello" handleChange={(event) => console.log(event)}></Input>
      <Container
        styles={{ border: "1px solid black", padding: "1rem" }}
      ></Container>
    </>
  );
}

export default App;
