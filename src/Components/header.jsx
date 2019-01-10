import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Grid, Image } from 'react-bootstrap';


class Header extends Component {
    render() {
        return (
            <div className="Header">
                <Grid>
                    <Jumbotron>
                        <Image className="logo" src="assets/logo.svg" />
                        <h2>Hi I'm Tyrone</h2>
                        <h2>I design & develop user interfaces</h2>
                        <Link to="/">Say Hello</Link>
                    </Jumbotron>
                </Grid>
            </div>
        );
    }
}

export default Header;