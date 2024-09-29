import PrimaryHeading from "../components/PrimaryHeading";
import ProjectCard from "../components/ProjectCard";
import SeelifeImage from "../src/assets/SeelifeDesktop.webp";
import NewsImage from "../src/assets/NewsDesktop.webp";
import Bookmarklet from "../src/assets/YoutubeAd.png";
export default function Project() {
     const PORTFOLIO = [{
          projectLink:"https://seelifeproject.netlify.app/",
          projectType:"NGO",
          projectImage:SeelifeImage,
          description:"This project tested my ablity to create css layouts and animation. "
          },{
          projectLink:"https://newsdotcomproject.netlify.app/",
          projectType:"Media",
          projectImage:NewsImage,
          description:"This project was done to practice css grid and fetch API requests from new york times."
          },
          {
               projectLink:"/",
               projectType:"Bookmarklet",
               projectImage:Bookmarklet,
               description:" Practiced Javascript DOM API and coded a bookmarklet to skip youtube ads."
               }]
     return (
     <>
     <PrimaryHeading>Projects</PrimaryHeading>
     {PORTFOLIO.map(({projectLink, projectType,projectImage, description})=>(<ProjectCard link={projectLink} image={projectImage} type={projectType} description={description} />))   }

     </>
     );
     }
    