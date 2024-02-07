import styled from 'styled-components';

const Container = styled('footer')`
  text-align: center;
  font-family: 'Paytone One', sans-serif;
  background-color: #000;
  color: #fff;
  padding: 8px;
`;

const Footer = () => <Container> &copy; Micro Frontend Projet</Container>;

export default Footer;
