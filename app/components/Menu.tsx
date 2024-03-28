import MenuHeader from "./MenuHeader";
import { MagnifyingGlassCircleIcon,
ArrowDownCircleIcon,
ArrowDownTrayIcon,
Bars2Icon,
CameraIcon,
CheckCircleIcon } from "@heroicons/react/24/outline";
interface Prop {
    side: string
}

const headerTitleRight = "HEADER TITLE RIGHT"
const headerTitleLeft = "HEADER TITLE LEFT"
const headerSubRight = "HEADER SUB RIGHT"
const headerSubLeft = "HEADER SUB LEFT"


export default function Menu (props : Prop) {
    let headerTitleToDisplay: string | undefined = undefined;
    let headerSubToDisplay :string | undefined = undefined;
    let menuItems: React.ReactElement | undefined = undefined;

    if (props.side === 'right') {
        headerTitleToDisplay = headerTitleRight;
        headerSubToDisplay = headerSubRight;
        menuItems = 
            <div>
                <div className="flex gap-2 border-2 border-slate-300 border-t-0 border-l-0 border-r-0 mb-2">
                    <div className="w-5">
                    <MagnifyingGlassCircleIcon/>
                    </div>
                    <div>
                        <a href="/">l text 1</a>
                    </div>
                </div>
                    <div className="flex gap-2 border-2 border-slate-300 border-t-0 border-l-0 border-r-0 mb-2">
                        <div className="w-5">
                            <ArrowDownTrayIcon/>
                        </div>
                        <div>
                            <a href="/">l text 2</a>
                        </div>
                    </div>
                <div>
                    <div className="flex gap-2 border-2 border-slate-300 border-t-0 border-l-0 border-r-0 mb-2">
                        <div className="w-5">
                            <Bars2Icon/>
                        </div>
                        <div>
                            <a href="/">l text 2</a>
                        </div>
                    </div>
                </div>
            </div>
        
    } 
    if (props.side === 'left') {
        headerTitleToDisplay = headerTitleLeft;
        headerSubToDisplay = headerSubLeft;
        menuItems = 
            <div>
                <div className="flex gap-2 border-2 border-slate-300 border-t-0 border-l-0 border-r-0 mb-2">
                    <div className="w-5">
                    <CameraIcon/>
                    </div>
                    <div>
                        <a href="/">r text 1</a>
                    </div>
                </div>
                    <div className="flex gap-2 border-2 border-slate-300 border-t-0 border-l-0 border-r-0 mb-2">
                        <div className="w-5">
                            <ArrowDownCircleIcon/>
                        </div>
                        <div>
                            <a href="/">r text 2</a>
                        </div>
                    </div>
                <div>
                    <div className="flex gap-2 border-2 border-slate-300 border-t-0 border-l-0 border-r-0 mb-2">
                        <div className="w-5">
                            <CheckCircleIcon/>
                        </div>
                        <div>
                            <a href="/">r text 2</a>
                        </div>
                    </div>
                </div>
            </div>
        
    }

    return (
        <div className="flex flex-col bg-white p-2 rounded-md mt-4 w-30">
            <MenuHeader headerTitle={headerTitleToDisplay} headerSub={headerSubToDisplay}/>
            <div className="flex flex-col items-start">
                {menuItems}
            </div>          
        </div>
    )
}