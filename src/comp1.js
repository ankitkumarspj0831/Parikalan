import { Link, NavLink } from "react-router-dom";

const comp1 = () => {
  return (
    <div>
      Comp1 Component
      <p></p>
      <a href="/jlljll">Parikalan Facebook Page LInk</a>
      <p></p>
      <Link to="/">Redirect to home page.</Link>
      <p></p>
      <NavLink to="/">Redirect to home page</NavLink>

    </div>
  );
};

export default comp1;
