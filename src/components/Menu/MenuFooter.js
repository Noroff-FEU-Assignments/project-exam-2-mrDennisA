import { Link, Menu, Line, SubMenu, SubLine, Rights } from "./MenuFooter.styled";

export default function MenuFooter() {
  return (
    <>
      <Menu className="menu">
        <Link to="about">About</Link>
        <Link to="contact">Contact</Link>
        <Link to="faq">FAQ</Link>
      </Menu>
      <Line />
      <SubMenu className="submenu">
        <div>
          <Link to="hair-extenstions">Master Hair Extenstions</Link>
          <Link to="care-collection">Care Collection</Link>
        </div>
        <SubLine />
        <div>
          <Link to="partner-salons">Partner Salons</Link>
          <Link to="become-voke-salon">Become a Voke Salon</Link>
        </div>
      </SubMenu>
      <Rights className="submenu">
        © 2022 <Link to="/">VokeHair</Link>, All Rights Reserved
      </Rights>
    </>
  );
}
