  //! ORIENTAÇÃO A OBJETOS
  
class Pessoa {
    nome: string;
    renda?: number;
  
    constructor(nome: string, renda?: number) {
      this.nome = nome;
      this.renda = renda;
    }
  
    dizOla() {
      return `${this.nome} diz oi`;
    }
  }
  
  class ContaBancaria {
    private saldo: number = 0;
    numeroConta: number;
  
    constructor(numeroDaConta: number) {
      this.numeroConta = numeroDaConta;
    }
  
    static retornaNumeroDoBanco() {
      return 123;
    }
  
    getSaldo() {
      return this.saldo;
    }
  
    depositar(valor: number) {
      this.saldo += valor;
    }
  }
  
  class ContaBancariaPessoaFisica extends ContaBancaria {
    depositar(valor: number) {
      //this.saldo += valor * 2;
    }
  }
  
  const contaDoPedro = new ContaBancariaPessoaFisica(12345);
  ContaBancaria.retornaNumeroDoBanco();
    
  console.log(contaDoPedro);      
   