import PortalEstagioLogo from './components/PortalEstagioLogo';
import SearchBox from './components/SearchBox';
import Button from './components/Button';
import Menu from './components/Menu';
export default function Page() {
  return (
    <div className='bg-white flex flex-col h-screen'>
      <div className='=flex-none'> 
        <div className="flex space-x-4 mt-2 ml-2 mr-2">
          <div className='flex-none'><PortalEstagioLogo /></div>
          <div className='grow'><SearchBox /></div>
          <div className='flex-none'><Button /></div>
        </div>
      </div>
      <div className='flex-grow bg-sky-50 mt-2 ml-2 mr-2' >
      <div className="flex flex-col items-center justify-center" style={{ height: '100%' }}>
          area reservada para os menus e resultado de busca
          <Menu/>
        </div>
      </div>
      <div className='flex-none'>
        <div className='flex justify-center grow mt-2 ml-2 mr-2'>
          Portal Estágio - 2024
        </div>
      </div>
    </div>
  );
}
