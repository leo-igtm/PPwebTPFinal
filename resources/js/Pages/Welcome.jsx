import { Head, Link } from '@inertiajs/react';

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    return (
        <>
            <Head title="Inicio" />
            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 min-h-screen">
                <img
                    id="background"
                    className="absolute -left-20 top-0 max-w-[877px] opacity-5"
                    src="https://laravel.com/assets/img/welcome/background.svg"
                />
                <div className="relative flex min-h-screen flex-col items-center justify-center selection:bg-blue-500 selection:text-white">
                    <div className="relative w-full max-w-2xl px-6 lg:max-w-7xl">
                        <header className="grid grid-cols-2 items-center gap-2 py-10 lg:grid-cols-3">
                            <div className="flex lg:col-start-2 lg:justify-center">
                                <div className="flex items-center gap-2">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                                        <span className="text-white text-xl font-bold">PP</span>
                                    </div>
                                    <span className="text-2xl font-bold text-gray-800 dark:text-white">Mi Sitio</span>
                                </div>
                            </div>
                            <nav className="-mx-3 flex flex-1 justify-end">
                                {auth.user ? (
                                    <Link
                                        href={route('dashboard')}
                                        className="rounded-md px-3 py-2 text-gray-700 ring-1 ring-transparent transition hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-blue-400"
                                    >
                                        Panel
                                    </Link>
                                ) : (
                                    <>
                                        <Link
                                            href={route('login')}
                                            className="rounded-md px-3 py-2 text-gray-700 ring-1 ring-transparent transition hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus-visible:ring-blue-500 dark:text-gray-300 dark:hover:text-white dark:hover:bg-slate-700 dark:focus-visible:ring-blue-400"
                                        >
                                            Iniciar sesión
                                        </Link>
                                        <Link
                                            href={route('register')}
                                            className="rounded-md px-3 py-2 bg-blue-500 text-white ring-1 ring-transparent transition hover:bg-blue-600 focus:outline-none focus-visible:ring-blue-500 dark:bg-blue-600 dark:hover:bg-blue-700"
                                        >
                                            Registrarse
                                        </Link>
                                    </>
                                )}
                            </nav>
                        </header>

                        <main className="mt-20">
                            <div className="text-center mb-12">
                                <h1 className="text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
                                    Bienvenido a Mi Sitio
                                </h1>
                                <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                                    Aplicación moderna construida con Laravel, React e Inertia.js. 
                                    Explora las características y accede a tu panel de control.
                                </p>
                            </div>

                            <div className="grid gap-6 lg:grid-cols-3 max-w-4xl mx-auto">
                                <div className="rounded-lg bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center">
                                            <span className="text-blue-600 dark:text-blue-300 text-xl">⚡</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Rápido</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Rendimiento optimizado con Vite y React para una experiencia fluida.
                                    </p>
                                </div>

                                <div className="rounded-lg bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-indigo-100 dark:bg-indigo-900 flex items-center justify-center">
                                            <span className="text-indigo-600 dark:text-indigo-300 text-xl">🔐</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Seguro</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Autenticación integrada con Sanctum y rutas protegidas.
                                    </p>
                                </div>

                                <div className="rounded-lg bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-xl transition">
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center">
                                            <span className="text-purple-600 dark:text-purple-300 text-xl">✨</span>
                                        </div>
                                        <h3 className="text-lg font-semibold text-gray-800 dark:text-white">Moderno</h3>
                                    </div>
                                    <p className="text-gray-600 dark:text-gray-400">
                                        Diseño con Tailwind CSS y componentes React reutilizables.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-12 text-center">
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    Laravel 12 • React • Inertia.js • Tailwind CSS
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>
        </>
    );
}
