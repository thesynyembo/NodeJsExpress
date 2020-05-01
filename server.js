const express=require('express');
const bodyParser = require('body-parser');

//Initialisation du serveur express
const server=express();

// analyse de l'application / x-www-form-urlencoded 
server.use(bodyParser.urlencoded({ extended: false }))
// analyse de l'application / json
server.use(bodyParser.json())


const users = [
  {
    id:1,  
    nom: 'Lisangola',
    prenom: 'Christian',
    email: '',
    poste: 'Homme de ménage',
    numeroTelephone: ['+243908888888'],
    estMarie: false,
    pays: 'RDCongo',
  },
  {
      id:2,
    nom: 'Motoba',
    prenom: 'Claude',
    email: 'claude@gmail.com',
    poste: 'Architecte infrastructures',
    numeroTelephone: ['+243818885454', '+243844457484'],
    estMarie: true,
    pays: 'Liban',
  },
  {
      id:3,
    nom: 'Nyembo',
    prenom: 'Thesy',
    email: 'thesy.nyembo@gmail.com',
    poste: 'DevOPS & Développeuse Fullstack',
    numeroTelephone: ['+2438108488888', '+243844145444'],
    estMarie: false,
    pays: 'Djibouti',
  },
  {
      id:4,
    nom: 'Gael',
    prenom: 'Mapwata',
    email: 'mapwata.gael@gmail.com',
    poste: 'Administrateur systèmes & Réseaux',
    numeroTelephone: ['+243818897188', '+243844445744'],
    estMarie: true,
    pays: 'Inde',
  },
  {
      id:5,
    nom: 'Makengo',
    prenom: 'Stanislas',
    email: 'makengo.stanislas@gmail.com',
    poste: 'Chef de projet digital',
    numeroTelephone: ['+243814428888', '+243844446734'],
    estMarie: true,
    pays: 'Algérie',
  },
  {
      id:6,
    nom: 'Ndovia',
    prenom: 'Ruth',
    email: 'ruth.ndovia@gmail.com',
    poste: 'Administrateur systèmes & Réseaux',
    numeroTelephone: ['+24381458888', '+243844434444'],
    estMarie: false,
    pays: 'RDCongo',
  },
  {
      id:7,
    nom: 'Bondjali',
    prenom: 'Chris',
    email: '',
    poste: 'Cordonier',
    numeroTelephone: ['+24390999898'],
    estMarie: true,
    pays: 'RDCongo',
  },
];

server.get('/',function(req,res){
    res.send("Bienvenu dans notre page")
});

server.get('/api/users',(req,res)=>{
    res.send(users);
});


server.get('/api/users/:id',(req,res)=>{
    const user=users.find((user)=>user.id===parseInt(req.params.id - 1));
    res.send(user);
})

// Post
server.post('/api/users',(req,res)=>{
  
  let User= req.body;
  users.push(User);
  console.log(users)
  res.send({
    index: users.length,
    User: User[users.length]
  })
})

// Delete
server.delete('/api/users/:id', (req,res)=>{
  const id=req.params.id - 1 ;
  users.splice(id, 1);
  console.log(users);
 res.sendStatus(200)
  });


//Définition du port

const PORT=5000;
server.listen(PORT,function(){
    console.log(`Le serveur écoute sur le PORT ${PORT}`);
  });