import React, {useEffect, useState} from 'react'
import { Container, Grow, Grid } from '@material-ui/core';

import Posts from '../Posts/Posts';
import Form from '../Form/Form';
import { useDispatch } from 'react-redux';
import {getPosts} from '../../actions/posts'
import './Home.css';

const Home = () => {

    // this was creating an error later. was null before
    const [currentId, setCurrentId] = useState(0)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts());

        // the reason i am adding currentId is because since now we are clearing the input, we are changing the currentId which then will change the backend post.
    }, [currentId, dispatch])

    return (
        <Grow in>
            <Container>
                <Grid container  justifyContent="space-between" alignItems="stretch" spacing={3}>
                    {/* the xs means for small devices it will take it all up */}
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId} />
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    )
}

export default Home;
