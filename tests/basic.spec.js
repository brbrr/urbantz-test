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

test("displays error for non-integer numbers", async ({ page }) => {
  const factorialPage = new FactorialPage(page);
  await factorialPage.goto();
  await factorialPage.calculate(1.2);
  expect(await factorialPage.result()).toContain("Please enter an integer");
});

test("displays error for strings", async ({ page }) => {
  const factorialPage = new FactorialPage(page);
  await factorialPage.goto();
  await factorialPage.calculate("test");
  expect(await factorialPage.result()).toContain("Please enter an integer");
});
