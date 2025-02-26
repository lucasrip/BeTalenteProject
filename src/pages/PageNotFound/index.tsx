import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.png";
import { PageNotFoundContainer } from "./styles";

export default function PageNotFound() {
  return (
    <PageNotFoundContainer>
      <div>
        <h1>404</h1>
        <h2>Page not founded</h2>
        <Link to="/" title="click here for back to home">
          <img src={Logo} alt="" />
        </Link>
      </div>
    </PageNotFoundContainer>
  );
}
