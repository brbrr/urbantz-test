# Urantz take home assignment

## Tasks

1. test the application and report any bugs you can find.
2. write out some test scenarios so you can organize test runs every time we want to deploy a new version of the app.
3. try to automate (some of) these scenarios.

## Test cases

Due to the bug/uncertainty of expected behavior, I will assume all integers as valid inputs.

### Positive test cases

Submit integer value at lower boundary [0]
Submit integer value at lower boundary+1 [1]
Submit integer value within the range of [170-990]
Submit integer value higher than 991 [2000]

### Negative test cases

Submit a number with a decimal point
Submit a negative number
Submit a number in exponent notation
Submit a string

## E2E tests

### Setup

1. Install node.js
2. Install npm
3. clone the repo and run `npm install`

### Run tests

- `npm run test` will run the tests in headless mode
- `npm run test:debug` will run the tests in debug mode

### Reports

Reports are automatically generated in the `./reports` folder after each test run.
run `npm run test:report` to open the report in the browser.
