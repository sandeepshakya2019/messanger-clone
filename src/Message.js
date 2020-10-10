import React from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import './Message.css'
import { forwardRef } from 'react';
// import FlipMove from 'react-flip-move';

const Message = forwardRef(({message, username}, ref) => {
    const isUser = username === message.username
    //console.log(username)
    // console.log(message)
    
    return (
        <div  ref={ref}>
            <Card className={`message ${isUser && 'message__user'}`}>
                <CardContent>
                    <Typography color="white" variant="h6" component="h6">
                    {!isUser && `${message.username || 'Unknown User'} : `} {message.message}
                    </Typography>
                    
                </CardContent>
                
            </Card>
        </div>
    )
})

export default Message
