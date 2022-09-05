import Content from "./Content";
import Header from "./Header";
import LateralMenu from "./LateralMenu";

interface LayoutProps {
    title: string;
    subtitle: string;
    children?: any;
}

export default function Layout({title, subtitle, children}: LayoutProps) {
    return (
        <div className="
            dark flex h-screen w-screen
        ">
            <LateralMenu />
            <div className="
                flex flex-col w-full p-7
                bg-gray-200 dark:bg-gray-800
            ">
                <Header title={title} subtitle={subtitle}/>
                <Content>
                    {children}
                </Content>
            </div>
        </div>
    )
}