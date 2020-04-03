const express = require("express");
const nunjuncks = require('nunjucks');


const server = express();

const ideas = [
    {
        img: "https://image.flaticon.com/icons/svg/2729/2729007.svg",
        title: "Cursos de Programacao",
        category: "Estudos",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729005.svg",
        title: "Exercicios",
        category: "Saude",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        title: "Meditacao",
        category: "Mentalidade",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"https://rocketseat.com.br"
    },

    {
        img: "https://image.flaticon.com/icons/svg/2729/2729032.svg",
        title: "Karaoke",
        category: "Diversao em Familia",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        url:"https://rocketseat.com.br"
    },

]

nunjuncks.configure("views", {
    express: server,
    noCache: true,
    
});
server.use(express.static("public"));


server.get("/", function(req, res){
    const reversedIdeas = [...ideas].reverse();

    let lastIdeas = [];
  
    for(let idea of reversedIdeas){
        if(lastIdeas.length < 2 ){
            lastIdeas.push(idea);
        }        
    }


    return res.render("index.html", { ideas: lastIdeas });
})

server.get("/ideias", function(req, res){
    const reversedIdeas = [...ideas].reverse();

    return res.render("ideias.html", { ideas: reversedIdeas});
})


server.listen(3000);
