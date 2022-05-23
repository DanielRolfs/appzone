import * as React from 'react';
import { useParams } from 'react-router-dom'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'



const AppTeamMembers = () => {
    const { uid } = useParams()

    // TODO fetch app from redux toolkit using uid
    // const { data: app, isLoading } = useAppTeamMembersQuery(uid)  // EXAMPLE!

    return (
        <Container maxWidth='xl' fixed>
            <Typography variant='h1' mb={6}>
                AppTeamMembers {uid}
            </Typography>
        </Container>
    )
}

export default AppTeamMembers
