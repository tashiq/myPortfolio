import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Container, Grid } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Link } from react-router-dom'
const Project = () => {
    const [projects, setProjects] = useState([]);
    // const navigate = useNavigate()
    useEffect(() => {
        fetch('http://localhost:4000/projects')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <Container id="projects">
            <Typography variant="h3" sx={{ textAlign: 'left', mt: 4, mb: 2 }}>My Projects</Typography>
            <Grid container spacing={2}>
                {
                    projects?.map(project =>
                        <Grid item xs={12} md={6} lg={4}>
                            <Card sx={{ minWidth: 345, maxWidth: 400, height: 500 }} style={{ position: 'relative' }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={project.img[0]}
                                    alt={project.name}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {project.name}
                                    </Typography>
                                    <ul style={{ textAlign: 'left' }}>
                                        {
                                            project.options?.map((option, index) => {
                                                if (index < 5) return <li>{option}</li>
                                                else {
                                                    return <></>
                                                }
                                            })

                                        }
                                    </ul>
                                </CardContent>
                                <CardActions style={{ position: 'absolute', bottom: 0 }}>
                                    <Link to={`/projects/${project._id}`} style={{ textDecoration: 'none', color: 'black' }}><Button variant="outlined" >View Details</Button></Link>
                                </CardActions>
                            </Card>
                        </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Project;