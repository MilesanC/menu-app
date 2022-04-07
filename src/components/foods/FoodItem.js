import classes from "./FoodItem.module.css";
import Card from "../ui/Card";

const FoodItem = (props) => {
  console.log(props.instruction);
  return (
    <div className={classes.foodItem}>
      <Card>
        <div className={classes.food}>
          <img src={props.img} alt={props.name} />
          <div className={classes.info}>
            <span className={classes.name}>
              <h2>{props.name}</h2>
            </span>
            <div className={classes.description}>
              <span>
                <p>Category: {props.category}</p>
              </span>
              <p>Area: {props.area}</p>
            </div>
            <p className={classes.instructions}>
              <h2>Instructions:</h2>
              {props.instruction}
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default FoodItem;
