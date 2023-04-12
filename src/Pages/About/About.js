import React from "react";
import styles from "./about.module.scss";
import { Container, Row } from "react-bootstrap";

const About = () => {
  return (
    <div>
      <Container className={styles.container}>
        <Row>
          <h1 className="py-3 text-center">About Us</h1>
          <p>
            A product description is the marketing copy that explains what a
            product is and why it's worth purchasing. The purpose of a product
            description is to supply customers with important information about
            the features and benefits of the product so they're compelled to buy
          </p>
          <p>
            Product management is an organizational function that guides every
            step of a product's lifecycle — from development to positioning and
            pricing — by focusing on the product and its customers first and
            foremost.
          </p>
        </Row>
      </Container>
    </div>
  );
};

export default About;
