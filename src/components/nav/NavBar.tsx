import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Slide from '@mui/material/Slide';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import { makeStyles } from '@mui/styles';
import theme from '../temaConfig';
import { Link as RouterLink } from 'react-router-dom';
import Link from '@mui/material/Link';


interface Props {
    window?: () => Window;
    children: React.ReactElement;
}

const drawerWidth = 240;
const navItems = [
    {
        label: "Home",
        path: "/home"
    },
    {
        label: "Galeria",
        path: "galeria"
    },
    {
        label: "Contacto",
        path: "contacto"
    }
];

const useStyles = makeStyles({
    navegacion: {
        background: "#474747",
        color: 'white',
        textAlign: 'center',
        height: "100%",
        flexGrow: 1
    }
});


const NavBar: React.FC<Props> = (props) => {
    const classes = useStyles();
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} className={classes.navegacion} >
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI Test
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item.label} disablePadding>
                        <ListItemButton
                            component={RouterLink}
                            to={item.path}
                            sx={{ textAlign: 'center' }}
                        >
                            <ListItemText primary={item.label} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    function HideOnScroll(props: Props) {
        const { children, window } = props;
        const trigger = useScrollTrigger({
            target: window ? window() : undefined,
        });
        return (
            <Slide appear={false} direction="down" in={!trigger}>
                {children}
            </Slide>
        );
    }

    return (
        <Box sx={{ display: 'flex' }} component="nav" >
            <CssBaseline />
            <HideOnScroll {...props}>
                <AppBar >
                    <Toolbar className={classes.navegacion}>
                        <IconButton
                            color="inherit"
                            aria-label="open drawer"
                            edge="start"
                            onClick={handleDrawerToggle}
                            sx={{ mr: 2, display: { sm: 'none' } }}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography
                            variant="h6"
                            component="div"
                            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                        >
                            MUI Test
                        </Typography>
                        <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                            {navItems.map((item) => (
                                <Link component={RouterLink} to={item.path} underline='none'>
                                    <Button key={item.label} sx={{ color: '#fff' }} >
                                        {item.label}
                                    </Button>
                                </Link>
                            ))}
                        </Box>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Box component="nav">
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>

            </Box>
            <Toolbar />
        </Box>
    );
}

export default NavBar;