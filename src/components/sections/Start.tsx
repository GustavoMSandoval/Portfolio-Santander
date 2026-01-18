export default function StartSection() {
  return (
    <section id="inicio">
        <div className="section-container flex justify-start items-center h-full">
            <div className="flex flex-col">
                <h2 className="uppercase text-5xl text-white font-bold">
                    Gustavo <br/>
                    <span className="text-primary">Moreira</span> <br/>
                    Sandoval
                </h2>
                <span className="text-secondary inline-block mt-5">Zona Sul, São Paulo, SP</span>
                <p className="inline-block my-6 w-fit text-white font-medium">Estudante de <span className="text-primary">Ciências da Computação</span> <br/> em busca de oportunidade no <span className="text-primary">Santander.</span></p>
                <a href="#contato" className="btn-primary">Contato</a>
            </div>
        </div>
    </section>
  )
}
