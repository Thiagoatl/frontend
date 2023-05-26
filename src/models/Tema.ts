import Postagem from "./Postagem";

interface Tema{
    id: number;
    descricao: string;
    postagens?: Postagem[];
}

export default Tema;