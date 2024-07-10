
import { Personagem } from "./personagem";
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
                vida:number){
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
            vida)
        this.classe = classe
        this.profissao = profissao
 }

   getEmoji(){
    console.log(this.emoji)
   }

}
