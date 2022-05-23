import * as React from 'react';
import { Link as RouterLink, Outlet, useParams } from 'react-router-dom'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import ImageIcon from '@mui/icons-material/Image';

// TODO this is the component that renders the toolbar and left sidebar for the app detail view
const AppBase = () => {
    const {uid} = useParams()

    return (
        <div>
            <List component="nav" aria-label="main">
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
            </List>

            <Outlet />
        </div>
    )
}

export default AppBase
