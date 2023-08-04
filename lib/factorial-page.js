import BasePage from "./base-page";
import config from "../e2e.config";

export default class FactorialPage extends BasePage {
  async goto() {
    return this.page.goto(config.baseURL);
  }

  async calculate(number) {
    await this.page.fill("#number", number.toString());
    const responsePromise = this.page.waitForResponse(config.apiEndpoint);
    await this.page.click("#getFactorial");
    return responsePromise;
  }

  async result() {
    await this.page.waitForSelector("#resultDiv");
    return this.page.textContent("#resultDiv");
  }
}
