import { Link } from "react-router-dom";
import { HeaderContainer } from "./styles";
import Logo from "../../assets/Logo.png";

export default function Header() {
  return (
    <HeaderContainer>
      <Link to="/" title="click here for back to home">
        <img
          src={Logo}
          alt="logo da Betalente click para ir apra a home"
          title="logo da Betalente click para ir apra a home"
        />
      </Link>
    </HeaderContainer>
  );
}
