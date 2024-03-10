import { camelToKebab, camelToSnake, kebabToCamel, snakeToCamel } from "./Case.js";

var name = "TestMyName";
console.log("camelToKebab:", name, camelToKebab(name));
console.log("camelToSnake:", name, camelToSnake(name));

var name = "testMyName";
console.log("camelToKebab:", name, camelToKebab(name));
console.log("camelToSnake:", name, camelToSnake(name));

var name = "test-my-name";
console.log("kebabToCamel:", name, kebabToCamel(name));

var name = "test_my_name";
console.log("snakeToSnake:", name, snakeToCamel(name));

class ThisIsMyBaseTestClass {
    static get _className() { return this.name; };
    static get _elementName() { return camelToKebab(this._className); };
}
console.log(ThisIsMyBaseTestClass._className);
console.log(ThisIsMyBaseTestClass._elementName);

class ThisIsMyTestClass extends ThisIsMyBaseTestClass { }
console.log(ThisIsMyTestClass._className);
console.log(ThisIsMyTestClass._elementName);
