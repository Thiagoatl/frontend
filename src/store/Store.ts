import { createStore } from "redux"
import { reducer } from "./token/Reducer";


const store = createStore(reducer); //cria a minha loja

export default store;