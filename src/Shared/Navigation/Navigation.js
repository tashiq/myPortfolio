import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import './Navigation.css'
import { HashLink } from 'react-router-hash-link'
const Navigation = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };
    return (
        <AppBar position="static" style={{ backgroundColor: '#e8e6e1' }}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, color: 'black', p: 1 }} style={{ maxWidth: '15px', borderRadius: '50%', backgroundColor: '#e6e4e1' }}>

                        <i className="fa fa-bars" onClick={handleOpenNavMenu}></i>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' }, color: 'black', p: 2
                            }}
                        >
                            <Button
                                key={"page"}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                <span className="nav-item"><HashLink to="/home#about"><span className="nav-prev">.me()</span><span className="nav-span"> Home </span></HashLink></span>
                            </Button>
                            <Button
                                key={"page"}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <span className="nav-item"><HashLink to="/home#about"><span className="nav-prev">.about()</span><span className="nav-span"> MySelf </span></HashLink></span>
                            </Button>
                            <Button
                                key={"page"}
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <span className="nav-item"><HashLink to="/home#projects"><span className="nav-prev">.myWorks()</span><span className="nav-span"> Projects </span></HashLink></span>
                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <div className="nav-item"><HashLink to="/home#contact"><span className="nav-prev">.contact()</span><span className="nav-span"> Email Me </span></HashLink></div>

                            </Button>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                <span className="nav-item">
                                    <HashLink to="/blogs"><span className="nav-prev">.blogs()</span><span className="nav-span">Posts</span>
                                    </HashLink>
                                </span>
                            </Button>
                        </Menu>
                    </Box>

                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'flex-end' }}
                    >

                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <span className="nav-item"><HashLink to="/home#about"><span className="nav-prev">.me()</span><span className="nav-span"> Home </span></HashLink></span>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <span className="nav-item"><HashLink to="/home#about"><span className="nav-prev">.about()</span><span className="nav-span"> MySelf </span></HashLink></span>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <span className="nav-item"><HashLink to="/home#projects"><span className="nav-prev">.myWorks()</span><span className="nav-span"> Projects </span></HashLink></span>
                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <span className="nav-item"><HashLink to="/home#contact"><span className="nav-prev">.contact()</span><span className="nav-span"> Email Me </span></HashLink></span>

                        </Button>
                        <Button
                            onClick={handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            <span className="nav-item">
                                <HashLink to="/blogs"><span className="nav-prev">.blogs()</span><span className="nav-span">Posts</span>
                                </HashLink>
                            </span>
                        </Button>
                    </Box>

                </Toolbar>
            </Container>
        </AppBar>


    );
};

export default Navigation;