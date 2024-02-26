
export default function SearchForm() {
    return (
        <form>
            <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                <div className="flex flex-col">
                    <label>Buscar por empresa</label>
                    <input type="text" name="empresa" required />
                </div>
            </div>
            <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                <div className="flex flex-col">
                    <label>Buscar por regime</label>
                    <select name="ufs">
                        <option value="remoto">Remoto</option>
                        <option value="hibrido">Hibrido</option>
                        <option value="presencial">Presencial</option>
                    </select>
                </div>
            </div>     
        </form>
    )
}