import { Link } from "react-router-dom";
import "./Header.css";

export const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="title">
        QuizWhiz
      </Link>
      {/* <hr className="divider" /> */}
    </div>
  );
};
