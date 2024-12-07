type StatusProps = {
  status: "loading" | "success" | "error";
};

const Status = ({ status }: StatusProps) => {
  let message;
  if (status === "loading") {
    message = "loading";
  } else if (status === "success") {
    message = "data fetched ";
  } else if (status === "error") {
    message = "error";
  }
  return <div>Status {message}</div>;
};

export default Status;
