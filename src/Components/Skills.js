import React from "react";
import { Container,Row,Col } from "react-bootstrap";
import Card from 'react-bootstrap/card';
import python from '../Assets/python.jpeg';
import html from '../Assets/html.jpeg';
import css from '../Assets/css.jpeg';
import js from '../Assets/js.jpeg';
import java from '../Assets/java.jpeg';
import bs from '../Assets/bs.jpeg';
import react from '../Assets/react.jpeg';
import node from '../Assets/node.jpeg';
import sql from '../Assets/sql.jpeg';
import mongo from '../Assets/mongo.jpeg';
import ps from '../Assets/ps.jpeg';
import dsa from '../Assets/dsa.jpeg';


export default function Skills(){
    return(
        <Container  className='skills' id='skills'>
            <Row><h2>Programming Languages</h2>
                <Col>
                <Card className="carditem" ><Card.Title style={{textAlign:'center'}}>Python</Card.Title><hr/ >
                <Card.Body className="card-body"><img src={python} alt="python" className="skill" /></Card.Body> 
                </Card> </Col><Col> 
                <Card className="carditem" ><Card.Title style={{textAlign:'center'}}>Java</Card.Title><hr/ >
                <Card.Body className="card-body"><img src={java} alt="java"  className="skill" /></Card.Body> 
                </Card> </Col> 
                <Col>
                <Card className="carditem"><Card.Title style={{textAlign:'center'}}>JavaScript</Card.Title><hr/>
                <Card.Body><img src={js} alt="js" className="skill" /></Card.Body></Card>              
                </Col></Row><hr/>
                <Row> <h2>Web Technologies</h2>
                <Col>
                <Card className="carditem"><Card.Title style={{textAlign:'center'}}>HTML5</Card.Title><hr/>
                <Card.Body className="card-body" ><img src={html} alt="html" className="skill" /></Card.Body></Card>              
                </Col><Col>
                <Card className="carditem"><Card.Title style={{textAlign:'center'}}>CSS</Card.Title><hr/>
                <Card.Body className="card-body"><img src={css} alt="css" className="skill" /></Card.Body></Card>              
                </Col>
                
                <Col>
                <Card className="carditem"><Card.Title style={{textAlign:'center'}}>Bootstrap</Card.Title><hr/>
                <Card.Body><img src={bs} alt="bs" className="skill" /></Card.Body></Card>              
                </Col></Row>
                <Row>
                <Col md={4}>
                <Card className="carditem"><Card.Title style={{textAlign:'center' }}>React.js</Card.Title><hr/>
                <Card.Body><img src={react} alt="react" className="skill" style={{width:'220px'}} /></Card.Body></Card>              
                </Col>
                <Col>
                <Card className="carditem"><Card.Title style={{textAlign:'center' }}>Node.js</Card.Title><hr/>
                <Card.Body><img src={node} alt="node" className="skill" style={{width:'220px'}} /></Card.Body></Card>              
                </Col>
            </Row><hr/>
            <Row> <h2>Databases</h2>
            <Col md={4}>
                <Card className="carditem"><Card.Title style={{textAlign:'center' }}>SQL</Card.Title><hr/>
                <Card.Body><img src={sql} alt="sql" className="skill"  /></Card.Body></Card>              
                </Col>
                <Col>
                <Card className="carditem"><Card.Title style={{textAlign:'center' }}>MongoDB</Card.Title><hr/>
                <Card.Body><img src={mongo} alt="mongo" className="skill"  /></Card.Body></Card>              
                </Col>
            </Row><hr/>
            <Row> <h2>Computer Science Concepts</h2>
            <Col md={4}>
                <Card className="carditem" ><Card.Title style={{textAlign:'center' }}>Problem-Solving</Card.Title><hr/>
                <Card.Body><img src={ps} alt="ps" className="skill"  /></Card.Body></Card>              
                </Col>
                <Col>
                <Card className="carditem"><Card.Title style={{textAlign:'center' }}>DSA</Card.Title><hr/>
                <Card.Body><img src={dsa} alt="dsa" className="skill"  /></Card.Body></Card>              
                </Col>
            </Row>
        </Container>
    )
}