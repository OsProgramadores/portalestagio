import PortalEstagioLogo from './components/PortalEstagioLogo';
import SearchBox from './components/SearchBox';
import Button from './components/Button';
export default function Page() {
  return (
    <div className="flex space-x-4 mt-2 ml-2 mr-2">
      <div className='flex-none'><PortalEstagioLogo /></div>
      <div className='grow'><SearchBox /></div>
      <div className='flex-none'><Button /></div>
    </div>
  );
}
