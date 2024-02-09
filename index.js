const perguntas = [
    {
      pergunta: "Qual é a capital de Angola?",
      respostas: [
        " Luena",
        "Benguela",
        "Luanda",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é considerado o primeiro Presidente de Angola?",
      respostas: [
        "Agostinho Neto",
        "José Eduardo dos Santos",
        "João Lourenço",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o prato tradicional angolano feito à base de milho?",
      respostas: [
        "Muamba",
        "Funje",
        "Mufete",
      ],
      correta: 1
    },
    {
      pergunta: "Em que ano Angola conquistou a independência de Portugal?",
      respostas: [
        "1975",
        "1980",
        "1990",
      ],
      correta: 0
    },
    {
      pergunta: "Quem é o autor da famosa música 'Mona Ki Ngi Xica'?",
      respostas: [
        "Bonga",
        "Waldemar Bastos",
        "Teta Lando",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o nome do maior parque nacional de Angola, conhecido pela diversidade de fauna?",
      respostas: [
        "Parque Nacional da Quiçama",
        "Parque Nacional do Bicuar",
        "Parque Nacional do Iona",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o idioma oficial de Angola?",
      respostas: [
        "Francês",
        "Inglês",
        "Português",
      ],
      correta: 2
    },
    {
      pergunta: "Quem é o famoso pintor angolano conhecido por retratar a vida rural e as tradições do povo angolano?",
      respostas: [
        "Yonamine",
        "António Ole",
        "Gisio Tavares",
      ],
      correta: 1
    },
    {
      pergunta: "Em que ano Angola sediou a Copa Africana das Nações (CAN)?",
      respostas: [
        "2002",
        "2010",
        "2019",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a dança tradicional angolana marcada pelos movimentos sensuais dos quadris e foi popularizada internacionalmente?",
      respostas: [
        "Kizomba",
        "Semba",
        "Rebita",
      ],
      correta: 0
    },
  ];
  
  
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set()
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#Acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  // loop ou laço de repetição
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
    
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (Event) => {
       const estaCorreta = event.target.value == item.correta 
  
       corretas.delete(item)
       if(estaCorreta) {
         corretas.add(item)
       }
       mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
      }
  
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    
    quizItem.querySelector('dl dt').remove()
  
  
  
  // coloca a pergunta na tela
  quiz.appendChild(quizItem)
  }
  
  