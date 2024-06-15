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
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      secao: secoes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      secao: secoes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '        https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      secao: secoes[0].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      secao: secoes[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      secao: secoes[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      secao: secoes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '        https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      secao: secoes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      secao: secoes[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      secao: secoes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      secao: secoes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '        https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      secao: secoes[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      secao: secoes[2].nome
    },
    {
      id: uuidv4(),
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      secao: secoes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      secao: secoes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '        https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      secao: secoes[3].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      secao: secoes[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      secao: secoes[4].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      secao: secoes[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '        https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      secao: secoes[4].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
      secao: secoes[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANA AMOASEI',
      cargo: 'Desenvolvedora de software e instrutora',
      imagem: 'https://www.alura.com.br/assets/img/lideres/juliana-amoasei.1647533644.jpeg',
      secao: secoes[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'DANIEL ARTINE',
      cargo: 'Engenheiro de Software na Stone Age',
      imagem: 'https://www.alura.com.br/assets/img/lideres/daniel-artine.1647533644.jpeg',
      secao: secoes[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME LIMA',
      cargo: 'Desenvolvedor Python e JavaScript na Alura',
      imagem: '        https://www.alura.com.br/assets/img/lideres/guilherme-lima.1647533644.jpeg',
      secao: secoes[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO SILVEIRA',
      cargo: 'Hipster e CEO da Alura',
      imagem: 'https://www.alura.com.br/assets/img/lideres/paulo-silveira.1647533644.jpeg',
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
