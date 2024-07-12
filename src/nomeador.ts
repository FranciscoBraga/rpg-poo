export  class Nomeador
{

   public static getNome(valor:number): string{

        return this.setNome(valor)
    }

    private  static setNome (valor:number): string {
        let quantidadeLetras: number = Math.floor(Math.random() * valor);
        quantidadeLetras = (quantidadeLetras < 3) ? 5 : quantidadeLetras;

        const vogais = ['a', 'e', 'i', 'o', 'u'];
        const consoantes = 'bcdfghjklmnpqrstvwxyz';

        let nome: string = '';
        let alternado = 0; // 0 para consoante, 1 para vogal

        for (let i = 0; i < quantidadeLetras; i++) {
          if (alternado === 0) {
            // Adicionar consoante
            let letra = consoantes[Math.floor(Math.random() * consoantes.length)];
            nome += letra;
            alternado = 1;
          } else {
            // Adicionar vogal
            let vogal = vogais[Math.floor(Math.random() * vogais.length)];
            nome += vogal;
            alternado = 0;
          }
        }
        return nome[0].toUpperCase()+nome.substring(1);
    }

}
