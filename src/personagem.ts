import { Acessorio } from "./acessorios"
import { Vestimenta } from "./vestimenta"

export  abstract class Personagem{

 protected abstract emoji : string

 private vestimenta: Vestimenta

    public nome: string
    public cor: string
    public genero: string
    protected acessorios : Acessorio[] = []
    private raca:string
    private altura: number
    private categoria: string
    private elementos: string
    private velocidade: number
    private ataque: number
    private forca: number
    private defesa: number
    private tipoAtaque: string
    private alvoAtaque: string
    private precisao: number
    private alcance: string
    private afinidade: string
    private idade: number
    private evolucao: boolean
    private tipoMovimento: string
    private nivel: number
    private vida: number


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
            vestimenta: Vestimenta
    )
    {
        this.nome = nome
        this.raca = raca
        this.genero=  genero
        this.acessorios
        this.altura=altura
        this.cor= cor
        this.categoria=categoria
        this.elementos= elementos
        this.velocidade= velocidade
        this.ataque= ataque
        this.forca= forca
        this.defesa= defesa
        this.tipoAtaque= tipoAtaque
        this.alvoAtaque= alvoAtaque
        this.precisao= precisao
        this.alcance= alcance
        this.afinidade= afinidade
        this.idade= idade
        this.evolucao= evolucao
        this.tipoMovimento= tipoMovimento
        this.nivel = 1
        this.vida = vida
        this.vestimenta = vestimenta
    }

    public equipar(vestimenta: Vestimenta):void{
        this.vestimenta = vestimenta
    }

    public getAcessorios():void{

        let contador = 0
        for(let item of  this.acessorios){
            console.log("Quais acessorios",item)
            contador ++
        }
        console.log("Quantidade de Acessório:",contador)
    }

    public setAcessorios(acessorios : Acessorio):void{
        this.acessorios.push(acessorios)
    }

    public removeAcessorios(): Acessorio | null{
        let acessorio  =  this.acessorios.pop()
        if(acessorio) return acessorio
        return null
    }

     //métodos acessores + - #
     public getNivel(): number{
        return this.nivel
    }

    public setNivel(nivel:number){
        this.nivel += nivel
    }

    public getEvolucao(): boolean{
        return this.evolucao
    }

    public setAlcance(alcance:string): void{
        this.alcance = alcance
    }


     atacar(personagem: Personagem) : void{
        personagem.perderVida(this.forca)
        console.log(`${this.emoji} ${this.nome} está atacando...`)
     }

    private perderVida(forcaAtaque: number): void{
        this.vida -= forcaAtaque
        if(this.vida >0){
            console.log(`${this.emoji} ${this.nome} agora tem ${this.vida} de vida...`)
        }

     }


    abstract correr():void

    abstract getEmoji():void



    andar(){
        console.log("andando!!!")
    }

    voar(){
        console.log("voando!!!")
    }

    pular(){
        console.log("pulando!!!")
    }

    flutuar(){
        console.log("flutuar!!!")
    }

    investir(){
        console.log("investir!!!")
    }


    defender(){
        console.log("defender!!!")
    }

    curar(){
        console.log("curar!!!")
    }

    invocar(){
        console.log("invocar!!!")
    }

    congelar(){
        console.log("congelar!!!")
    }

    copiar(){
        console.log("copiando!!!")
    }

    analisar(){
        console.log("analisar!!!")
    }

    hipnotizar(){
        console.log("hipnotizando!!!")
    }

    envenenar(){
        console.log("envenenar!!!")
    }

    paralizar(){
        console.log("paralizar!!!")
    }

    falar(){
        console.log("falar!!!")
    }

    controlar(){
        console.log("controlar!!!")
    }

    dormir(){
        console.log("dormir!!!")
    }

    comer(){
        console.log("comendo!!!")
    }

    conjurar(){
        console.log("conjurar!!!")
    }

    refletir(){
        console.log("refletindo!!!")
    }

    provocar(){
        console.log("provocando!!!")
    }
}


