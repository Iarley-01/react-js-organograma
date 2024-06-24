import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Secao from './componentes/Secao';
import { v4 as uuidv4 } from 'uuid';
function App() {

  const [secoes, setSecoes] = useState([
    {
      id: uuidv4(),
      nome: 'Baixos',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Palhetas Duplas',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Trombones',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Trompas',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Trompetes',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Saxofones',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Percursão',
      cor: '#FF8A29'
    },
    {
      id: uuidv4(),
      nome: 'Flautas',
      cor: '#CF129'
    },
    {
      id: uuidv4(),
      nome: 'Clarinetes',
      cor: '#0000FF'
    }
  ]);
  
    const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kumiko Oumae',
      instrumento: 'Eufônio',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/6/68/Kumiko_Oumae.jpg',
      secao: secoes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Asuka Tanaka',
      instrumento: 'Eufônio',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/b/bb/Asuka_Tanaka.jpg',
      secao: secoes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Natsuki Nakagawa',
      instrumento: 'Eufônio',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/d/d6/Natsuki_Nakagawa.jpg',
      secao: secoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'Sapphire Kawashima',
      instrumento: 'Contrabaixo',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/f/f2/Sapphire_Kawashima.jpg',
      secao: secoes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mizore Yoroizuka',
      instrumento: 'Oboé',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/5/5e/Mizore_Yoroizuka.jpg',
      secao: secoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'Raina Kitamura',
      instrumento: 'Baixão',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/1/19/Raina_Kitamura.jpg',
      secao: secoes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mikino Oka',
      instrumento: 'Baixão',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/b/b6/Mikino_Oka.jpg',
      secao: secoes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Hideri Noguchi',
      instrumento: '1⁰ Trombone',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/2/2f/Hideri_Noguchi.jpg',
      secao: secoes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Maki Akamatsu',
      instrumento: '1⁰ Trombone',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/7/70/Maki_Akamatsu_Character_Intro.jpg',
      secao: secoes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Mei Taura',
      instrumento: '2⁰ Trombone',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/c/cc/Mei_Taura.jpg',
      secao: secoes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Shuuichi Tsukamoto',
      instrumento: '2⁰ Trombone',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/8/82/Shuuichi_Tsukamoto.jpg',
      secao: secoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'Juri Sawada',
      instrumento: '1ª Trompa',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/0/0f/Juri_Sawada.jpg',
      secao: secoes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Hiro Kahashi',
      instrumento: '2ª Trompa',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/0/02/Hiro_Kahashi1.jpg',
      secao: secoes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Michiyo Morimoto',
      instrumento: '3ª Trompa',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/a/ab/Michiyo_Morimoto_Character_Intro.jpg',
      secao: secoes[3].nome
    },
    {
      id: uuidv4(),
      nome: 'Miru Kishibe',
      instrumento: '4ª Trompa',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/5/54/Miru_Kishibe.jpg',
      secao: secoes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kaori Nakaseko',
      instrumento: '1⁰ Trompete',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/a/aa/Kaori_Nakaseko.jpg',
      secao: secoes[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Reina Kousaka',
      instrumento: '1⁰ Trompete',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/7/70/Reina_Kousaka.jpg',
      secao: secoes[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Yuuko Yoshikawa',
      instrumento: '2⁰ Trompete',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/5/50/Yuuko_Yoshikawa.jpg',
      secao: secoes[4].nome
    },
    {
      id: uuidv4(),
      nome: 'Sana Kasano',
      instrumento: '3⁰ Trompete',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/f/fe/Sana_Kasano.jpg',
      secao: secoes[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Haruka Ogasawara',
      instrumento: 'Saxofone Barítono',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/b/b1/Haruka_Ogasawara.jpg',
      secao: secoes[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kiriko Miya',
      instrumento: '1⁰ Alto Saxofone',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/f/f7/Kiriko.jpg',
      secao: secoes[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raimu Okamoto',
      instrumento: '1⁰ Alto Saxofone',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/7/7b/Raimu_Okamoto.jpg',
      secao: secoes[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Chikai Maki',
      instrumento: '2⁰ Alto Saxofone',
      imagem: 'https://static.wikia.nocookie.net/hibike-euphonium/images/e/ef/Chikai_Maki.jpg',
      secao: secoes[5].nome
    },
  ]

  const [personagens, setPersonagens] = useState(inicial)

  //const aoNovoColaboradorAdicionado = (personagem) => {
  //}
  
    function deletarColaborador(id) {
    setPersonagens(personagens.filter(personagem => personagem.id !== id));
  }

  function mudarCor(cor, id) {
    setSecoes(secoes.map(secao => {
      if(secao.id === id) {
        secao.cor = cor;
      }
      return secao;
    }));
  }

  function cadastrarSecao({ nome, cor }) {
    setSecoes([...secoes, { nome, cor, id: uuidv4()}])
  }

  function resolverFavorito(id) {
    setPersonagens(personagens.map(personagem => {
      if(personagem.id === id) personagem.favorito = !personagem.favorito;
      return personagem;
    }))
  }


  return (
    <div className="App">
      <Banner />
      <Formulario aoCriarSecao={cadastrarSecao} secoes={secoes.map(secao => secao.nome)} aoCadastrar={personagem => setPersonagens([...personagens, personagem])} />
        {secoes.map((secao, indice) => <Secao mudarCor={mudarCor} key={indice} secao={secao} personagens={personagens.filter(personagem => personagem.secao === secao.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}

    </div>
  );
}

export default App;
