// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";
import util from "util";

process.env.REACT_APP_API_KEY = "test-api-key";
process.env.REACT_APP_API_BASE_URL = "https://test-base-url.com";

global.TextEncoder = util.TextEncoder;
