import TopNav from '@/app/ui/cadastro/topnav';

export default function BuscaLayout({
    children,}: {
        children: React.ReactNode
    }) {
        return (
        <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
            <div className="w-full flex-none md:w-20">
              <TopNav />
            </div>
            <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
        </div>
        )
    }