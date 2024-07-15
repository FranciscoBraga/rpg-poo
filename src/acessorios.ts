export class Acessorio{

    private readonly nome: string // nome do acessoria
    private readonly tipo: string // brinco, corrente, amuleto, anel, percing
    private readonly metal: string // ouro, prata,bronze,latão, ferro
    private readonly poder: string //fogo, gelo, ar, terra, aumento de força....
    private  nivel: number // vai até 100
    private readonly requisitoNivel : number // requiito do personagem

    constructor(nome:string, tipo:string, metal:string, poder:string, requisitoNivel:number){
        this.nome = nome
        this.tipo = tipo
        this.metal = metal
        this.poder = poder
        this.nivel = 1
        this.requisitoNivel = requisitoNivel
    }

    public setNivel(nivel:number):void {
        this.nivel += nivel
     }

    public getNivel():number{
       return this.nivel
     }

}
