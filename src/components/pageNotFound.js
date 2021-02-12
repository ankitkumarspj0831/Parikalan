import { useEffect } from "react";

const PageNotFound = (props) => {
  useEffect(() => {
    setTimeout(() => {
      console.log("Redirecting page.");
        props.history.push("/");
    }, 2000);
  });

  return <div>
      <p></p>
      <p></p>
      <p>Page Not Found</p>
      <p>Page Not Found</p>
      <p>Page Not Found</p>
      <p>Page Not Found</p>
      <p>Page Not Found</p>
      <p>Page Not Found</p>
      <p>Page Not Found</p>
      <p>Redirecting To Home Page.</p>
  </div>;
};

export default PageNotFound;
