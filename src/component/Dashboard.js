import React from 'react'
import Header from './Header';
import Footer from './Footer';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import './css/Dashboard.css';
import Panelcard from './Panelcard'
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';


const drawerWidth = 240;

export default function Dashboard() {
    return (
        <>
            <div className='MainDashboardContainer'>

                <Header />
                <Box sx={{ display: 'flex' }}>
                    <Drawer
                        variant="permanent"
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                        }}
                    >
                        <Toolbar />
                        <div className='sidebar'>

                        <ListItem disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    <Avatar /> 
                                                </ListItemIcon>
                                                <ListItemText sx={{color:'rgb(28, 147, 237)'}}primary={"Mohit Sharma"} />
                                            </ListItemButton>
                                        </ListItem>

                            <Box sx={{ overflow: 'auto' }}>
                                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                                    <ListItem alignItems="flex-start">
                                        <ListItemAvatar>
                                        <InboxIcon />
                                        </ListItemAvatar>
                                        <ListItemText
                                            primary="Notificarions"
                                            secondary={
                                                <React.Fragment>
                                                    <Typography
                                                        sx={{ display: 'inline' }}
                                                        component="span"
                                                        variant="body2"
                                                        color="text.primary"
                                                    >
                                                        Ali Connors
                                                    </Typography>
                                                    {" — I'll be in your neighborhood doing errands this…"}
                                                </React.Fragment>
                                            }
                                        />
                                    </ListItem>
                                    <Divider variant="inset" component="li" />
                                </List>
                                <Divider />

                                <List>
                                    {['Home', 'Production', 'Reports', 'Planning', 'Finances'].map((text, index) => (
                                        <ListItem key={text} disablePadding>
                                            <ListItemButton>
                                                <ListItemIcon>
                                                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                                                </ListItemIcon>
                                                <ListItemText primary={text} />
                                            </ListItemButton>
                                        </ListItem>
                                    ))}
                                </List>
                            </Box>
                        </div>

                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Toolbar />
                        <Typography paragraph>
                            <Panelcard />
                        </Typography>
                        {/* <Typography paragraph>
                        <Panelcard/>
                    </Typography> */}
                    </Box>
                </Box>
                {/* <Footer /> */}
            </div>

        </>

    );
}
