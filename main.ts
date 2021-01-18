
const calculateModule = './calculates'

const operacion = (num1: number, num2: number, op: string) => {
    let operation = null;
    switch (op.toLowerCase()) {
        case 'suma':
            operation=import(calculateModule).then(m => m.Suma)
            break
        case 'resta':
            operation=import(calculateModule).then(m => m.Resta)
                break
        default:
            return console.log(`${op} no es una operación soportada`);
    }
    return new operation(num1, num2).resultado();
}
const operaciones = async () => {
 
    const resultado2 = operacion(10, 3, 'suma')
    console.log(resultado2)
    const resultado3 = operacion(10, 3, 'resta')
    console.log(resultado3)
}

operaciones();