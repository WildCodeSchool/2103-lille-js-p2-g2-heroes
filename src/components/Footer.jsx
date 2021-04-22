import styled from 'styled-components';

const SShadow = styled.div`
  box-shadow: 0 50vh 0 50vh #222222;
`;

const SFooter = styled.footer`
  background-color: #222222;
  color: #555555;
  font-size: 0.7em;
  padding: 30px;
  box-shadow: 0px -6px 5px black;
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
    <SShadow>
      <SFooter>
        <SCopyright>
          <p className="description">
            The images used are not free of rights. For any request to remove an
            image that you own, please contact the following email address:
            ramdom@contact.com
          </p>
        </SCopyright>
      </SFooter>
    </SShadow>
  );
}
