// @flow 
import React from 'react';
import { Container, Row, Col, Input } from 'reactstrap';

import HeaderRightAction from './components/HeaderRightAction';
import SearchInput from '../search_input/SearchInput';

import styles from './Header.module.css'



const Header = () => {
    return (
        <>
            <Container fluid={true} className={styles.headerWrapper}>
                <Row className={styles.headerRow}>
                    <Col sm={{size: 1}}>
                        <span>Chaos market</span>
                    </Col>
                    <Col sm={{size: 2}}>
                        <select className={styles.selectBox}>
                            <option>1</option>
                            <option>2</option>
                        </select>
                    </Col>
                    <Col sm={{size: 6}}>
                        <SearchInput/>
                    </Col>
                    <Col sm={{size: 2}}></Col>
                    <Col sm={{size: 1}}>
                        <HeaderRightAction/>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Header;