import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (value:number): void => {
    let util:number;
    if(this.validateStatus()){
      console.log('Voce pegou um empréstimo '+value+" Emprestado!");
      util = this.getBalance()
      util += value
      this.setBalance(util)
    }
  }
}
