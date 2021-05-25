import { AppBar, Toolbar, Fab, Tooltip } from "@material-ui/core";
import {useHistory} from 'react-router-dom';
import logo from "../../assets/logo.png";
import LocalMallIcon from "@material-ui/icons/LocalMall";
import HomeIcon from "@material-ui/icons/Home";

function Header({ isHome = false }) {
const history = useHistory()

function redirectTo(path) {
    history.push(path)
}
  return (
    <AppBar position="static">
      <Toolbar style={{backgroundColor: 'lightpink'}}>
        <img src={logo} alt="Logo Candy Shop" style={{ maxWidth: "50%", marginRight: 'auto' }}/>
      {isHome ? (
        <Tooltip title="Bolsa">
          <Fab color="secondary" size="small" onClick={() => redirectTo("cart")}>
            <LocalMallIcon />
          </Fab>
        </Tooltip>
      ) : (
        <Tooltip title="Início">
          <Fab color="primary" size="small" onClick={() => redirectTo("/")}>
            <HomeIcon />
          </Fab>
        </Tooltip>
      )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
