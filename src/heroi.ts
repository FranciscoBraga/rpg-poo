
import { Personagem } from "./personagem";
import { Vestimenta } from "./vestimenta";

export class Heroi extends Personagem{

    private classe: string
    private profissao: string
    protected emoji = '\u{1F900}'

    constructor(nome: string,
               raca:string,
                genero:string,
                altura: number,
                cor: string,
                categoria: string,
                elementos: string,
                velocidade: number,
                ataque: number,
                forca: number,
                defesa: number,
                tipoAtaque: string,
                alvoAtaque: string,
                precisao: number,
                alcance: string,
                afinidade: string,
                idade: number,
                evolucao: boolean,
                tipoMovimento: string,
                classe:string,
                profissao:string,
                vida:number,
                vestimenta:Vestimenta){
        super(nome,
            raca,
            genero,
            altura,
            cor,
            categoria,
            elementos,
            velocidade,
            ataque,
            forca,
            defesa,
            tipoAtaque,
            alvoAtaque,
            precisao,
            alcance,
            afinidade,
            idade,
            evolucao,
            tipoMovimento,
            vida,
            vestimenta)
        this.classe = classe
        this.profissao = profissao
 }

   getEmoji():void{
    console.log(this.emoji)
   }

   correr(): void {
       console.log(this.nome," estou correndo")
   }



}
