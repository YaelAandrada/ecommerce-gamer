function AuthLayout({ children }) {
  return (
<div className="min-h-screen bg-[url('/public/pacman.webp')] bg-cover bg-center bg-no-repeat flex items-center justify-center px-4 py-12 font-gamer">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8 bg-[#111827]/90 border-2 border-cyan-400 shadow-[0_0_40px_#00ffff] rounded-xl p-8">
        {children}
      </div>
    </div>
  );
}

export default AuthLayout;