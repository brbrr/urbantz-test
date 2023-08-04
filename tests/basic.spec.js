import { test, expect } from "@playwright/test";
import FactorialPage from "../lib/factorial-page";

test("has title", async ({ page }) => {
  const factorialPage = new FactorialPage(page);
  await factorialPage.goto();
  expect(await page.title()).toBe("Factoriall");
});

test("can calculate 12!", async ({ page }) => {
  const factorialPage = new FactorialPage(page);
  await factorialPage.goto();
  await factorialPage.calculate(12);
  expect(await factorialPage.result()).toContain("479001600");
});
