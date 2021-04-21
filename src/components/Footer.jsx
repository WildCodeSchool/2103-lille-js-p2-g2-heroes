import styled from 'styled-components';

const SFooter = styled.footer`
  background-color: #222222;
  color: #555555;
  font-size: 0.7em;
  padding: 30px;
  box-shadow: 0px -5px 10px black;
  display: flex;
  justify-content: center;
`;

const SCopyright = styled.div`
  text-align: center;
  line-height: 1.5em;
  width: 30vw;
`;

export default function Footer() {
  return (
    <SFooter>
      <SCopyright>
        <p className="description">
          The images used are not free of rights. For any request to remove an
          image that you own, please contact the following email address:
          ramdom@contact.com
        </p>
      </SCopyright>
    </SFooter>
  );
}
