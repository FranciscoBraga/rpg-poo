export class Vestimenta{
    private  nome: string
    private bonusAtaque: number
    private tempoAtaque: number

    constructor(nome:string, bonusAtque:number, tempoAtaque: number){
        this.nome = nome
        this.bonusAtaque = bonusAtque
        this.tempoAtaque = tempoAtaque
    }

    public getBonusAtaque(){
        return this.bonusAtaque
    }

}
