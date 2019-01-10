import React, { Component } from 'react';
import { Jumbotron, Grid, Image } from 'react-bootstrap';
import { HashRouter as Router } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';


class Header extends Component {
    render() {
        return (
            <Router> 
                <div className="Header">
                    <Grid>
                        <Jumbotron>
                            <Image className="logo" src="assets/logo.svg" />
                            <h2>Hi I'm Tyrone</h2>
                            <h2>I design & develop user interfaces</h2>
                            <Link smooth to="#about">Say Hello</Link>
                        </Jumbotron>
                    </Grid>
                </div>
            </Router>
        );
    }
}

export default Header;