// src/App.jsx

import { useState } from "react";
import './App.css'

const App = () => {

  // variables

  const [team, setTeam] = useState([])
  const [money, setMoney] = useState(100)
  const [zombieFighters, setZombieFighters] = useState([    
    {
      id: 1,
      name: 'Survivor',
      price: 12,
      strength: 6,
      agility: 4,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/0c2d6b.png',
    },
    {
      id: 2,
      name: 'Scavenger',
      price: 10,
      strength: 5,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/033a16.png',
    },
    {
      id: 3,
      name: 'Shadow',
      price: 18,
      strength: 7,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/262c36.png',
    },
    {
      id: 4,
      name: 'Tracker',
      price: 14,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/3c1e70.png',
    },
    {
      id: 5,
      name: 'Sharpshooter',
      price: 20,
      strength: 6,
      agility: 8,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/4b2900.png',
    },
    {
      id: 6,
      name: 'Medic',
      price: 15,
      strength: 5,
      agility: 7,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5a1e02.png',
    },
    {
      id: 7,
      name: 'Engineer',
      price: 16,
      strength: 6,
      agility: 5,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/5e103e.png',
    },
    {
      id: 8,
      name: 'Brawler',
      price: 11,
      strength: 8,
      agility: 3,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/67060c.png',
    },
    {
      id: 9,
      name: 'Infiltrator',
      price: 17,
      strength: 5,
      agility: 9,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/ac3220.png',
    },
    {
      id: 10,
      name: 'Leader',
      price: 22,
      strength: 7,
      agility: 6,
      img: 'https://pages.git.generalassemb.ly/modular-curriculum-all-courses/react-state-management-lab/assets/e41f26.png',
    },  
  ])
  let totalStrength = 0;
  let totalAgility = 0;




  // functions & event handlers & calculations

  function deleteZombieFighter(id){        
    const filteredZombieFighter = zombieFighters.filter((fighter)=>{
      return fighter.id !== id
    })
    setZombieFighters(filteredZombieFighter)
  }
  

  function handleRemoveFighter(id){        
    const filteredTeamMember = team.filter((member)=>{
      return member.id !== id
    })    
    const returnedMember = team.find((memb)=>{
      return memb.id === id
    })
    setTeam(filteredTeamMember)
    setZombieFighters([...zombieFighters, returnedMember])
    setMoney(money + returnedMember.price)
  }


  function handleAddfighter(obj) {
    const newFighter = {
      id: obj.id,
      name: obj.name,
      price: obj.price,
      strength: obj.strength,
      agility: obj.agility,
      img: obj.img,
    }

    if (money < newFighter.price) {    
      alert("Not enough money!")
    } else {
      setTeam([...team, newFighter])   
      deleteZombieFighter(newFighter.id)
      setMoney(money - newFighter.price)      
    }
  }

  // calculating total strength
  for (let i = 0; i < team.length; i++) {
    totalStrength = totalStrength + team[i].strength
  }

  // calculating total agility
  for (let i = 0; i < team.length; i++) {
    totalAgility = totalAgility + team[i].agility
  }

  return (
    <center>
    <>

    <center><h1>Your Team</h1></center>
    {team.length === 0 && <h2>Pick some team members!</h2>}    
    
    {team.length !== 0 && <h2>total strength: {totalStrength}</h2>}
    {team.length !== 0 && <h2>total agility: {totalAgility}</h2>}
    
    <ul>
    {team.map((teamMember)=>(         
          <>
          <li key={teamMember.id}>   
            <img src={teamMember.img} alt="an image of a zombie fighter" />         
            <h2>{teamMember.id}</h2>
            <h3>{teamMember.name}</h3>            
            <h5>strength: {teamMember.strength}</h5>
            <h5>agility: {teamMember.agility}</h5>  
            <button onClick={()=>{handleRemoveFighter(teamMember.id)}}>Remove</button>          
          </li>          
          </>  
        )
        )}
    </ul>

<br></br>
<hr></hr>
<br></br>

      <center><h1>Zombie Fighters</h1></center>
      <h2>Your Money: {money}$</h2>
      <ul>
        {zombieFighters.map((zombieFighter)=>
          <li key={zombieFighter.id}>   
            <img src={zombieFighter.img} alt="an image of a zombie fighter" />         
            <h2>{zombieFighter.id}</h2>
            <h3>{zombieFighter.name}</h3>
            <h4>price: {zombieFighter.price}$</h4>
            <h5>strength: {zombieFighter.strength}</h5>
            <h5>agility: {zombieFighter.agility}</h5>  
            <button onClick={()=>{handleAddfighter(zombieFighter)}}>Add {zombieFighter.price}$</button>          
          </li>
        )}
      </ul>
    </>
    </center>
  );
}

export default App
