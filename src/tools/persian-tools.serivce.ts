import { Injectable } from '@nestjs/common';
import { 
   WordsToNumber, 
   NumberToWords, 
   addCommas, 
   removeCommas,
   digitsArToFa, 
   digitsArToEn, 
   digitsEnToFa, 
   digitsFaToEn,
   verifyIranianNationalId, 
   getPlaceByIranNationalId,
   verifyCardNumber,
   getBankNameFromCardNumber,
   isPersian, 
   toPersianChars,
   URLfix,
   Bill,
   Sheba,
   halfSpace
} from "persian-tools2";

@Injectable()
export class PersianToolsService {
   public convertFromString(
      input: string, 
      options?: { digits?: string, addCommas?: boolean, fuzzy?: boolean }
   ): string|number {
      return WordsToNumber.convert(input, options);
   }
  
   public convertFromNumber(input: number|string, options?: {ordinal: boolean}): string|number {
      return NumberToWords.convert(input, options);
   }

   public addCommas(input: number|string): string|number {
      return addCommas(input);
   }

   public removeCommas(input: number|string): string|number{
      return removeCommas(input);
   }

   public digitsArToFa(input: number|string): string|number{
      return digitsArToFa(input);
   }

   public digitsArToEn(input: number|string): string|number{
      return digitsArToEn(input);
   }

   public digitsEnToFa(input: number|string): string|number{
      return digitsEnToFa(input);
   }

   public digitsFaToEn(input: number|string): string|number{
      return digitsFaToEn(input);
   }

   public verifyIranianNationalId(input: string): boolean {
      return verifyIranianNationalId(input);
   }

   public getPlaceByIranNationalId(input: string): string {
      return getPlaceByIranNationalId(input).city;
   }

   public verifyCardNumber(input: number): boolean {
      return verifyCardNumber(input);
   }

   public getBankNameFromCardNumber(input: number): string {
      return getBankNameFromCardNumber(input);
   }

   public isPersian(input: string): boolean {
      return isPersian(input);
   }

   public toPersianChars(input: string): string {
      return toPersianChars(input);
   }

   public urlFix(input: string): string {
      return URLfix(input);
   }

   public billRials(input: { billId: number, paymentId: number, currency?: string }): string|number {
      if(!input.currency) input.currency = 'rial';
      return new Bill(input).getResult().amount;
   }

   public billTomans(input: { billId: number, paymentId: number }): string|number {
      return new Bill(input).getResult().amount;
   }

   public billType(input: { billId: number, paymentId: number }): string {
      return new Bill(input).getResult().type;
   }

   public billValidBillId(input: { billId: number, paymentId: number }): boolean {
      return new Bill(input).getResult().isValidBillId;
   }

   public billValidBillPayment(input: { billId: number, paymentId: number }): boolean {
      return new Bill(input).getResult().isValidBillPayment;
   }

   public billValid(input: { billId: number, paymentId: number }): boolean {
      return new Bill(input).getResult().isValid;
   }

   public billBarcode(input: { billId: number, paymentId: number }): string|number {
      return new Bill(input).getResult().barcode;
   }

   public billFindByBarcode(input: string): { billId: number, paymentId: number } {
      return new Bill(input).findByBarcode();
   }

   public shebaValidate(input: string): boolean {
      return new Sheba(input).validate();
   }

   public shebaRecognize(input: string): {
      nickname?: string, 
      name?: string, 
      persianName?: string, 
      code?: string, 
      accountNumberAvailable?: boolean, 
      accountNumber?: string, 
      formattedAccountNumber?: string
   } {
      return new Sheba(input).recognize();
   }

   public halfSpace(input: string): string {
      return halfSpace(input);
   }

}
