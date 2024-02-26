import dynamic from 'next/dynamic';
import EstagioLogo from '@/app/ui/estagio-logo';
import BuscaLayout from '../busca/layout';
const SubmitForm = dynamic(() => import('./SubmitForm'));

export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-26">
        {<EstagioLogo />}
      </div>
      
        <div className="flex gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20"> 
          <div className="h-0 w-0 border-b-[35px] border-l-[25px] border-r-[25px] border-b-black border-l-transparent border-r-transparent"/>
          <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
            <strong>Cadastro de vagas</strong>
          </p>
        </div>
        <SubmitForm />
      
    </main>
  );
}
