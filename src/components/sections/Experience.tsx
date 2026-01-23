export default function ExperienceSection() {
  return (
    <section id="experiencia">
      <div className="section-container flex flex-col items-start lg:items-center">
        <h2 className="section-title mb-10 lg:mb-50 reveal">
          Experiência
        </h2>
        <div className="lg:grid lg:grid-cols-3 justify-items-center items-center justify-center my-5 reveal">
          <span className="text-secondary">08/2025 - 11/2025</span>
          <div className="col-start-3">
            <h3 className="text-3xl font-bold">Desenvolvimento Web</h3>
            <span className="text-primary font-bold">PROMOFIX</span>
            <ul className="experience-list">
              <li className="experience-list-item">Criação e design de website responsivo utilizando NextJS e TailwindCSS.</li>
              <li className="experience-list-item">Melhoria de 87% no SEO do site.</li>
              <li className="experience-list-item">Formulário de contato com envio de e-mail utilizando PHP, via SMTP. </li>
              <li className="experience-list-item">Inclusão de métricas do Google Analytics e monitoramento de leads. </li>
              <li className="experience-list-item">Versionamento do código utilizando GIT.</li>
              <li className="experience-list-item">Comunicação assertiva e criação de relatórios.</li>
              <li className="experience-list-item">Conversão de imagens em formato .jpg, .png para um formato mais amigável e <br className="lg:hidden"/>responsivo .webp, para melhor performance e carregamento em pequenos dispositivos.</li>
            </ul>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 justify-items-center items-center my-5 reveal">
          <span className="text-secondary col-start-3 lg:hidden">11/2025 - 11/2025</span>
          <div>
            <h3 className="text-3xl font-bold">Manutenção Website</h3>
            <span className="text-primary font-bold">EPPOlix</span>
            <ul className="experience-list">
              <li className="experience-list-item">Manutenção de website, melhorias do código. </li>
              <li className="experience-list-item">Encontrar e consertar erros relacionados à SEO. </li>
              <li className="experience-list-item">Inclusão de PDFs informativos sobre a empresa. </li>
              <li className="experience-list-item">Inclusão de selo de comemoração de 25 anos da EPPOlix. </li>
              <li className="experience-list-item">Envio de arquivos utilizando FileZilla via protocolo FTP. </li>
            </ul>
          </div>
          <span className="text-secondary col-start-3 hidden lg:block">11/2025 - 11/2025</span>
        </div>
        <div className="lg:grid lg:grid-cols-3 justify-items-center items-center my-5 reveal">
          <span className="text-secondary">11/2025 - 01/2026</span>
          <div className="col-start-3">
            <h3 className="text-3xl font-bold">Desenvolvimento de Sistema</h3>
            <span className="text-primary font-bold">CÃO FIEL</span>
            <ul className="experience-list">
              <li className="experience-list-item">Criação e design de sistema de gerenciamento de caixa. </li>
              <li className="experience-list-item">Consulta das vendas diárias e mensais.</li>
              <li className="experience-list-item">Cadastro de nome e preço dos serviços.</li>
              <li className="experience-list-item">Redução de custos com o sistema. </li>
            </ul>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-3 justify-items-center items-center my-5 reveal">
          <span className="text-secondary col-start-3 lg:hidden">02/2024 - 05/2024</span>
          <div>
            <h3 className="text-3xl font-bold">Desenvolvimento de Software (3ºsemestre)</h3>
            <span className="text-primary font-bold">UNIP</span>
            <ul className="experience-list">
              <li className="experience-list-item">Java (NetBeans), MySQL via JDBC, Apache POI (Integração Excel).</li>
              <li className="experience-list-item">Implementação de motor de leitura e processamento de dados vindos de arquivos Excel para carga no banco de dados.</li>
              <li className="experience-list-item">Criação de dashboards de consumo e gastos para suporte à tomada de decisão.</li>
              <li className="experience-list-item">Interface intuitiva desenvolvida em Java, com módulos completos de Login e Cadastro para segurança das informações.</li>
            </ul>
          </div>
          <span className="text-secondary col-start-3 hidden lg:block">07/2024 - 10/2024</span>
        </div>
        <div className="lg:grid lg:grid-cols-3 justify-items-center items-center my-5 reveal">
          <span className="text-secondary">07/2025 - 10/2025</span>
          <div className="col-start-3">
            <h3 className="text-3xl font-bold">Desenvolvimento de Software (6ºsemestre)</h3>
            <span className="text-primary font-bold">UNIP</span>
            <ul className="experience-list">
              <li className="experience-list-item">Python (Django), SQLite, DeepFace (Computer Vision).</li>
              <li className="experience-list-item">Integração de modelos de Deep Learning para autenticação biométrica em tempo real.</li>
              <li className="experience-list-item">Sistema de níveis de acesso (Usuário, Diretor e Ministro), simulando fluxos de governança de alta segurança.</li>
              <li className="experience-list-item">Desenvolvimento em Django para gerenciamento robusto de sessões e integridade dos dados.</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
