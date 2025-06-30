import './Card.css'

export function Card({children, name="default name"}) {
    
    return (
        <>
        <fieldset>
            <legend>
                {name}
            </legend>
            {children}
        </fieldset>
        </>
    )
}