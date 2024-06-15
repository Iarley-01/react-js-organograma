import { useState } from 'react'
import Botao from '../Botao'
import Campo from '../Campo'
import ListaSuspensa from '../ListaSuspensa'
import './Formulario.css'

const Formulario = ({ aoCadastrar, secoes, aoCriarSecao }) => {
  
    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [secao, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault()
        aoCadastrar({
            nome,
            cargo,
            imagem,
            secao
        })
        setNome('')
        setCargo('')
        setImagem('')
        setTime('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Campo 
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome" 
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo" 
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Digite o endereço da imagem" 
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time" 
                    itens={secoes}
                    valor={secao}
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao texto="Criar Card"/>
            </form>
                        <form className="formulario" onSubmit={(evento) => {
                evento.preventDefault()
                aoCriarSecao({ nome: nomeTime, cor: corTime })
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio={true}
                    label='Nome'
                    placeholder='Digite o nome do time'
                    valor={nomeTime}
                    aoAlterado={valor => setNomeTime(valor)}/>
                <Campo
                    obrigatorio={true}
                    label='Cor'
                    type='color'
                    placeholder='Digite sua cor'
                    valor={corTime}
                    aoAlterado={valor => setCorTime(valor)}/>
                <Botao texto='Criar Time' />
            </form>
        </section>
    )
}

export default Formulario