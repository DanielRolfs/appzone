import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function AppCard() {
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image="../img/App1.png"
                alt="App Logo"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Automated Time Sheets
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Track your efforts and generate automated timesheets.
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Open App</Button>
                <Button size="small">More Info</Button>
            </CardActions>
        </Card>
    );
}
