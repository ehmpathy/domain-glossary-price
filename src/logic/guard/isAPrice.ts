import { isOfCurrency } from '../../domain/constants/Currency';
import { Price } from '../../domain/objects/Price';

export const isAPrice = (val: unknown): val is Price =>
  typeof val === 'object' &&
  val !== null &&
  typeof (val as any).currency === 'string' &&
  isOfCurrency((val as any).currency) &&
  typeof (val as any).amount === 'number';
