import { AppBar, IconButton, Toolbar, Typography, Stack, Button } from  "@mui/material"
import { School } from "@mui/icons-material"
import { ReactElement } from "react"

function Navbar(): ReactElement {
    return (
        <AppBar position='static' style={{ background: '#194719' }}>
            <Toolbar>
                <IconButton size='large' edge='start'  color='inherit' aria-label='logo'>
                    <School />
                </IconButton>
                <Typography variant='h5' component='div' paddingRight={5} paddingTop={0.5}>
                    BroncoDirectMe 
                </Typography>
                <Stack direction='row' spacing={2} paddingTop={1}>
                    <Button color='inherit' href='/'>Home</Button>
                    <Button color='inherit' href='documentation'>Documentation</Button>
                    <Button color='inherit' href='progress'>Progress</Button>
                    <Button color='inherit' href='credits'>Credits</Button>
                    <Button color='inherit' href='https://chrome.google.com/webstore/category/extensions' target='_blank'>
                       Download
                    </Button>
                </Stack>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar
