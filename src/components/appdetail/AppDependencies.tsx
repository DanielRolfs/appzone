import * as React from 'react';
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'



const AppDependencies = () => {
    const { uid } = useParams()

    // TODO fetch app from redux toolkit using uid
    // const { data: app, isLoading } = useAppScreenshotsQuery(uid)  // EXAMPLE!

    return (
        <Container maxWidth='xl' fixed>
            <Typography variant='h1' mb={6}>
                AppDependencies {uid}
            </Typography>
        </Container>
    )
}

export default AppDependencies