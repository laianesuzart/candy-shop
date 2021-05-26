import { AppBar, Toolbar, Fab, Tooltip, Badge } from "@material-ui/core";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import HomeIcon from "@material-ui/icons/Home";

function Header({ isHome = false }) {
  const history = useHistory();
  const { cart } = useSelector((store) => store);

  function redirectTo(path) {
    history.push(path);
  }
  
  return (
    <AppBar position="static">
      <Toolbar color="primary">
        <img
          src={logo}
          alt="Logo Candy Shop"
          style={{ maxWidth: "50%", marginRight: "auto" }}
        />
        {isHome ? (
          <Tooltip title="Bolsa">
            <Fab
              color="secondary"
              size="small"
              onClick={() => redirectTo("/cart")}
            >
              <Badge badgeContent={cart.length} color="secondary">
                <LocalMallIcon />
              </Badge>
            </Fab>
          </Tooltip>
        ) : (
          <Tooltip title="Início">
            <Fab color="secondary" size="small" onClick={() => redirectTo("/")}>
              <HomeIcon />
            </Fab>
          </Tooltip>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
