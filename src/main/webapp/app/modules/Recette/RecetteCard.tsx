import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import { Avatar, CardActions, CardContent, IconButton, IconButtonProps, styled, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import Collapse from '@mui/material/Collapse';
import { Button, Input } from 'reactstrap';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecetteCard({ props }) {
  return (
    <div>
      <Card sx={{ maxWidth: 700, marginBottom: 2 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              AN
            </Avatar>
          }
          title={props.title}
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {props.description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
