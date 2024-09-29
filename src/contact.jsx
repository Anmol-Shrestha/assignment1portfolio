import PrimaryHeading from "../components/PrimaryHeading"
import { Link } from 'react-router-dom';

export default function Contact() {

     const handleNextStep =()=>{
          window.href="/"
     }
     return (
     <>
           <PrimaryHeading>
          Contact
      </PrimaryHeading>

      <div class="book">
                <div class="book__form">
                <form action="#" class="form">
                    

                    <div class="form__group">
                        <input class="form__input" required id="fullname" placeholder="Full Name" type="text"/>
                        <label class="form__label" for="fullname">Full Name</label>
                    </div>
                    <div class="form__group">
                        <input class="form__input" required id="email" placeholder="Email" type="email"/>
                        <label class="form__label" for="email">Email address</label>
                    </div>

                    <div class="form__group">
                        <div class="form__radio-group">
                            <input id="small" class="form__radio-input" type="radio" name="size"/>
                            <label for="small" class="form__radio-label">

                                <span class="form__radio-button"></span>
                                Ecommerce Integration
                                </label>
                        </div>
                        <div class="form__radio-group">
                            <input id="large" class="form__radio-input" type="radio" name="size"/>
                            <label for="large" class="form__radio-label">
                                <span class="form__radio-button"></span>
                               Frontend Development
                            </label>
                        </div>
                    </div>

               
                        
                       <Link  to="/">Submit</Link> 

                  
                </form>
                </div>
            </div>
     </>
     );
     }
    