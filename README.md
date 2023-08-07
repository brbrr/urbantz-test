# Urantz take home assignment

## Tasks

1. test the application and report any bugs you can find.
2. write out some test scenarios so you can organize test runs every time we want to deploy a new version of the app.
3. try to automate (some of) these scenarios.

## Bug reports

All the issues are reported in the issues section of this repo: https://github.com/brbrr/urbantz-test/issues

## Test cases

Due to the bug/uncertainty of expected behavior, I will assume all integers as valid inputs, meaning that the theoretical range of valid inputs is [0..Infinity]. Obviously, there should be a finite range of valid inputs, but this is up for a discussion with product/dev team.

### Positive test cases

- Submit integer value at lower boundary [0]
- Submit integer value at lower boundary+1 [1]
- Submit integer value within the range of [170-990]
- Submit integer value higher than 991 [2000]

### Negative test cases

- Submit a number with a decimal point
- Submit a negative number
- Submit a number in exponent notation
- Submit a string

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
Run `npm run test:report` to open the report in the browser.
