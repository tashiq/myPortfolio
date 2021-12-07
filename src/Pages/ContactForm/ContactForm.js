import { Button, TextField, TextareaAutosize } from '@mui/material';
import React from 'react';

const ContactForm = () => {
    return (
        <div className="contact-form" id="contact">
            <h1>
                Feel Free to Email Me
            </h1>
            <form
                action="https://formspree.io/f/xjvlbqop"
                method="POST"
                style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', boxSizing: 'border-box' }}
            >
                <TextField id="outlined-basic" name="_replyto" label="Your Email" variant="outlined" style={{ width: '45%' }} />
                <TextareaAutosize
                    aria-label="empty textarea"
                    placeholder="Your Message"
                    name="message"
                    style={{ width: '45%', height: 120, borderRadius: 5, border: '1px solid #bebaa7', fontSize: 17, padding: 12, boxSizing: 'border-box', margin: '12px 0' }}
                />
                <Button type="submit" variant="contained">Submit</Button>
            </form>
        </div>
    );
};

export default ContactForm;