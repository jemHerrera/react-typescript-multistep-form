import { ReactNode } from "react"

type FormWrapperProps = {
    title: string
    children: ReactNode
}
export function FormWrapper({title, children}: FormWrapperProps){
    return (
        <>
            <h2 style={{textAlign: "center", margin: 0, marginBottom: "2rem"}}>{title}</h2>
            <div style={{ 
                display: "grid", 
                justifyContent: "flex-start", 
                gridTemplateColumns: "auto minmax(auto, 400px)",
                gap: "1rem .5rem" }}
            >
                {children}
            </div>
        </>
    )
}