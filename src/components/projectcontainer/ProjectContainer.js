import React from 'react'
import { Element } from 'react-scroll'
// import Election from '../../assets/images/projectelection.png'
// import Jjmproject from '../../assets/images/projectjjmn.png'
import Project from '../project/Project';
import './ProjectContainer.css'

const ProjectContainer = () => {
    const projects =[
        {
            img:require('../../assets/images/projectelection.png'),
            title:"TAMIL NADU STATE ELECTION COMMISSION",
            desc:"The Right to Information Act, 2005 (Central Act 22 of 2005) has been enacted to provide for setting out a practical regime of the right to information for citizens to secure access to information under the Control of Public Authorities, in order to promote transparency and accountability in the working of every Public Authority.",
            link:"https://tnsec.tn.nic.in/",
        },
        {
            img:require('../../assets/images/projectjjmn.png'),
            title:"Jal Jeevan Mission",
            desc:"Jal Jeevan Mission is envisioned to provide safe and adequate drinking water through individual household tap connections by 2023 to all households in rural India",
            link:"https://jjm.tn.gov.in/",
        },
        {
            img:require('../../assets/images/projectecommerce.png'),
            title:"E-commerce ",
            desc:"E-commerce is the buying and selling of goods and services over the internet.Developed highly interactive and customized UIs using JavaScript, HTML, jQuery, Bootstrap, and CSS to improve the functionality of my web application.Created e-commerce sites integrated with payment processing using Stripe ",
            link:"https://github.com/amnipriyasowrirajan/Ecommerceproject/tree/master",
        },
        {
            img:require('../../assets/images/projectchatpost.PNG'),
            title:"Chatting Website",
            desc:"Chatting website allows you to communicate with your customers, and friends and then you can write small posts using Laravel and MySQL.Successfully installed Linux servers in virtualized environments using Docker",
            link:"https://github.com/amnipriyasowrirajan/chatappproject/tree/master",
        },
        {
            img:require('../../assets/images/modularkitchen.png'),
            title:"Modern Kitchen UI and UX",
            desc:"Developed a cutting-edge virtual kitchen interface using React.js, focusing on creating an immersive user experience. This project showcases my expertise in responsive design, interactive elements, and attention to detail in user interface and user experience design. Explore the future of kitchen simulation in a digital environment",
            link:"https://github.com/amnipriyasowrirajan/Ecommerceproject/tree/master",
        },
    ];
  return (
    <Element className="projectcontainer" id="projects">
        <h1>Projects</h1>
        <p>Here are some projects which I have done to make the lives of people easy.</p>
        <div className='projectcontainer_projects'>
            {
                projects.map((project,index)=>{
                    return (
                        <Project key={index}
                         img={project.img} 
                         title={project.title} 
                         desc={project.desc} 
                         link={project.link} 
                         />
                    );
                })
            }


        </div>
    </Element>
   
  );
}

export default ProjectContainer
