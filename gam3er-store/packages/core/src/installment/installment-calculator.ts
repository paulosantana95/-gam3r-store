import { MAX_NUMBER_OF_INSTALLMENTS, MIN_NUMBER_OF_INSTALLMENTS, MONTHLY_INTEREST_RATE } from "../constants"
import Installment from "./installment"

export default class InstallmentCalculator {
  execute(
    value: number,
    numberOfInstallments: number = MAX_NUMBER_OF_INSTALLMENTS,
    interestRate: number = MONTHLY_INTEREST_RATE
  ): Installment 
  {
    if(
      numberOfInstallments < MIN_NUMBER_OF_INSTALLMENTS || numberOfInstallments > MAX_NUMBER_OF_INSTALLMENTS
    ) {
      throw new Error('The number of installments must be between 2 and 12');
    }

    const totalValueWithInterest = this.calculateInterest(value, interestRate, numberOfInstallments);

    return {
      installmentValue: this.formatToTwoDecimalPlaces(totalValueWithInterest / numberOfInstallments),
      totalValue: this.formatToTwoDecimalPlaces(totalValueWithInterest),
      numberOfInstallments,
      interestRate
    };
  }

  private calculateInterest(value: number, interestRate: number, numberOfInstallments: number): number {
    return value * Math.pow(1 + interestRate, numberOfInstallments);
  }

  private formatToTwoDecimalPlaces(value: number): number {
    return Math.round(value * 100) / 100;
  }
}
