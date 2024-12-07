type GreetProps = {
  name: string;
  messageCount?: number;
  isLogged: boolean;
};

const Greet = ({ name, messageCount = 0, isLogged }: GreetProps) => {
  return <div>{isLogged ? `${name} ${messageCount}` : "welcome guest"}</div>;
};

export default Greet;
