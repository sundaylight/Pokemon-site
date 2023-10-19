//  definition of attacks for different types

let ember = {
    "name" : "Ember",
    "power": 40
  }
  let firePunch = {
    "name": "Fire Punch",
    "power": 75
  } 
  let fireSpin = {
    "name": "Fire Spin",
    "power": 35
  } 
  let fireBlast = {
    "name": "Fire Blast",
    "power": 110
  } 
  
  let fire = [ember, firePunch, fireSpin, fireBlast]
  
  let bubble = {
    "name": "Bubble",
    "power": 40
  }
  let clamp = {
    "name": "Clamp",
    "power": 35
  }
  let waterGun = {
    "name": "Water Gun",
    "power": 40
  }
  let waterFall = {
    "name": "Water Fall",
    "power": 80
  }
  
  let water = [bubble, clamp, waterGun, waterFall]
  
  let megaDrain = {
    "name": "Mega Drain",
    "power": 40
  }
  let razorLeaf = {
    "name": "Razor Leaf",
    "power": 55
  }
  let absorb = {
    "name": "Absorb",
    "power": 20
  }
  let solarBeam = {
    "name": "Solar Beam",
    "power": 120
  }
  
  let grass= [megaDrain, razorLeaf, absorb, solarBeam]
  
  let thunder = {
    "name": "Thunder",
    "power": "110"
  }
  let thunderPunch = {
    "name": "Thunder Punch",
    "power": 75
  }
  let thunderShock = {
    "name": "Thunder Shock",
    "power": 40
  }
  let thunderbolt = {
    "name": "Thunderbolt",
    "power": 90
  }
  
  let electric = [thunder, thunderPunch, thunderShock, thunderbolt]
  
  
    //a few pokemon
  let bulbasaur = {
    "number": 1,
    "name": "Bulbasaur",
    "type": [grass],
    "hp": 45,
    "attack": 49,
    "defense": 49,
    "specialAttack": 65,
    "specialDefense": 65,
    "speed": 45
  }
  
  let charizard = {
    "number": 6,
    "name": "Charizard",
    "type": fire,
    "hp": 78,
    "attack": 84,
    "defense": 78,
    "specialAttack": 109,
    "specialDefense": 85,
    "speed": 100
  }
  
  let blastoise = {
    "number": 9,
    "name": "Blastoise",
    "type": water,
    "hp": 79,
    "attack": 83,
    "defense": 100,
    "specialAttack": 85,
    "specialDefense": 105,
    "speed": 78
  }
  
  let pikachu = {
    "number": 25,
    "name": "Pikachu",
    "type": electric,
    "hp": 35,
    "attack": 55,
    "defense": 40,
    "specialAttack": 50,
    "specialDefense": 50,
    "speed": 90
  }
  
  let pokedex = [bulbasaur, charizard, blastoise, pikachu]
  
  
  
  function chooseAPokemon() {
  
  }