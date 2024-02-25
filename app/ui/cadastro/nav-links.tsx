import {
  QuestionMarkCircleIcon,
  MagnifyingGlassIcon,
  HomeIcon,
  DocumentDuplicateIcon,
} from '@heroicons/react/24/outline';

const links = [
  { name: 'Home', href: '/', icon: HomeIcon },
  { name: 'Cadastro', href: '/cadastro', icon: DocumentDuplicateIcon, },
  { name: 'Busca', href: '/busca', icon: MagnifyingGlassIcon },
  { name: 'Sobre', href: '/sobre', icon: QuestionMarkCircleIcon },
];

export default function NavLinks() {
  return (
    <div>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <a
            key={link.name}
            href={link.href}
            className="flex items-center gap-2 h-[48px] grow rounded-md p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600"
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </a>
        );
      })}
    </div>
  );
}
