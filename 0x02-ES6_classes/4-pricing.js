import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw TypeError('amount must be a Number');
    }
    this._amount = value;
  }

  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (value instanceof Currency !== 'true') {
      throw TypeError('currency must be a Currency object');
    }
    this._currency = value;
  }

  displayFullPrice() {
    return `${this._amount} ${this._currency.displayFullCurrency()}`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
