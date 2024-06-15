import './Rodape.css'

const Rodape = () => {
  return (<div className="footer-container">
      <div className="social-icons">
        <img src="/imagens/fb.png" alt="Ícone do Facebook"/>
        <img src="/imagens/tw.png" alt="Ícone do X(Twitter)"/>
        <img src="/imagens/ig.png" alt="Ícone do Instagram"/>
      </div>
      <div className="logo-footer">
        <img className="logo" src="/imagens/logo.png" alt="Logo do Projeto Organo"/>
      </div>
      <div className="footer-credit">
        <p>Desenvolvido por <a href="https://www.linkedin.com/in/iarley-alves-web-developer">Iarley Alves</a></p>
      </div>
    </div>)
}

export default Rodape