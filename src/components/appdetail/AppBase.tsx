import * as React from 'react';
import { Link as RouterLink, Outlet, useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ImageIcon from '@mui/icons-material/Image';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import { useTranslation } from 'react-i18next'

// TODO this is the component that renders the toolbar and left sidebar for the app detail view
const AppBase = () => {
    const {uid} = useParams()
    const { t } = useTranslation()

    return (
        <div>
            <div>
                black bar
                <Typography mt={2}>
                    <Link component={RouterLink} to='/admin'>{t('common.links.backTo', { context: 'assessments' })}</Link>
                </Typography>
            </div>

            <div style={{ display: "flex", flexDirection: "row" }}>
                <div>
                    <List component="nav" aria-label="main">
                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}`}
                            title="App Detail"
                            selected={location.pathname === '/' || location.pathname.indexOf('/') >= 0}>
                                <ListItemIcon>
                                    <ImageIcon />
                                </ListItemIcon>
                            <ListItemText primary="App Detail" />
                        </ListItem>
                        
                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/screenshots`}
                            title="Screenshots"
                            selected={location.pathname === '/' || location.pathname.indexOf('screenshots') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Screenshots" />
                        </ListItem>

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/contacts`}
                            title="Contacts & Links"
                            selected={location.pathname === '/' || location.pathname.indexOf('contacts') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Contacts & Links" />
                        </ListItem>

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/team`}
                            title="Team Members"
                            selected={location.pathname === '/' || location.pathname.indexOf('team') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Team Members" />
                        </ListItem>

                    </List>
                </div>
                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default AppBase
