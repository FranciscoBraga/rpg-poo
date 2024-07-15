import { Heroi } from "./heroi";
import{ Monstro } from "./monstro";
import {Acessorio} from "./acessorios";
import { Nomeador } from "./nomeador";
import { Calcular } from "./calcular";
import { Vestimenta } from "./vestimenta";


       let raca:string = ''
       let genero:string = ''
       let altura: number = Calcular.geraValor(25)
       let cor: string = ''
       let categoria: string = ''
       let elementos: string = ''
       let velocidade: number = Calcular.geraValor(50)
       let ataque: number =Calcular.geraValor(100)
       let forca: number = Calcular.geraValor(250)
       let defesa: number = Calcular.geraValor(50)
       let tipoAtaque: string = ''
       let alvoAtaque: string = ''
       let precisao: number =Calcular.geraValor(100)
       let alcance: string = ''
       let afinidade: string = ''
       let idade: number = Calcular.geraValor(5000)
       let evolucao: boolean = true
       let tipoMovimento: string = ''
       let qtaBraco: number = Calcular.geraValor(100)
       let qtaPerna: number =Calcular.geraValor(100)
       let vida: number = Calcular.geraValor(100000)




let anelFogo = new Acessorio(Nomeador.getNome(5),"anel","ferro","fogo",5)
let anelForca = new Acessorio(Nomeador.getNome(7),"anel","ferro","força",6)
let correnteEletrica = new Acessorio(Nomeador.getNome(5),"corrente","ouro","eletricidade",2)
let vestimenta1 = new Vestimenta(Nomeador.getNome(5),Calcular.geraValor(10),Calcular.geraValor(60))
let vestimenta2 = new Vestimenta(Nomeador.getNome(5),Calcular.geraValor(10),Calcular.geraValor(60))
let vestimenta3 = new Vestimenta(Nomeador.getNome(5),Calcular.geraValor(10),Calcular.geraValor(60))

let galou = new Heroi("Galou","Desertica","Masculino",1.80,"Marron","","Areia",90,50,50,75,"adaga","",50,"curto","cura",50,false,"rapido","furtivo","minerador",100,vestimenta1)

console.log(galou)
/* galou.getEmoji()
galou.getAcessorios()
galou.setAcessorios(anelFogo)
galou.setAcessorios(correnteEletrica)

galou.getAcessorios()

console.log("Removido:",galou.removeAcessorios())
galou.getAcessorios() */
let monstro = new Monstro(Nomeador.getNome(10),raca,genero,altura,cor,categoria,elementos,velocidade, ataque, forca, defesa, tipoAtaque, alvoAtaque, precisao, alcance, afinidade, idade, evolucao, tipoMovimento, vida, qtaBraco,qtaPerna,vestimenta2)

console.log(monstro)
monstro.getEmoji()

galou.atacar(monstro)
galou.atacar(monstro)
galou.atacar(monstro)

console.log(monstro)



