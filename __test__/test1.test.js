const { suma, resta } = require("../index");

test("regresa 8 al pasar 6 y 2", () =>{
    const a = 6;
    const b = 2;

    const result = suma(a,b);

    expect(result).toBe(8);
});

test("return 4 , argumentst 8 y 4", ()=>{
    let a = 8, b = 4;

    let result = resta(a,b);

    expect(result).toBe(4);
})