import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

import './Personagem.css'

const Personagem = ({ corDeFundo, personagem, aoDeletar, aoFavoritar }) => {
    function favoritar() {
      aoFavoritar(personagem.id)
    }
    
    const propsFavorito = {
      size: 25,
      onClick: favoritar
    }
  
    return (<div className='personagem'>
        <AiFillCloseCircle size={25} className='deletar' onClick={() => aoDeletar(personagem.id)}/>
        <div className='cabecalho' style={{ backgroundColor: corDeFundo }}>
            <img src={personagem.imagem} alt={personagem.nome}/>
        </div>
        <div className='rodape'>
            <h4>{personagem.nome}</h4>
            <h5>{personagem.cargo}</h5>
            <div className='favoritar'>
              {personagem.favorito 
              ? <AiFillHeart color='#ff0000' {...propsFavorito}/> 
              : <AiOutlineHeart {...propsFavorito}/>}
            </div>
        </div>
    </div>)
}

export default Personagem