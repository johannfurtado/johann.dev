import Avatar from "../img/johann.jpg"
import SocialNetworks from "./SocialNetworks"
import InformationContainer from "./InformationContainer"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
    return <aside id="sidebar">
        <img src={Avatar} alt="Johann Furtado" />
        <p className="title">Desenvolvedor de Software</p>
        <SocialNetworks />
        <InformationContainer />
        <a href="https://drive.google.com/file/d/11VhmERT3ZsIaMgpXGVHWozwpOOHo7C-r/view?usp=sharing" className="btn" target="_blank" rel="noopener noreferrer">Baixar Currículo</a>
    </aside>
}

export default Sidebar