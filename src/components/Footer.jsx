import styled from 'styled-components';

const SFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: #222222;
  color: #555555;
  font-size: 0.5em;
  padding: 20px;
  box-shadow: 0px -6px 5px black;
  display: flex;
  justify-content: flex-end;
`;

const SCopyright = styled.div`
  text-align: right;
  line-height: 1.5em;
  width: 30vw;
  @media (max-width: 1024px) {
    width: 40vw;
  }
  @media (max-width: 768px) {
    width: 50vw;
  }
  @media (max-width: 425px) {
    width: 90vw;
  }
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
