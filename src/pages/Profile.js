import React, { useEffect, useState } from "react";
import { Container, Card, Button } from "react-bootstrap";
import { Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Profile({isLogedIn, setIsLogedIn}) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('eshop_jwt');
        axios.get('http://eshop.reskimulud.my.id/user', {
            headers: {
                'Authorize': `Bearer ${token}`,
            },
        }).then((res) => {
            setName(res.data.data.name);
            setEmail(res.data.data.email);
        });
    }, []);

    if(!isLogedIn) {
        return (
            <Navigate to ='/auth/login' repalce />
        );
    }

    const onLogout = (e) => {
        localStorage.clear();
        setIsLogedIn(false);
        navigate('/auth/login');
    };

    return (
        <Container>
            <Card className='m-3 p-3'>
                <Card.Title>Name :{name} </Card.Title>
                <Card.Subtitle>Email:{email} </Card.Subtitle>
                <Button onClick={onLogout} variant="info">Logout</Button>
            </Card>
        </Container>
    );
}

export default Profile;