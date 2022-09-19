import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useSelector } from "react-redux/es/exports";

const Navbar = () => {
  const items = useSelector((state) => state.cart);
  return (
    <>
      <Container>
        <span className="logo">
          <Link to='/'>REDUX STORE</Link>
        </span>
        <div>
          <Link className="navLink" to="/">
            Home
          </Link>
          <Link className="navLink" to="/cart">
            Cart
          </Link>

          <span className="cartCount">Cart Items : {items.length}</span>
        </div>
      </Container>
    </>
  );
};

export default Navbar;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
