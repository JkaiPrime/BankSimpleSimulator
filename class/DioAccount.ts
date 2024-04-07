export abstract class DioAccount {
  private readonly name: string
  private readonly accountNumber: number
  private balance: number = 0
  private status: boolean = true

  constructor(name: string, accountNumber: number){
    this.name = name
    this.accountNumber = accountNumber
  }

  setName = (name: string): void => {
    //this.name = name
    //console.log('Nome alterado com sucesso!')
    console.log("Name with atibute readonly, update denied!")
  }

  getName = (): string => {
    return this.name
  }

  deposit = (value:number): void => {
    if(this.validateStatus()){
      console.log('Voce depositou ' + value)
      this.balance += value
    }
  }

  withdraw = (value:number): void => {
    if(this.validateStatus() && this.balance > value){
      console.log('Voce sacou' + value)
      this.balance -=value
    }
  }

  getBalance = (): number => {
    return this.balance
  }
  setBalance=(balance:number):void =>{
    this.balance = balance
    console.log("Balance set to "+ this.balance)
  }

  validateStatus = (): boolean => {
    if (this.status) {
      return this.status
    }

    throw new Error('Conta inválida')
  }
}
