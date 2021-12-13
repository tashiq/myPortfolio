import { Card, CardContent, CircularProgress, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
// import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

const SingleProject = () => {
    const { id } = useParams();
    const [project, setProject] = useState({})
    // console.log(id);
    useEffect(() => {
        fetch(`http://localhost:4000/projects/${id}`)
            .then(res => res.json())
            .then(data => setProject(data))
    }, [id])
    console.log(project);
    if (!project.name) return <CircularProgress />
    else
        return (
            <>
                <Typography variant="h3" sx={{ my: 3 }}>{project.name}</Typography>
                <Card style={{ position: 'relative', minWidth: '95vw' }}>
                    <div className='single-project'>
                        {
                            project?.img?.map(img =>
                                <img src={img} alt="" />
                            )
                        }
                    </div>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {project.name}
                        </Typography>
                        <ul style={{ textAlign: 'left' }}>
                            {
                                project.options?.map((option) =>
                                    <li>{option}</li>
                                )
                            }
                            <li><a href={project.server[0]} rel='noreferrer' target={'_blank'}>Server Code</a></li>
                            <li><a href={project.client[0]} rel='noreferrer' target={'_blank'}>Live Site</a></li>
                            <li><a href={project.client[1]} rel='noreferrer' target={'_blank'}>Client Code</a></li>
                        </ul>
                    </CardContent>
                </Card>
            </>
        );
};

export default SingleProject;