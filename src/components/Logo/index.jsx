// Styles
import { Link, Img } from "./Index.styled";

export default function Logo({ data }) {
  // console.log(data);

  return (
    <Link to="/">
      <Img src={data} alt="" />
    </Link>
  );
}