import * as React from 'react';

import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';






export default function RecipeReviewCard({data}) {
    

    console.log(data.length)

    return (
        <Card sx={{ maxWidth: 345 }} style={{margin:" 20px auto"}} >
            <CardHeader
                
                title={data.username}
                
            />
            <CardMedia
                component="img"
                height="194"
                image={data.link}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant='h6'>
                    {data.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {data.content}
                </Typography>
            </CardContent>
            
            
        </Card>
    );
}
