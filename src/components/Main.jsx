import './Main.scss';

export default function Main() {
  return (
    <main className="Main">
      <div className="intro">
        <p>
          {`They fascinate with their powers, their charisma or their bank 
          account. 
          What superhero are you? 
          Take the time to take our personality 
          test to learn more about your superhero profile. You can then make your 
          hero fight, face to face! Put on your best costume, because now it's your turn.`}
        </p>
        <button className="button" type="button">
          QUIZ
        </button>
      </div>
      <picture className="picture">
        <img src="/justice-league-new-52.jpg" alt="Justice-League" />
      </picture>
    </main>
  );
}
