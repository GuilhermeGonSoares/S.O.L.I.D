import {
  IndividualCustomerProtocol,
  EnterpriseCustomerProtocol,
} from './interfaces/Customer-protocol';

export class IndividualCustomer implements IndividualCustomerProtocol {
  constructor(
    public firstName: string,
    public lastName: string,
    public cpf: string,
  ) {}
  getName(): string {
    throw new Error('Method not implemented.');
  }
  getIDN(): string {
    throw new Error('Method not implemented.');
  }
}
export class EnterpriseCustomer implements EnterpriseCustomerProtocol {
  constructor(public name: string, public cnpj: string) {}
  getName(): string {
    throw new Error('Method not implemented.');
  }
  getIDN(): string {
    throw new Error('Method not implemented.');
  }
}
