import { InstallmentCalculator } from "@gstore/core";

export function useInstallment(
  value: number, 
  quantity: number = 12
) 
{
 const installmentValue = new InstallmentCalculator().execute(value, quantity)

 return installmentValue
}
