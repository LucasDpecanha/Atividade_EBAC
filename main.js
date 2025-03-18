// Classe abstrata
class Veiculo {
    constructor(marca, modelo, ano) {
        if (this.constructor === Veiculo) {
            throw new Error("Classe abstrata não pode ser instanciada diretamente");
        }
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    
    exibirDetalhes() {
        return `${this.ano} ${this.marca} ${this.modelo}`;
    }
}

// Classes herdeiras
class Carro extends Veiculo {
    constructor(marca, modelo, ano, portas) {
        super(marca, modelo, ano);
        this.portas = portas;
    }
    
    exibirDetalhes() {
        return `${super.exibirDetalhes()} com ${this.portas} portas`;
    }
}

class Moto extends Veiculo {
    constructor(marca, modelo, ano, cilindradas) {
        super(marca, modelo, ano);
        this.cilindradas = cilindradas;
    }
    
    exibirDetalhes() {
        return `${super.exibirDetalhes()} com ${this.cilindradas}cc`;
    }
}

// Instâncias de objetos
const carro1 = new Carro("Toyota", "Corolla", 2022, 4);
const carro2 = new Carro("Honda", "Civic", 2021, 4);
const moto1 = new Moto("Yamaha", "MT-03", 2023, 321);

console.log(carro1.exibirDetalhes()); // Saída: 2022 Toyota Corolla com 4 portas
console.log(carro2.exibirDetalhes()); // Saída: 2021 Honda Civic com 4 portas
console.log(moto1.exibirDetalhes());  // Saída: 2023 Yamaha MT-03 com 321cc
