import { Price } from '../../domain/objects/Price';

export const calcPriceMultiplication = (input: {
  price: Price;
  by: number;
}): Price => {
  return new Price({
    amount: input.price.amount * input.by,
    currency: input.price.currency,
  });
};

export { calcPriceMultiplication as multiplyPrice };
