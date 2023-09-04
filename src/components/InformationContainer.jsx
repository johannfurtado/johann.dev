import "../styles/components/informationcontainer.sass"

import { AiOutlineMail, AiFillEnvironment } from "react-icons/ai"

const InformationContainer = () => {
  return (
    <section id="information">
      <div className="info-card">
        <AiOutlineMail id="email-icon" />
        <div>
          <h3>E-mail</h3>
          <p>johannfurtado@gmail.com</p>
        </div>
      </div>
      <div className="info-card">
        <AiFillEnvironment id="pin-icon" />
        <div>
          <h3>Localização</h3>
          <p>Goiânia / GO</p>
        </div>
      </div>
    </section>
  )
}

export default InformationContainer