
import { Typography, Box, makeStyles, CircularProgress, Grid } from '@material-ui/core';
import Card from './Card';

const useStyles = makeStyles({
    component: {
        color: '#8ACA2B',
        flexDirection: 'column',
        display: 'flex',
        alignItem: 'center'
    },
    container: {
        color: '#8ACA2B',
        marginBottom: 40,
        textAlign: 'center'
    }
})

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
    const classes = useStyles();

    if (!confirmed) {
        return <CircularProgress />
    }
    return (
        <Box className={classes.component}>
            <Typography className={classes.container} variant="h4" gutterBottom> CoronaVirus Cases Globally </Typography>

            <Grid container spacing={3} justify="center">
                <Card
                    cardTitle="Infected"
                    value={confirmed.value}
                    desc="Number of Infected Cases of Covid-19"
                    lastUpdate={lastUpdate}
                />
                <Card
                    cardTitle="Recovered"
                    value={recovered.value}
                    desc="Number of Recovered Cases from Covid-19"
                    lastUpdate={lastUpdate}
                />
                <Card
                    cardTitle="Deaths"
                    value={deaths.value}
                    desc="Number of Deaths Caused by Covid-19"
                    lastUpdate={lastUpdate}
                />
            </Grid>

        </Box>
    );
}

export default Cards;