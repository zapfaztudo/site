export default function Profissional() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 shadow-lg rounded-2xl px-8 py-8 space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-2xl font-semibold text-slate-900">
            Crie sua conta
          </h1>
          <p className="text-sm text-slate-500">
            Cadastre-se e ofereça serviços para mais clientes, utilizando a plataforma{" "}
            <span className="font-semibold text-[#1a574f]">ZapFazTudo</span>.
          </p>
        </header>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Nome Completo
            </label>
            <input
              type="text"
              placeholder="Seu nome completo"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              E-mail
            </label>
            <input
              type="email"
              placeholder="Seu melhor e-mail"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Telefone
            </label>
            <input
              type="tel"
              placeholder="(00) 00000-0000"
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">
              Profissão principal
            </label>
            <select
              defaultValue=""
              className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 bg-white focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
            >
              <option value="" disabled>
                Selecione sua profissão
              </option>

              {/* Gerais / faz-tudo */}
              <option value="faz-tudo">Faz-tudo / Marido de aluguel</option>
              <option value="manutencao-residencial">
                Manutenção residencial geral
              </option>

              {/* Hidráulica */}
              <option value="encanador">Encanador</option>
              <option value="bombeiro-hidraulico">Bombeiro hidráulico</option>
              <option value="desentupidor">Desentupidor</option>

              {/* Elétrica */}
              <option value="eletricista-residencial">Eletricista residencial</option>
              <option value="eletricista-predial">Eletricista predial</option>

              {/* Pintura e acabamento */}
              <option value="pintor">Pintor</option>
              <option value="pintor-texturizador">Pintor texturizador</option>
              <option value="gesseiro">Gesseiro</option>
              <option value="drywall">Instalador de drywall</option>

              {/* Alvenaria / reformas */}
              <option value="pedreiro">Pedreiro</option>
              <option value="azulejista">Azulejista / assentador de pisos</option>
              <option value="rejuntador">Serviços de rejunte e recuperação</option>

              {/* Madeira e metal */}
              <option value="marceneiro">Marceneiro</option>
              <option value="montador-moveis">Montador de móveis</option>
              <option value="serralheiro">Serralheiro</option>
              <option value="soldador">Soldador</option>

              {/* Portas, janelas, vidros */}
              <option value="vidraceiro">Vidraceiro</option>
              <option value="instalador-esquadrias">
                Instalador de portas e janelas
              </option>
              <option value="chaveiro">Chaveiro</option>

              {/* Climatização e refrigeração */}
              <option value="ar-condicionado">
                Instalação e manutenção de ar-condicionado
              </option>
              <option value="refrigeracao">Técnico em refrigeração</option>
              <option value="exaustor-ventilacao">
                Instalação de exaustores e ventilação
              </option>

              {/* Telhados e áreas externas */}
              <option value="telhadista">Telhadista</option>
              <option value="calheiro">Calheiro / calhas e rufos</option>
              <option value="impermeabilizacao">Impermeabilização</option>

              {/* Jardim e área externa */}
              <option value="jardineiro">Jardineiro</option>
              <option value="paisagista">Paisagista</option>
              <option value="piscineiro">Piscineiro / manutenção de piscinas</option>

              {/* Limpeza e dedetização */}
              <option value="limpeza-pos-obra">Limpeza pós-obra</option>
              <option value="limpeza-ambiental">Limpeza e higienização geral</option>
              <option value="dedetizador">Dedetizador / controle de pragas</option>

              {/* Tecnologia / TV / internet */}
              <option value="instalador-tv-internet">
                Instalador de TV, internet e cabeamento
              </option>
              <option value="antenas">Instalador de antenas</option>
              <option value="tecnico-informatica">Técnico em informática</option>
              <option value="cftv-alarme">
                Instalação de câmeras e alarmes
              </option>

              {/* Portões e automação */}
              <option value="portao-automatico">
                Instalação e manutenção de portões automáticos
              </option>
              <option value="automacao-residencial">
                Automação residencial básica
              </option>

              {/* Outros */}
              <option value="decorador">Instalador de cortinas e persianas</option>
              <option value="instalador-suportes">
                Instalação de suportes (TV, nichos, prateleiras)
              </option>
              <option value="outros">Outros serviços gerais</option>
            </select>
          </div>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Senha
              </label>
              <input
                type="password"
                placeholder="Crie uma senha"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">
                Repita sua Senha
              </label>
              <input
                type="password"
                placeholder="Repita a senha"
                className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 focus:border-emerald-700 focus:ring-2 focus:ring-emerald-700 focus:outline-none"
              />
            </div>
          </div>

          <p className="text-xs text-slate-500 mt-1">
            Ao cadastrar-se, você concorda com os {" "}
            <a
              href="termos" className="font-bold text-[#1a574f]">termos de uso</a>.
          </p>

          <button
            type="submit"
            className="mt-2 w-full rounded-md bg-[#1a574f] px-4 py-2.5 text-sm font-semibold text-white hover:bg-emerald-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-700 focus:ring-offset-1"
          >
            Cadastrar
          </button>
        </form>
      </div>
    </main>
  );
}
