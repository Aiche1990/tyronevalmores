import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Contact extends Component {
    render() {
        return (
            <div className="Contact">
                <Grid>
                    <Row>
                        <h3>Interested? let's keep in touch!</h3>
                        <p>I'm currently accepting projects as a challenge and practice.</p>
                        <a href="/">Start a Conversation</a>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Contact;