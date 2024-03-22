import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';

export default function EstagioLogo() {
  return (
    <div
      className={`${lusitana.className} sm:ml-7 flex flex-row items-center leading-none text-white`}
    >
      <GlobeAltIcon className="h-12 w-12 rotate-[15deg]" />
      <p className="text-44px text-sm-5rem sm:text-base md:text-xl lg:text-2xl">Portal Estágio</p>
    </div>
  );
}
