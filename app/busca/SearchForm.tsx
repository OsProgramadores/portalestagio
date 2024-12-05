import { useId } from 'react';


export default function SearchForm() {
    const formId = useId();
    return (
        <form>
            <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                <div className="flex flex-col">
                    <label htmlFor={formId + '-buscaEmpresa'}>Buscar por empresa</label>
                    <input id={formId + '-buscaEmpresa'} type="text" name="empresa" required />
                </div>
            </div>
            <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                <div className="flex flex-col">
                    <label htmlFor={formId + '-buscaRegime'}>Buscar por regime</label>
                    <select id={formId + '-buscaRegime'} name="ufs">
                        <option value="remoto">Remoto</option>
                        <option value="hibrido">Hibrido</option>
                        <option value="presencial">Presencial</option>
                    </select>
                </div>
            </div>     
        </form>
    )
}
