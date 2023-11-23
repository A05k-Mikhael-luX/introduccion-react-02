import { useState } from "react"

export default function PadreComponente() {
    const[mensaje, setMensaje] = useState('Hola Ana')
    return (
        <div>
            <h2>Este es el componente padre</h2>
        </div>
    )
}