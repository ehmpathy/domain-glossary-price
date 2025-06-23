# domain-glossary-price

![test](https://github.com/ehmpathy/domain-glossary-price/workflows/test/badge.svg)
![publish](https://github.com/ehmpathy/domain-glossary-price/workflows/publish/badge.svg)

A glossary of intuitive, universally unambiguous **Price** definitions and useful procedures.

# purpose


declare a ubiquitious language for

- domain objects related to `Price`
  - price
  - currency

- procedures related to `Price`
  - cast price to words
  - cast words to price
  - sum prices
  - etc

# install

```sh
npm install domain-glossary-price
```

# use


### `Price` = declare a price

per the standard laid out by Stripe, price.amounts are declared in the smallest unit of the currency

for example, for USD, in cents

```ts
import { Price, Currency } from 'domain-glossary-price';

const price = new Price({ amount: 50_00, currency: 'USD' })
const price = new Price({ amount: 37_00, currency: Currency.USD })
```


### `ofPriceWord` = cast from words to dobjs

its often convenient to declare prices in human words rather than dobjs

you can do so easily with `ofPriceWord`

```ts
const price: Price = ofPriceWord('$50.37')

expect(price).toEqual(new Price({ amount: 50_37, currency: 'USD' }))
```


### `asPriceWord` = cast from dobjs to words

a common usecase is to show a price from the database in human words

you can do so easily with `asPriceWord`

```ts
const price: string = asPriceWord(new Price({ 50_37, currency: 'USD' }))

expect(price).toEqual('$50.37')
```


you can use the `options` input to further customize. for example, drop the cents

```ts
const price: string = asPriceWord(new Price({ 50_37, currency: 'USD' }), { cents: false })

expect(price).toEqual('$50')
```
