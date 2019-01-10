import React, { Component } from 'react';
import { Grid, Row } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Grid>
                    <Row>
                        <h3>Interested? let's keep in touch!</h3>
                        <p>I'm currently accepting projects as a challenge and practice.</p>
                        <a href="https://plus.google.com/105553842517996204327">Start a Conversation</a>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Contact;