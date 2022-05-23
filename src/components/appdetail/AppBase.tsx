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

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/notifications`}
                            title="Notifications"
                            selected={location.pathname === '/' || location.pathname.indexOf('notifications') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Notifications" />
                        </ListItem>
                        
                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/database`}
                            title="Database"
                            selected={location.pathname === '/' || location.pathname.indexOf('database') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Database" />
                        </ListItem>

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/filestorage`}
                            title="File Storage"
                            selected={location.pathname === '/' || location.pathname.indexOf('filestorage') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="File Storage" />
                        </ListItem>

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/releases`}
                            title="Releases"
                            selected={location.pathname === '/' || location.pathname.indexOf('releases') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Releases" />
                        </ListItem>

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/api-access`}
                            title="API Access"
                            selected={location.pathname === '/' || location.pathname.indexOf('api-access') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="API Access" />
                        </ListItem>

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/monitoring`}
                            title="Monitoring"
                            selected={location.pathname === '/' || location.pathname.indexOf('monitoring') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Monitoring" />
                        </ListItem>

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/logging`}
                            title="Logging"
                            selected={location.pathname === '/' || location.pathname.indexOf('logging') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Logging" />
                        </ListItem>

                        <ListItem button
                            component={RouterLink}
                            to={`/admin/apps/${uid}/dependencies`}
                            title="Dependencies"
                            selected={location.pathname === '/' || location.pathname.indexOf('dependencies') >= 0}>
                            <ListItemIcon>
                                <ImageIcon />
                            </ListItemIcon>
                            <ListItemText primary="Dependencies" />
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
