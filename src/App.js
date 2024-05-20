import { useEffect, useState } from "react";
import Appbar from "./components/Appbar";
import Content from "./pages/Content";

import News from "./data/News.json"
import Author from "./data/Authors.json"

import Main from "./pages/Main";


// firebase deploy --only hosting:art-lisboa-front-end-test
function App() {

  const [data,setData] = useState({

  })

  
  const [author] = useState({
    "name": "Darwin Tumaneng",
    "role": "Logistics Digitalization Services Unit Representative",
    "place": "Metro Manila, Philippine",

  })

  const [currentView,setView] = useState(  
    {
      "id": 1,
      "author_id": 1,
      "title": "Toyota Mobility Solutions PH empowers seafood wholesaler Mida Food with digital logistics platform",
      "body": "Logistics Platform addresses limitations in Mida Food's delivery operations",
      "image_url": "assets/images/tmsph-ls-midafood.jpeg",
      "created_at": "2023-01-13 12:30:00"
  })

    useEffect(()=>{
      setData(News);
    },[data])

    const changeView = (id) =>{
      News.filter(data=>data.id === id).map(data=>{
        setView(data);

          Author.filter(data=>data.id === data.author_id).map((data,key)=>console.log(data));
        return 0;
      })
  
    }

  return (
    <div>

      <Appbar >

        <Main data={currentView} Author={author}/>
        <br/>
        <Content data={[...News]} view={currentView} read={changeView} />
      
      </Appbar>

  
    </div>
  );
}

export default App;
