import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


export const CourseHome=()=>{
  return (
    <div>
        <Box>
        <CardContent>
          <Typography>
            Name
          </Typography>
          <CardMedia
        component="img"
        height="140"
        image="https://drive.google.com/file/d/10TYnlfuwIZ0bHo-x4co1Ldw74mZIxw5y/view?usp=sharing"
        alt="profile pic"
      />
        </CardContent>
      </Box>
      <Box>
        <Card>
          <Typography variant="h3">
            Welcome back,Jenny!
          </Typography>
          <Typography variant="h5">
            What would you like to learn today?
          </Typography>
        </Card>
        <Card>
          {/* map out the course images  */}
        </Card>
      </Box>
    </div>
  );
}
