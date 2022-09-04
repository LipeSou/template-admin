import { IconHome, IconOut, IconSettings, IconNotification } from "../icons";
import ItemMenu from "./ItemMenu";

export default function LateralMenu(){
    return (
        <aside className={`
            flex flex-col
            bg-gray-200 text-gray-700
            dark:bg-gray-900
        `}>
            <div className={`
                flex flex-col items-center justify-center
                bg-gradient-to-r from-indigo-500 to-purple-800
                h-20 w-20
            `}>
                
            </div>
            <ul className="flex-grow">
                <ItemMenu url="/" text="Início" icon={IconHome} />
                <ItemMenu url="/settings" text="Ajustes" icon={IconSettings} />
                <ItemMenu url="/notifications" text="Notificações" icon={IconNotification} />
            </ul>
            <ul>
                <ItemMenu
                    text="Sair" icon={IconOut} 
                    /*onClick={logout}*/
                    className={`
                        text-red-600 dark:text-red-400
                        hover:bg-red-400 hover:text-white
                        dark:hover:text-white
                    `}
                />
            </ul>
        </aside>
    )
}