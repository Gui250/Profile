import Profile from "./Profile";
import starwars from "../public/starwars.jpeg"
import styles from "./styles.module.css"

export default function App(){
    return(
        <div>
            <Profile 
            avatar={starwars} 
            name="Darth Vader"
            bio="Full-Stack JavaScript developer"
            email="darthvader@gmail.com"
            phone= "+5511999333300"
            gihubUrl="https://github.com"
            linkedinUrl= "https://linkedin.com"
            twitter="https://twitter.com"
            />


            
        </div>
    )
}