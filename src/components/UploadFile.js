import { useRef } from 'react'
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Rating from '@material-ui/lab/Rating';
import Button from '@material-ui/core/Button';
import ManualUpload from './ManualUpload';

const useStyles = makeStyles((theme) => ({
    formContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: theme.spacing(2),
    },
    textField: {
        marginBottom: theme.spacing(2),
    },
    rating: {
        marginBottom: theme.spacing(2),
    },
    uploadButton: {
        marginBottom: theme.spacing(2),
    },
}));
export default function UploadFile() {
    const fileInputRef = useRef(null);

    const uploadFile = () => {
        console.log("file ", fileInputRef);
    };
    const classes = useStyles();
    const [appName, setAppName] = useState('');
    const [starRating, setStarRating] = useState(0);

    const handleAppNameChange = (event) => {
        setAppName(event.target.value);
    };

    const handleStarRatingChange = (event, newValue) => {
        setStarRating(newValue);
    };

    const handleUpload = () => {
        // Implement your upload logic here
        console.log('Uploading...');
    };
    return (
        <div>upload file</div>
    )
}
