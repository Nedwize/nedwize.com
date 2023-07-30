import Link from 'next/link'

const LINKS = [
    { name: 'Home', href: '/' },
    { name: 'Work', href: '/work' },
    { name: 'Blogs', href: '/blogs' },
    { name: 'Shelf', href: '/shelf' },
    { name: 'Contact', href: '/contact' },
]

export default function Home() {
    return (
        <>
            <nav className="fixed top-0 z-10 w-full border-slate-200 border-b">
                <div className="mx-auto px-4 md:px-0 max-w-[680px] hidden items-center py-1.5 md:flex">
                    <nav className="relative flex gap-1 ml-auto">
                        {LINKS.map((l) => (
                            <NavLink key={l.name} href={l.href}>
                                {l.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </nav>
            <main className="flex min-h-screen flex-col items-center justify-between bg-gray-50 p-24">
                <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm bg-emerald-700 lg:flex"></div>
            </main>
        </>
    )
}

const NavLink = (props) => {
    const { href, className, children } = props
    return (
        <Link
            href={href}
            className={`relative inline-block px-4 py-2 text-sm font-medium text-gray-600 leading-6 tracking-wide outline-none active:scale-95 hover:bg-zinc-100 rounded-lg ${className}`}
        >
            {children}
        </Link>
    )
}
