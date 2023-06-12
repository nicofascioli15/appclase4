import ProfileCard from "./ProfileCard";
import alexa from "./img/alexa.png"
import siri from "./img/siri.png"
import cortana from "./img/cortana.png"
import "bulma/css/bulma.css"



function App(){
   return (

      <div>

      <h1>Asistentes</h1>

      <div className="container">
          <section className="section">
          <div className="columns">
          <div className="column is-4">
              <ProfileCard titulo="Alexa" handle="@alexa88" img={alexa} />
          </div>
          <div className="column is-4">
              <ProfileCard titulo="Cortana" handle="@cortana_02" img={cortana} />
          </div>
          <div className="column is-4">
              <ProfileCard titulo="Siri" handle="@siri_99" img={siri} />
          </div>


      </div>

          </section>

      </div>
     
  </div>
   )
}


export default App; 