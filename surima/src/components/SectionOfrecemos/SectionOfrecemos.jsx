import { Combinado } from "../Combinados/Combinado"
import { Entradas } from "../Entradas/Entradas"
import { Gohan } from "../Gohan/Gohan"

export const SectionOfrecemos = () => {
    return (
        <section>
            <h2>¿Que Ofrecemos?</h2>
            <Entradas/>
            <Combinado/>
            <Gohan/>
            
        </section>
    )
}