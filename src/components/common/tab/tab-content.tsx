import { ReactNode } from "react";

type DataProps = {
   children:ReactNode
}


const TabContent = ({children}:DataProps) =>{
    return (
        <div className="content-container">
            {children}
        </div>
    )
}

export default TabContent;