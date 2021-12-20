import * as React from 'react';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
// import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import axios from 'axios';
export default function TextFieldHiddenLabel({form,num}) {
    let [title,setTitle] = React.useState("")
    let [username, setUser] = React.useState("")
    let [link, setLink] = React.useState("")
    let [content, setContent] = React.useState("")
    function postReq() {
        axios.post("https://backend.unihelp.workers.dev/posts",{
            key:num,
            data: {
                title:title,
                username:username,
                content:content,
                link:link
            }
        },{
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*"
            }
        })
    }
    return (
        <Stack
            component="form"
            sx={{
                width: '25ch',
            }}
            spacing={2}
            noValidate
            autoComplete="off"
        >

            <TextField
                hiddenLabel
                id="filled-hidden-label-small"
                label="Username"
                value={username}
                onChange={(e) => setUser(e.target.value)}
            />
            <TextField
                hiddenLabel
                label="Title"
                id="filled-hidden-label-normal"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                // defaultValue="Normal"
                // variant="filled"
            />
            <TextField
                hiddenLabel
                label="Content"
                id="filled-hidden-label-normal"
                value={content}
                onChange={(e) => setContent(e.target.value)}
            // defaultValue="Normal"
            // variant="filled"
            />
            <TextField
                hiddenLabel
                label="Link"
                id="filled-hidden-label-normal"
                value={link}
                onChange={(e) => setLink(e.target.value)}
            // defaultValue="Normal"
            // variant="filled"
            />
            <Button variant='contained' onClick={() => postReq()}>
                POST
            </Button>
        </Stack>
    );
}
