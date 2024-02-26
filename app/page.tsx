import { ArrowRightIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';
import EstagioLogo from '@/app/ui/estagio-logo';
import Layout from './ui/layout';


export default function Page() {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="flex h-20 shrink-0 items-end rounded-lg bg-blue-500 p-4 md:h-26">
        {<EstagioLogo />}
      </div>
      <Layout>
        <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
          <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-2/5 md:px-20">
          <div
    className="h-0 w-0 border-b-[30px] border-l-[20px] border-r-[20px] border-b-black border-l-transparent border-r-transparent"
  />
            <p className={`text-xl text-gray-800 md:text-3xl md:leading-normal`}>
              <strong>Quer estagiar ou tem um estágio para oferecer?</strong>
            </p>
            <Link
              href="/cadastro"
              className="flex items-center gap-5 self-start rounded-lg bg-blue-500 px-9 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Cadastrar Estágio</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
            <Link
              href="/busca"
              className="flex items-center gap-5 self-start rounded-lg bg-green-500 px-10 py-3 text-sm font-medium text-white transition-colors hover:bg-blue-400 md:text-base"
            >
              <span>Procurar Estágio</span> <ArrowRightIcon className="w-5 md:w-6" />
            </Link>
          </div>
          <div className="flex p-6 md:w-3/5 md:px-28 md:py-12">
          <Image
          src="/estagio.png"
          width={300}
          height={760}
          className="hidden md:block"
          alt="Avatar do Estagiário"
        />
          </div>
        </div>
      </Layout>
    </main>
  );
}
