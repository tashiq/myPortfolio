import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import laptopea from '../../../images/laptopea.png'
import epic from '../../../images/epic.png'
import nogorful from '../../../images/nogorful.png'
import jumanji from '../../../images/jumanji.png'
import { Container, Grid } from '@mui/material';
// import { Link } from 'react-router-dom'
const Project = () => {
    return (
        <Container id="projects">
            <Typography variant="h3" sx={{ textAlign: 'left', mt: 4, mb: 2 }}>My Projects</Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ minWidth: 345, maxWidth: 400, height: 500 }} style={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={laptopea}
                            alt="Laptopea"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Laptopea
                            </Typography>
                            <ul style={{ textAlign: 'left' }}>
                                <li>A full stack website.</li>
                                <li>3 different users possible Normal user, signed in user and admin.</li>
                                <li>Email verification available.</li>
                                <li>Materials used for front end: React, React Router, Material UI, Firebase authentication, JavaScript.</li>
                                <li>Materials used for backend: Express, MongoDB, JavaScript.</li>
                            </ul>
                        </CardContent>
                        <CardActions style={{ position: 'absolute', bottom: 0 }}>
                            <a href="https://assignment12-d5f19.web.app/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', }}><Button size="small">Live Site</Button></a>
                            <a href="https://github.com/tashiq/laptopea" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', }}><Button size="small">Github</Button></a>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ minWidth: 345, maxWidth: 400, height: 500 }} style={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={jumanji}
                            alt="Jumanji Park"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Jumanji Park
                            </Typography>
                            <ul style={{ textAlign: 'left' }}>

                                <li>A full stack website.</li>
                                <li>Materials used for front end: React, React Router, Material UI, Firebase authentication, JavaScript.</li>
                                <li>Materials used for backend: Express, MongoDB, JavaScript.</li>
                                <li>2 different user possible. (admin and viewer)</li>
                                <li>Firebase Authentication is used</li>
                            </ul>
                        </CardContent>
                        <CardActions style={{ position: 'absolute', bottom: 0 }}>
                            <a href="https://assingment-2a620.web.app/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', }}><Button size="small">Live Site</Button></a>
                            <a href="https://github.com/tashiq/Jumanji-client" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', }}><Button size="small">Github</Button></a>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ minWidth: 345, maxWidth: 400, height: 500 }} style={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={epic}
                            alt="Epic Health Care"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Epic Health Care
                            </Typography>
                            <ul style={{ textAlign: 'left' }}>

                                <li>A Single Page Application</li>
                                <li>Features: Context API, React Router, Bootstrap.</li>
                                <li>Stonishing design.</li>
                                <li>Materials used for front end: React, React Router, Material UI, Firebase authentication, JavaScript.</li>
                            </ul>
                        </CardContent>
                        <CardActions style={{ position: 'absolute', bottom: 0 }}>
                            <a href="https://assignment-10-63c1e.web.app/" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', }}><Button size="small">Live Site</Button></a>
                            <a href="https://github.com/tashiq/epic-healthcare" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', }}><Button size="small">Github</Button></a>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item xs={12} md={6} lg={4}>
                    <Card sx={{ minWidth: 345, maxWidth: 400, height: 500 }} style={{ position: 'relative' }}>
                        <CardMedia
                            component="img"
                            height="140"
                            image={nogorful}
                            alt="Nogorful"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Nogorful
                            </Typography>
                            <ul style={{ textAlign: 'left' }}>

                                <li>A full stack website.</li>
                                <li>MySQL is used in backend</li>
                                <li>Materials used for front end: React, React Router, Material UI, JavaScript.</li>
                                <li>Materials used for backend: Express, MySQL, JavaScript.</li>
                                <li>Combination of React and MySQL server</li>
                                <li>Firebase Authentication is available</li>
                                <li>Based on optimized ER model</li>
                            </ul>
                        </CardContent>
                        <CardActions style={{ position: 'absolute', bottom: 0 }}>
                            <Button size="small" disabled>ON GOING</Button>
                            <a href="https://github.com/tashiq/Nogorful-Client" target="_blank" rel="noreferrer" style={{ textDecoration: 'none', }}><Button size="small">Github</Button></a>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Project;