import { FaLinkedin, FaGithub, FaInstagram, FaWhatsapp } from 'react-icons/fa';

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "linkedin", icon: <FaLinkedin />, url: "https://www.linkedin.com/in/johannfurtado/" },
    { name: "github", icon: <FaGithub />, url: "https://github.com/johannfurtado" },
    { name: "instagram", icon: <FaInstagram />, url: "https://www.instagram.com/johannfurtado/" },
    { name: "whatsapp", icon: <FaWhatsapp />, url: "https://api.whatsapp.com/send?phone=5562982388893&text=Ol%C3%A1%2C%20Johann%20Furtado!"}
];

const SocialNetworks = () => {
    return (
        <section id='social-networks'>
            {socialNetworks.map((network) => (
                <a href={network.url} className='social-btn' id={network.name} key={network.name} target="_blank" rel="noopener noreferrer">
                    {network.icon}
                </a>
            ))}
        </section>
    );
};

export default SocialNetworks;
