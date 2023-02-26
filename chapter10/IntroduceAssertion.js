/**
 * 引入断言
 * Introduce Assertion
 * 断言应该是数据的最后一道防线，不应该成为数据的校验机制
 */
if (this.discountRate)
    base = base - (this.discountRate * base);


assert(this.discountRate >= 0);
if (this.discountRate)
    base = base - (this.discountRate * base);