import React from "react";
import { Container, } from './style'
import Reveal from 'react-reveal/Reveal';
import GenericCard from "../GenericCard";

export default function Yutuqlar() {
  return (
    <Reveal>
      <Container>
        <h1 className="title">MAKTABIMIZ YUTUQLARI</h1>
        <div className="listcard">
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
          <GenericCard/>
        </div>
      </Container>
    </Reveal>
  );
}