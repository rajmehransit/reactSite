import React from "react";
import Header from "./Header";
import Footer from "./footer";
import Note  from "./Note";



function App(){                         
    return <div>          

    <Header />  
    <Note name="Raj Mehra"
    
     img="https://t3.ftcdn.net/jpg/02/52/42/46/360_F_252424647_xCMdmXLeu0ve0HeoPwDbT7PQUOetqh9e.jpg"
     href="https://www.instagram.com/raj__jii/ "
     href2="https://github.com/rajmehransit/cv"
     />
    <Footer />
    </div>
}

export default App;