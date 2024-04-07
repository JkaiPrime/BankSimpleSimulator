import { DioAccount } from "./DioAccount";

export class teste extends DioAccount{
    private param:number = 0;
    constructor(name: string, accountNumber: number,param:number){
        super(name,accountNumber);
        this.param = param
    }
    deposit = (value:number)=>{
        if(this.validateStatus()){
            let util = 0;
            util = this.getBalance()
            util+=value + this.param;
            this.setBalance(util)
        }
    }
    withdraw=(value: number) => {
        if(this.validateStatus()&& this.getBalance() > value){
            let util = this.getBalance()
            util-= value
            this.setBalance(util)
        }
    }
}