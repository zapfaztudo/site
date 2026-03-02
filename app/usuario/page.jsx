export default function Usuario() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-md bg-white border border-slate-200 shadow-lg rounded-2xl px-8 py-8 space-y-6">
        <header className="text-center space-y-1">
          <h1 className="text-2xl font-semibold text-slate-900">
            Crie sua conta
          </h1>
          <p className="text-sm text-slate-500">
            Cadastre-se e seja um dos primeiros a utilizar a plataforma de Marido de Aluguel{" "}
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
