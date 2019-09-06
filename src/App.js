import React from 'react';
import './App.css';
import Twit from './components/Twit/Twit';

export const server = "http://localhost:1337";

function App() {

  const [twits, setTwits] = React.useState([]); // donde twits es la variable, setTwits es el método para actualizar y React.useState recibe el valor inical de la variable a la vez que le avisa a react que debe actualizarse

  React.useEffect (()=>{
    getTwits();
  }, []);

  const getTwits = () => {

    

    fetch(server + '/twits')
    .then((response) => {
      return response.json();
    })
    .then((info) => {
    console.log(info);
    setTwits(info);
    })
  }



  return (
    <div className="App">

      {twits.map ((item)=>{
        return <Twit key={item.id} text= {item.texto} background={item.background} media={item.media}/>
      })}
     
     



    </div>
  );
}

export default App;
