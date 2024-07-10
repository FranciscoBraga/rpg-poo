import { Heroi } from "./heroi";
import{ Monstro } from "./monstro";
import {Acessorio} from "./acessorios";


       let nome: string = ''
       let raca:string = ''
       let genero:string = ''
       let altura: number
       let cor: string = ''
       let categoria: string = ''
       let elementos: string = ''
       let velocidade: number
       let ataque: number
       let forca: number
       let defesa: number
       let tipoAtaque: string = ''
       let alvoAtaque: string = ''
       let precisao: number
       let alcance: string = ''
       let afinidade: string = ''
       let idade: number
       let evolucao: boolean
       let tipoMovimento: string = ''
       let qtaBraco: number
       let vida: number


let anelFogo = new Acessorio("anel","ferro","fogo")
let anelForca = new Acessorio("anel","ferro","força")
let correnteEletrica = new Acessorio("corrente","ouro","eletricidade")

let galou = new Heroi("Galou","Desertica","Masculino",1.80,"Marron","","Areia",90,50,50,75,"adaga","",50,"curto","cura",50,false,"rapido","furtivo","minerador",100)
galou.getEmoji()
galou.getAcessorios()
galou.setAcessorios(anelFogo)
galou.setAcessorios(correnteEletrica)
console.log(galou)
galou.getAcessorios()

console.log("Removido:",galou.removeAcessorios())
galou.getAcessorios()

function criarMonstro(){
  let monstro = new Monstro(nome,raca,genero,altura,cor,categoria,elementos,velocidade, ataque, forca, defesa, tipoAtaque, alvoAtaque, precisao, alcance, afinidade, idade, evolucao, tipoMovimento, vida, qtaBraco)
}



