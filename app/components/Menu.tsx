import MenuLinks from "./MenuLinks";
import MenuHeader from "./MenuHeader";

export default function Menu() {
    return (
        <div className='flex flex-col p-5 rounded-lg justify-center bg-white mt-2 ml-2 mr-2'>
            <MenuHeader></MenuHeader>
            <MenuLinks></MenuLinks>
        </div>
    )
}