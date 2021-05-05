import styled from 'styled-components';
import { useState } from 'react';

const Article = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 2em auto;
  background-color: transparent;
  border: transparent;
  margin-top: 200px;
  @media screen and (min-width: 1180px) {
      width: 30%;

  h1 {
    display: flex;
    justify-content: center;
    padding: 10px 30px;
    color: white;
    background-color: #222222;
    font-family: 'Bebas neue', sans-serif;
    font-size: 2em;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  label {
    padding: 20px 20px;
    margin: 10px 0px 10px 0px;
    color: white;
    background-color: #222222;
    font-family: 'Bebas neue', sans-serif;
    font-size: 2em;
  }

  input {
    padding: 10px 30px;
    margin: 0 auto;
    width: 90%;
    color: #222222;
    background-color: whitesmoke;
    border-radius: 5px;
    font-family: 'Bebas neue', sans-serif;
    font-size: 1em;
  }
  textarea {
    height: 10vh;
    padding: 10px 30px;
    margin: 0 auto;
    width: 90%;
    color: #222222;
    background-color: whitesmoke;
    border-radius: 5px;
    font-family: 'Bebas neue', sans-serif;
    font-size: 1em;
  }
`;

const Abutton = styled.div`
  display: flex;
  justify-content: center;
`;

const Sbutton = styled.button`
  font-family: 'Bebas neue', sans-serif;
  color: #dedede;
  font-size: 1.7em;
  border-radius: 5px;
  height: 50px;
  width: 200px;
  background-color: #c17400;
  border: 0px;
  margin: 0 auto;
  margin-top: 25px;
  margin-bottom: 20vh;
  box-shadow: 0px 5px 10px black;
`;

const Loading = styled.div`
  font-family: 'Bebas neue', sans-serif;
  background-color: #222222;
  width: 30%;
  color: white;
  font-size: 1.8em;
`;

export default function Request() {
  const [submitting, setSubmitting] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  return (
    <>
      <Article>
        <title>Request your own SuperHero</title>
        {submitting && <Loading>Submitting Form...</Loading>}
        <form className="RequestForm" onSubmit={handleSubmit}>
          <label htmlFor="username">
            <p>LastName</p>
            <input placeholder="Parker" name="lastname" id="username" />
          </label>
          <label htmlFor="username">
            <p>FirstName</p>
            <input placeholder="Peter" name="firstname" id="username" />
          </label>
          <label htmlFor="username">
            <p>email</p>
            <input
              placeholder="peter.parker@nyc.us"
              name="email"
              id="username"
            />
          </label>
          <label htmlFor="username">
            <p>SupeHero requested</p>

            <textarea
              className="text"
              type="textarea"
              name="textValue"
              id="username"
              placeholder="Tell us what a SuperHero you would like to be!"
            />
          </label>
          <Abutton>
            <Sbutton type="submit" className="button">
              <p>SUBMIT</p>
            </Sbutton>
          </Abutton>
        </form>
      </Article>
    </>
  );
}
