import React, { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';

class About extends Component {
    render() {
        return (
            <div className="About">
                <Grid>
                    <div className="about-me">
                        <Image src="assets/img-me.jpg" className="img-me"/>
                        <p>
                            Hi I'm <strong>Tyrone Valmores</strong>, an aspiring <strong>Front-end Developer</strong> and <strong>Designer</strong>. 
                            I design and develop website using HTML5, CSS3 and a touch of JavaScript. 
                            I love coding things from scratch and i hope i could contribute my knowledge 
                            in an environment where i could also learn and grow. 
                        </p>
                        <Row className="my-skills">
                            <Col lg={12} lg={4} >
                                <h3>Idea</h3>
                                <Image src="assets/idea.png" className="skill-icon" />
                                <p>
                                    I can collaborate with peers to help brain storm ideas that could translate into well thought out designs.
                                </p>
                            </Col>
                            <Col lg={12} lg={4} >
                                <h3>Design</h3>
                                <Image src="assets/pencil.png" className="skill-icon" />
                                <p>
                                    I sketch and wireframe interfaces that try to focus on content structure, intuitive UI patterns and simple interactions.
                                </p>
                            </Col>
                            <Col lg={12} lg={4} >
                                <h3>Code</h3>
                                <Image src="assets/code.png" className="skill-icon" />
                                <p>
                                    I love coding websites from scratch, but i can also work with existing technologies such as <strong>Bootstrap</strong> and <strong>Jquery</strong>.
                                </p>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default About;