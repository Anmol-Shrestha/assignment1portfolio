import PrimaryHeading from "../components/PrimaryHeading"
import Paragraph from "../components/Paragraph";
import { Link } from "react-router-dom";
import profilepic from "../src/assets/MyPhoto.jpg";
export default function About() {
     return (
     <>
     <PrimaryHeading>
      About
     </PrimaryHeading>
     <div className="container">
     <Paragraph>
         &nbsp;&nbsp;&nbsp; My name is <b>Anmol Sagar Shrestha</b>. I am a student at Centennial College studying Software Engineering Technology - Artificial Intelligence
     </Paragraph>


     <div className="image-box">
          <figure>
              <img src={profilepic} alt="" />
               <figcaption></figcaption>
          </figure>
          
     </div>
     </div>
     <a className="resume" href="./assests/Resume-1.pdf" download target="_blank">Click to download my Resume</a>

    


     </>
     );
    }
    