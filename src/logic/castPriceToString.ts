import { UnexpectedCodePathError } from '@ehmpathy/error-fns';

import { Price } from '../domain/objects/Price';

export const castPriceToString = (
  price: Price,
  options?: {
    noCents?: boolean; // TODO: update cents name to be globalized
  },
) => {
  if (price.currency !== 'USD')
    throw new UnexpectedCodePathError('todo: support non-usd currencies', {
      price,
    });
  const usdString = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(price.amount / 100);
  if (options?.noCents) return usdString.split('.')[0];
  return usdString;
};
