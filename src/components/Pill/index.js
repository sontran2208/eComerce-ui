import styles from "./Pill.module.scss";
import { Link } from "react-router";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Pill({ to, href, large, small, ...passProps }) {
  let Comp = "button";
  const props = {
    ...passProps,
  };
  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = "a";
  }

  const classes = cx("wrapper", { small, large });
  return (
    <Comp className={classes} {...props}>
      Shop Now
    </Comp>
  );
}

export default Pill;
