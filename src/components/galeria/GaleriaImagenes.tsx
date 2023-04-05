import * as React from 'react';

import { useEffect, useState } from 'react';
import { getGatos, getGatosSincrono } from '../../services/Gatos';
import { getPerros, getPerrosSincrono } from '../../services/Perros';
import { Grid } from '@mui/material';
import Cat from './cards/Cat';
import Dog from './cards/Dog';
import { ICat } from '../../models/ICat';
import { IDog } from '../../models/IDog';
import makeStyles from '@mui/styles/makeStyles';

interface Props {
    option: number;
}

const useStyles = makeStyles({
    galeria: {
        background: "#E8E8E8",
        borderRadius: "7px",
        boxShadow: "0 1px 5px 0 #B4B4B4, 0 1px 5px 0 rgba(0, 0, 0, 0.1)",
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: 'auto'
    },
});


const GaleriaImagenes: React.FC<Props> = ({ option }) => {
    const classes = useStyles();
    const [cats, setCats] = useState<ICat[]>([]);
    const [dogs, setDogs] = useState<string[]>([]);

    useEffect(() => {
        //console.log(option);
        if (option === 0) {
            fetchGatos();
            //getGatos(setCats);
            setDogs([])
        } else if (option === 1) {
            fetchPerros();
            //getPerros(setDogs);
            setCats([])
        }
    }, [option])

    const fetchGatos = async () => {
        const gatos = await getGatosSincrono();
        setCats(gatos)
    }
    const fetchPerros = async () => {
        const perros = await getPerrosSincrono();
        setDogs(perros);
    }
    return (
        <Grid
            container
            gap={{ xs: 2, sm: 3, md: 4, lg: 6 }}
            sx={{ p: 2 }}
            className={classes.galeria}
        >
            {cats.map((cat: ICat, index: number) => {
                return (
                    <Grid item xs={12} sm={3} md={3} lg={2} key={index} component="article">
                        <Cat cat={cat} indice={index} />
                    </Grid>
                );
            })}
            {dogs.map((dog: string, index: number) => {
                return (
                    <Grid item xs={12} sm={3} md={3} lg={2} key={index} component="article">
                        <Dog url={dog} indice={index} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default GaleriaImagenes;