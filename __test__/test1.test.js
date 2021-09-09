const { suma } = require("../index");

test("regresa 8 al pasar 6 y 2", () =>{
    const a = 6;
    const b = 2;

    const result = suma(a,b);

    expect(result).toBe(8);
});