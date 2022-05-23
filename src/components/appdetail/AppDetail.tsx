import * as React from 'react';
import { Link as RouterLink, useParams } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';


function AppDetail() {
    const { uid } = useParams()
    const {t} = useTranslation()
    // TODO fetch app from redux toolkit using uid
    // const { data: app, isLoading } = useAppScreenshotsQuery(uid)  // EXAMPLE!

    return (
        <Container maxWidth='xl' fixed>
            <Typography variant='h1' mb={6}>
                Details for App {uid}
            </Typography>
            <Typography mt={2}>
                <Link component={RouterLink} to='/admin'>{t('common.links.backTo', {context: 'assessments'})}</Link>
            </Typography>
        </Container>
    );
}

export default AppDetail;



