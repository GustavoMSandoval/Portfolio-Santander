export default function AboutSection() {
  return (
    <section id="sobre">
        <div className="section-container flex flex-col items-center gap-12">
            <h2 className="section-title">
                sobre mim
            </h2>
            <div className="flex flex-col gap-5">
                  <p className="text-center font-bold">
                    Olá! Me chamo Gustavo, e sou um desenvolvedor movido pelo desafio de transformar linhas de código em soluções de alto impacto.
                  </p>
                  <div className="flex flex-col gap-5">
                    <p className="text-center">
                        Acredito que a tecnologia só cumpre seu papel quando gera valor real. Por isso, minha atuação é guiada por três pilares fundamentais <br/> que venho aplicando em meus projetos recentes:
                    </p>
                      <div className="flex flex-col items-center w-3xl mx-auto  md:my-6">
                        <ul className="about-list ">
                                <li>
                                    <p><span className="font-bold">Foco em Resultados:</span> Entrega de soluções que impactam diretamente o bottom line, resultando em redução de custos operacionais e otimização de recursos.</p>
                                </li>
                                <li>
                                    <p><span className="font-bold">Performance e Escalabilidade:</span> Desenvolvimento de sistemas resilientes, garantindo que a tecnologia acompanhe o crescimento do negócio sem perder eficiência.</p>
                                </li>
                                <li>
                                    <p><span className="font-bold">Experiência do Usuário:</span> Criar ferramentas que não apenas funcionem, mas que facilitem a vida de quem as utiliza.</p>
                                </li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4 mx-auto w-4xl">
                    <h3 className="section-subtitle">Por que o Santander?</h3>
                    <div className="text-center flex flex-col gap-4">
                        <p>Minha sede de conhecimento e minha atenção rigorosa aos detalhes encontram eco na cultura de excelência do Santander. Vejo no banco o ambiente ideal para quem deseja inovar com responsabilidade, buscando sempre a melhoria contínua.</p>
                        <p>Meu objetivo é alinhar minha dedicação técnica aos objetivos estratégicos da instituição, ajudando a construir o futuro dos serviços financeiros.</p>
                    </div>
                </div>
                <div className="mx-auto">
                    <ul className="technology-list flex flex-wrap gap-2">
                        <li className="technology-list-item">UI/UX</li>
                        <li className="technology-list-item">HTML5</li>
                        <li className="technology-list-item">CSS3</li>
                        <li className="technology-list-item">JavaScript</li>
                        <li className="technology-list-item">ReactJS</li>
                        <li className="technology-list-item">JAVA</li>
                        <li className="technology-list-item">Spring Boot</li>
                        <li className="technology-list-item">MySQL</li>
                        <li className="technology-list-item">Git</li>
                        <li className="technology-list-item">Github</li>
                        <li className="technology-list-item">AWS</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}
