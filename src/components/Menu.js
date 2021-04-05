import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import PeopleIcon from '@material-ui/icons/People';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import GroupIcon from '@material-ui/icons/Group';
import RecentActorsIcon from '@material-ui/icons/RecentActors';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
}));

function Menu() {
    const classes = useStyles();
    const customerIcons = [<AddBoxIcon/>, <SearchIcon/>, <PeopleIcon/>, <BusinessCenterIcon/>, <AccountCircleIcon/>];
    const employeeIcons = [<SearchIcon/>, <PeopleIcon/>, <RecentActorsIcon/>];
    return (
        <div>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
            >
                <Toolbar />
                <div className={classes.drawerContainer}>
                    <List>
                        <ListItem>  <ListItemText primary= "Customer:" /> </ListItem>
                        {['New Customer', 'Search', 'Directory', 'Prime Members', 'Active Members']
                            .map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{customerIcons[index]}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                    <List>
                        <ListItem>  <ListItemText primary= "Employee:" /> </ListItem>
                        {['Search', 'Directory', 'Manage'].map((text, index) => (
                            <ListItem button key={text}>
                                <ListItemIcon>{employeeIcons[index]}</ListItemIcon>
                                <ListItemText primary={text} />
                            </ListItem>
                        ))}
                    </List>
                </div>
            </Drawer>
        </div>
    );
}

export default Menu;