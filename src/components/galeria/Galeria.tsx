import React, { useEffect, useState } from 'react';

import { AppBar, Box, Button, Container, Grid, Hidden, IconButton, List, Toolbar } from '@mui/material';
import Lista from './list/Lista';
import GaleriaImagenes from './GaleriaImagenes';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import makeStyles from '@mui/styles/makeStyles';
import theme from "../temaConfig";

const useStyles = makeStyles({
    asideTolbar: {
        background: theme.palette.background.default,
        margin: "0em 0.3em",
        textAlign: "center",
        alignItems: "center"
    }
});

const Galeria: React.FC = () => {
    const classes = useStyles();
    const [option, setOption] = useState<number>(1);
    const [mobileOpen, setMobileOpen] = React.useState(false);
    useEffect(() => {

    }, [option])

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
        //console.log(mobileOpen);
    };

    return (
        <Box>
            <Hidden mdUp>
                <Toolbar className={classes.asideTolbar}>
                    <IconButton
                        color="info"
                        size="medium"
                        edge="start"
                        aria-label="menu"
                        onClick={handleDrawerToggle}
                    >
                        <ArrowDropDownIcon color='primary' />
                    </IconButton>
                </Toolbar>
            </Hidden>
            <Grid
                component="main"
                container
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                mt={{ xs: 0, md: 3 }}
                p={{ xs: 1, md: 3 }}
            >
                <Grid item xs={2} sm={2} md={2} component="aside">
                    <Lista setOption={setOption} mobileOpen={mobileOpen} />
                </Grid>
                <Grid item xs={10} sm={10} md={10} component="section">
                    <GaleriaImagenes option={option} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Galeria;
