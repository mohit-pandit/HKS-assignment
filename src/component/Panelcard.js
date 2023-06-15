import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { tabsClasses } from '@mui/material/Tabs';
import './css/Dashboard.css';



export default function Panelcard() {
    const theme = useTheme();

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <div className='d-flex'>
                <Box sx={{ bgcolor: '#d8dde3', width: 850, paddingBottom: '1px',borderRadius:'5px' }}>
                    <p className='TaskPara'>Tasks</p>
                    <Tabs 
                        value={value}
                        onChange={handleChange}
                        variant="scrollable"
                        scrollButtons
                        aria-label="visible arrows tabs example"
                        sx={{bgcolor: '#fff',
                            [`& .${tabsClasses.scrollButtons}`]: {
                                '&.Mui-disabled': { opacity: 0.3 },
                            },
                        }}
                    >
                        <Tab label="Item One" />
                        <Tab label="Item Two" />
                        <Tab label="Item Three" />
                    </Tabs>

                    <Box
                        sx={{
                            width: '95%',
                            height: '400px',
                            bgcolor: 'white',
                            borderRadius: '5px',
                            border: '1px solid lightgrey',
                            margin: '3% auto'
                        }}
                    />

                    <Box
                        sx={{
                            width: '95%',
                            height: '220px',
                            bgcolor: 'white',
                            borderRadius: '5px',
                            border: '1px solid lightgrey',
                            margin: '3% auto'
                        }}
                    />
                </Box>
                <div className='ms-3'>
                    <Box sx={{ bgcolor: '#d8dde3', width: 700, height: '400px', paddingBottom: '1px',borderRadius:'5px' }}>
                        <p className='TaskPara'>Trends</p>
                        
                    </Box>
                    <Box className='mt-3' sx={{ bgcolor: '#d8dde3',  height: '400px',width: 700, paddingBottom: '1px',borderRadius:'5px' }}>
                        <p className='TaskPara'>Efficiency</p>
                    </Box>
                </div>
            </div>

        </>

    );
}