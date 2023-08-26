import { useContext } from "react";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { BreadcrumbSelector } from "../layouts/MenuLayout";

const SideNav = () => {
  const navigate = useNavigate();
  const { setSelector } = useContext(BreadcrumbSelector);

  const handleSelect = (selectedKey) => {
    switch (selectedKey) {
      case "korean-mains":
        setSelector([`/food/${selectedKey}`, "Korean Mains"]);
        navigate(`/menu/food/${selectedKey}`);
        break;
      case "cubs-favorites":
        setSelector([`/food/${selectedKey}`, "Cubs Favorites"]);
        navigate(`/menu/food/${selectedKey}`);
        break;
      case "desserts":
        setSelector([`/food/${selectedKey}`, "Desserts"]);
        navigate(`/menu/food/${selectedKey}`);
        break;
      case "premium-blends":
        setSelector([`/drinks/${selectedKey}`, "Premium Blends"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;
      case "classic-milkteas":
        setSelector([`/drinks/${selectedKey}`, "Classic Milkteas"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;
      case "fruit-quenchers":
        setSelector([`/drinks/${selectedKey}`, "Fruit Quenchers"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;
      case "melona-smoothies":
        setSelector([`/drinks/${selectedKey}`, "Melona Smoothies"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;
      case "espresso-coffees":
        setSelector([`/drinks/${selectedKey}`, "Espresso Coffees"]);
        navigate(`/menu/drinks/${selectedKey}`);
        break;

      default:
        break;
    }
    // window.location.reload(false);
  };

  return (
    <div className="sidenav">
      <Nav
        defaultActiveKey="/menu"
        className="flex-column"
        onSelect={(selectedKey) => handleSelect(selectedKey)}
      >
        {/* Drink Linkss */}
        <h5 className="sidenav-header mt-4 mb-0 fw-bold">Drinks</h5>
        <Nav.Item>
          <Nav.Link className="side-link" eventKey="premium-blends">
            Premium Blends
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-link" eventKey="classic-milkteas">
            Classic Milkteas
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-link" eventKey="fruit-quenchers">
            Fruit Quenchers
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-link" eventKey="melona-smoothies">
            Melona Smoothies
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-link" eventKey="espresso-coffees">
            Espresso Coffees
          </Nav.Link>
        </Nav.Item>
        {/* End of Drink Links */}

        {/* Food Links */}
        <h5 className="sidenav-header mt-2 mb-0 fw-bold">Food</h5>
        <Nav.Item>
          <Nav.Link className="side-link" eventKey="korean-mains">
            Korea Mains
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-link" eventKey="cubs-favorites">
            Cubs Favorites
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link className="side-link" eventKey="desserts">
            Desserts
          </Nav.Link>
        </Nav.Item>
        {/* End of Food Links */}
      </Nav>
    </div>
  );
};

export default SideNav;
