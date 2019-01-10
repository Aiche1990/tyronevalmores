import React, { Component } from 'react';
import { Grid, Row, Image } from 'react-bootstrap';

class Footer extends Component {
    render() {
        return (
            <div className="Footer">
                <Grid>
                    <Image src="./assets/logo.svg" className="img-logo"/>
                    <Row className="social-media">
                        <a href="/">
                            <Image src="./assets/behance.png" className="media-links" />
                        </a>
                    
                        <a href="/">
                            <Image src="./assets/email.png" className="media-links" />
                        </a>    
                    </Row>
                    <h3>johntyronevalmores@gmail.com</h3>
                    <hr />
                    <h5>Handcrafted by me © 2019</h5>
                </Grid>
            </div>
        );
    }
}

export default Footer;