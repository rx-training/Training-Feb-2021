import React from "react";
import { Container, Spinner } from "react-bootstrap";

export default function Loading() {
  return (
    <Container>
      <Spinner className="m-auto " animation="grow" size="sm" />
    </Container>
  );
}
