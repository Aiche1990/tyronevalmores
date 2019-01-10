import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

class Projects extends Component {
    render() {
        return (
            <div className="Projects">
                <Grid>
                    <h3>My Project </h3>
                    <div className="project-wrapper">
                        <h4>Here are a few recent design projects i made.</h4>
                        <Row>
                            <Col xs={12} sm={4}>
                                <div className="project">
                                    <div className="project-bg" />
                                    <div className="project-desc">
                                        <div className="project-content">
                                            <div className="project-name">Bitrix</div>
                                            <p>This is a mock website i made for web solution companies. it was a fun project to say the least.</p>
                                            <a href="https://aiche1990.github.io/Bitrix.github.io/">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={4}>
                                <div className="project">
                                    <div className="project-bg-2" />
                                    <div className="project-desc">
                                        <div className="project-content">
                                            <div className="project-name">Fish Hooks</div>
                                            <p>This is a blog type website for fishing enthusiast to share experience and news about fishing.</p>
                                            <a href="https://aiche1990.github.io/FishHooks.github.io/">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={4}>
                                <div className="project">
                                    <div className="project-bg-3" />
                                    <div className="project-desc">
                                        <div className="project-content">
                                            <div className="project-name">Design Hub</div>
                                            <p>A mock website for companies that provides services in building websites.</p>
                                            <a href="https://aiche1990.github.io/designhub/">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={4}>
                                <div className="project">
                                    <div className="project-bg-4" />
                                    <div className="project-desc">
                                        <div className="project-content">
                                            <div className="project-name">EUTECH</div>
                                            <p>A mock web page design for a web solution services that provides web design services. </p>
                                            <a href="https://www.behance.net/gallery/74494377/EUTech-Mock-Website">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={4}>
                                <div className="project">
                                    <div className="project-bg-5" />
                                    <div className="project-desc">
                                        <div className="project-content">
                                            <div className="project-name">GFY</div>
                                            <p>A mock web page design for companies that crowd funds startups companies.</p>
                                            <a href="https://www.behance.net/gallery/67766315/GFY-Practice-Web-Design-no15">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={12} sm={4}>
                                <div className="project">
                                    <div className="project-bg-6" />
                                    <div className="project-desc">
                                        <div className="project-content">
                                            <div className="project-name">BUILDT</div>
                                            <p>A mock website for a construction company that provides building and demolition services.</p>
                                            <a href="https://www.behance.net/gallery/67855769/Web-Design-Practice-no-16">View Project</a>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Grid>
            </div>
        );
    }
}

export default Projects;