import Link from "next/link";
import { MicrophoneIcon,
     PaperAirplaneIcon,
     MagnifyingGlassIcon,
     PlusIcon } 
from "@heroicons/react/24/outline";

export default function MenuLinks() {
    return (
        <div className=''>            
            <div className="flex gap-1 flex-row hover:text-blue-500 border-solid border-2 border-l-0 border-r-0 border-t-0">
                <MagnifyingGlassIcon className="h-5 w-5 text-blue-500" />
                <Link href="/">como buscar estagio</Link>
            </div>
            <div className="mt-2 flex flex-row gap-1 hover:text-blue-500 border-solid border-2 border-l-0 border-r-0 border-t-0">
                <PlusIcon className="h-5 w-5 text-blue-500"></PlusIcon>
                <Link href="/">como postar estagio</Link>
            </div>
            <div className="mt-2 flex flex-row gap-1 hover:text-blue-500 border-solid border-2 border-l-0 border-r-0 border-t-0">
                <MicrophoneIcon className="h-5 w-5 text-blue-500"></MicrophoneIcon>
                <Link href="/">podcast</Link>
            </div>
            <div className="mt-2 flex flex-row gap-1 hover:text-blue-500">
                <PaperAirplaneIcon className="h-5 w-5 text-blue-500"></PaperAirplaneIcon>
                <Link href="/">os programadores</Link>
            </div>
        </div>
    )
}