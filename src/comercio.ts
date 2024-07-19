import { Acessorio } from "./acessorios"
import { Vestimenta } from "./vestimenta"
import { Armadura } from "./armadura"
import { Arma } from "./arma"


export class Comercio{
    private  nome: string
    private  acessorios: Acessorio[] = []
    private  vestimenta: Vestimenta[] = []
    private  armadura: Armadura[] =[]
    private  arma: Arma = []


    constructor(nome:string){
        this.nome = nome
    }
}
