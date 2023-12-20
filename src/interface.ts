//!INTERFACE.TS 

class Conta {
    numeroDaConta: number;
    saldo: number = 0;
  
    constructor(numeroDaConta: number) {
      this.numeroDaConta = numeroDaConta;
    }
  }
  
  class ContaSalario extends Conta {
    depositar(valor: number) {
      this.saldo += valor;
    }
  }
  
  interface ITransacional {
    transferir(valor: number, destinatario: Conta): boolean;
    taxaTransferencia: number;
  }
  
  class ContaCorrente extends Conta implements ITransacional {
    transferir(valor: number, destinatario: Conta):any {
      destinatario.saldo += valor - this.taxaTransferencia;
    }
  
    taxaTransferencia: number = 0;
  }
  