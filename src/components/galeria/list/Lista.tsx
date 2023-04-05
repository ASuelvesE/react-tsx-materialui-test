import * as React from 'react';
import Box from '@mui/material/Box';

import {
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Hidden,
    Typography,
    Drawer,
    IconButton,
    Toolbar,
    AppBar
} from '@mui/material';
import Divider from '@mui/material/Divider';
import PetsIcon from '@mui/icons-material/Pets';
import ToysIcon from '@mui/icons-material/Toys';
import { Button } from '@mui/material';
import { useEffect } from 'react';
import makeStyles from '@mui/styles/makeStyles';

interface Props {
    setOption: (value: number) => void;
    mobileOpen: Boolean;
    window?: () => Window;
}

const drawerWidth = 240;
const useStyles = makeStyles({
    aside: {
        width: '100%',
        maxWidth: 260,
        borderRadius: "7px",
        boxShadow: "0 1px 5px 0 #B4B4B4, 0 1px 5px 0 rgba(0, 0, 0, 0.1)",
        height: "100vh"
    }
});


const Lista: React.FC<Props> = ({ setOption, mobileOpen }) => {
    const classes = useStyles();
    const [asideOpen, setAsideOpen] = React.useState(false);


    useEffect(() => {
        handleOpenAside()
    }, [mobileOpen])

    const handleOpenAside = () => {
        setAsideOpen((prevState) => !prevState);
    };
    const actionButton = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>,
        index: number,
    ) => {
        setOption(index);
    };

    const drawer = (
        <Box onClick={handleOpenAside} className={classes.aside}>
            <List component="ul" aria-label="main mailbox folders">
                <ListItemButton
                    onClick={(event) => actionButton(event, 0)}>
                    <ListItemIcon>
                        <PetsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cats" />
                </ListItemButton>
                <ListItemButton
                    onClick={(event) => actionButton(event, 1)}
                >
                    <ListItemIcon>
                        <ToysIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dogs" />
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    onClick={(event) => actionButton(event, 2)}>
                    <ListItemIcon>
                        <ToysIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cars" />
                </ListItemButton>
                <ListItemButton
                    onClick={(event) => actionButton(event, 3)}>
                    <ListItemIcon>
                        <ToysIcon />
                    </ListItemIcon>
                    <ListItemText primary="Cars" />
                </ListItemButton>
            </List>
        </Box>
    );

    return (
        <Box className={classes.aside}>
            <Drawer
                variant="temporary"
                open={asideOpen}
                onClose={handleOpenAside}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: { xs: 'block', sm: 'none'},
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
            >
                {drawer}
            </Drawer>

            <List component="ul" aria-label="main mailbox folders">
                <ListItemButton
                    onClick={(event) => actionButton(event, 0)}
                >
                    <ListItemIcon>
                        <PetsIcon />
                    </ListItemIcon>
                    <Hidden mdDown>
                        <ListItemText primary="Cats" />
                    </Hidden>
                </ListItemButton>
                <ListItemButton
                    onClick={(event) => actionButton(event, 1)}
                >
                    <ListItemIcon>
                        <ToysIcon />
                    </ListItemIcon>
                    <Hidden mdDown>
                        <ListItemText primary="Dogs" />
                    </Hidden>
                </ListItemButton>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folder">
                <ListItemButton
                    onClick={(event) => actionButton(event, 2)}
                >
                    <ListItemIcon>
                        <ToysIcon />
                    </ListItemIcon>
                    <Hidden mdDown>
                        <ListItemText primary="Cars" />
                    </Hidden>
                </ListItemButton>
                <ListItemButton
                    onClick={(event) => actionButton(event, 3)}
                >
                    <ListItemIcon>
                        <ToysIcon />
                    </ListItemIcon>
                    <Hidden mdDown>
                        <ListItemText primary="Cars" />
                    </Hidden>
                </ListItemButton>
            </List>
        </Box>

    );
}

export default Lista;