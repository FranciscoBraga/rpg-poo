import { Personagem } from "./personagem"
import { Vestimenta } from "./vestimenta"
export class Monstro extends Personagem{

    private qtaBraco: number
    private qtaPerna : number
    protected emoji = '\u{1F9DF}'

   constructor(
       nome: string,
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
       vida:number,
       qtaBraco: number,
       qtaPerna:number,
       vestimenta: Vestimenta){
           super(
              nome,
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
    this.qtaBraco = qtaBraco
    this.qtaPerna = qtaPerna
}

 public setQtaBraco(qta:number): void{
        this.qtaBraco = qta
 }

 public getQtaBraco(): number{
    return this.qtaBraco
}

 correr(): void {
     console.log(this.nome,"estou correndo")
 }

 getEmoji():void{
    console.log(this.emoji)
   }

}
