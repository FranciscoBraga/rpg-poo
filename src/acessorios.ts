export class Acessorio{
    private readonly tipo: string // brinco, corrente, amuleto, anel, percing
    private readonly metal: string // ouro, prata,bronze,latão, ferro
    private readonly poder: string //fogo, gelo, ar, terra, aumento de força....
    private readonly forca: number // vai até 100

    constructor(tipo:string, metal:string, poder:string){
        this.tipo = tipo
        this.metal = metal
        this.poder = poder
        this.forca = 1
    }
}

