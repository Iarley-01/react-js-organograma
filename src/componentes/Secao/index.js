import Personagem from '../Personagem'
import './Secao.css'

import hexToRgba from 'hex-to-rgba'

const Secao = ({ secao, personagens, aoDeletar, mudarCor, aoFavoritar }) => {
    const css = { backgroundColor: hexToRgba(secao.cor, '0.6') }

    return (
        (personagens.length > 0) ? <section className='secao' style={css}>
            <input onChange={evento => mudarCor(evento.target.value, secao.id)} value={secao.cor} type='color' className='input-cor' />
            <h3 style={{ borderColor: secao.cor }}>{secao.nome}</h3>
            <div className='personagens'>
                {personagens.map(personagem => 
                { return <Personagem 
                corDeFundo={secao.cor} 
                key={personagem.nome} 
                personagem={personagem} 
                nome={personagem.nome} 
                cargo={personagem.cargo} 
                imagem={personagem.imagem}
                aoDeletar={aoDeletar}
                aoFavoritar={aoFavoritar}
                /> })}
            </div>
        </section> 
        : ''
    )
}

export default Secao