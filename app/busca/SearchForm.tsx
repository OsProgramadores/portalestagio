export default function SearchForm() {
    return (
        <form>
            <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                <div className="flex flex-col">
                    <label>Buscar por empresa<span className="text-red-500">*</span></label>
                    <input type="text" name="empresa" required />
                </div>
            </div>
            <div className="flex flex-col gap-6 rounded-lg bg-gray-50 px-6 py-10 md:px-20">
                <div className="flex flex-col">
                    <label>Buscar por estado<span className="text-red-500">*</span></label>
                    <input type="text"></input>"
                </div>
            </div>     
        </form>
    )
}