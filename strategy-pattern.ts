// java

/**
interface BillingStrategy {
  double getActPrice(final double rawPrice);
}

class NormalStrategy implements BillingStrategy {
  @Override
  public double getActPrice(final double rawPrice) {
      return rawPrice;
  }
}

// Strategy for Happy hour (50% discount)
class HappyHourStrategy implements BillingStrategy {
  @Override
  public double getActPrice(final double rawPrice) {
      return rawPrice * 0.5;
  }
}
*/

// typescript

type BillingStrategy = (price: number) => (number)
const normalBilling: BillingStrategy = (price) => price 
const happyHourBilling: BillingStrategy = (price) => price * 0.5

// example

let billingStrategy = normalBilling
billingStrategy(10)

billingStrategy = happyHourBilling
billingStrategy(10)
