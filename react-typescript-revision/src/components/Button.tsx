type ButtonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = ({ handleClick }: ButtonProps) => {
  return <button onClick={(event) => handleClick(event, 1)}>Button</button>;
};

export default Button;
