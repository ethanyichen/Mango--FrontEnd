import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';


function Header(props) {
    return (
        <header>
                <IconButton className="menu-icon" edge="start" onClick = {props.menuOnClick} >
                <MenuRoundedIcon style={{ color: "white" , fontSize: 30}} />
            </IconButton>
                <h1 className="title-text">Mango</h1>
        </header>
    );
}

export default Header;