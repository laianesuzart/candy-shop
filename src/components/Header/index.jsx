import {AppBar, Toolbar, Fab, Tooltip} from '@material-ui/core';
import logo from '../../assets/logo.png'
import LocalMallIcon from '@material-ui/icons/LocalMall';

function Header() {
    return(
        <AppBar position="static">
            <Toolbar>
                <img src={logo} alt="Logo Candy Shop" />
            </Toolbar>
            <Tooltip tittle="Bolsa">
                <Fab>
                    <LocalMallIcon/>
                </Fab>
            </Tooltip>
        </AppBar>
    )
}

export default Header;