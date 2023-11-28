const displayBig = document.getElementById('display__big')
const displaySmall = document.getElementById('display__small')
const backspace = document.getElementById('backspace')
const plus = document.getElementById('plus')
const minus = document.getElementById('minus')
const multiply = document.getElementById('multiply')
const divide = document.getElementById('divide')
const equals = document.getElementById('equals')
const num1 = document.getElementById('num1')
const num2 = document.getElementById('num2')
const num3 = document.getElementById('num3')
const num4 = document.getElementById('num4')
const num5 = document.getElementById('num5')
const num6 = document.getElementById('num6')
const num7 = document.getElementById('num7')
const num8 = document.getElementById('num8')
const num9 = document.getElementById('num9')
const num0 = document.getElementById('num0')

const operators = [plus, minus, multiply, divide]
const numbers = [num0, num1, num2, num3, num4, num5, num6, num7, num8, num9]

export default {
    displayBig,
    displaySmall,
    backspace,
    plus,
    minus,
    multiply,
    divide,
    equals,
    num1,
    num2,
    num3,
    num4,
    num5,
    num6,
    num7,
    num8,
    num9,
    num0,
    operators,
    numbers
}