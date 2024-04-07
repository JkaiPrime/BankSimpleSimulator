import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { teste} from './class/ex'


const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
peopleAccount.deposit(10)
peopleAccount.deposit(1999)
peopleAccount.withdraw(1000)
console.log(peopleAccount.getName()+"\n"+peopleAccount.getBalance)

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
companyAccount.deposit(10000)
companyAccount.withdraw(1000)
console.log(companyAccount.getName()+"\n"+companyAccount.getBalance())


const ex:teste = new teste("Josias", 1001,10)
ex.deposit(100)
ex.withdraw(10)
console.log(ex.getName()+"\n"+ex.getBalance())