import styled from 'styled-components';

const Component = styled('header')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Links = styled('ul')`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const Header = ({ title }) => {
  const links = [
    {
      id: 1,
      name: 'Host',
      url: 'http://localhost:3000/',
    },
    {
      id: 2,
      name: 'Remote',
      url: 'http://localhost:3002/',
    },
    {
      id: 3,
      name: 'Share',
      url: 'http://localhost:3010/',
    },
  ];

  return (
    <Component>
      <nav>
        <Links>
          {links.map(link => (
            <li key={link.id} className={link.name === title ? 'active' : ''}>
              <a href={link.url}>{link.name}</a>
            </li>
          ))}
        </Links>
      </nav>
      <h1>{title}</h1>
    </Component>
  );
};
export default Header;
