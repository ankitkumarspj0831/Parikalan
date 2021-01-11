import classes from './employee.module.css';
// import './employee.css"      classname ="main"

const employee = (props) => {
    console.log(classes);
  return (
    <div className={classes.main}>
      <p style={{ backgroundColor: "gray"}}>Name: {props.name}</p>
      <p className={classes.para}>Age: {props.age}</p>
      <p>College: {props.college}</p>
    </div>
  );
};

export default employee;
