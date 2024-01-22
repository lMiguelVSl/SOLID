(() => {

    const fruits: string[] = ['manzana', 'cereza', 'ciruela'];
    function isRedFruit(fruit: string): boolean {
        return fruits.includes(fruit)
    }

    type FruitColor = 'red' | 'yellow' | 'purple';
    const fruitsByColor = {
        red: ['manzana', 'fresa'],
        yellow: ['piña', 'banana'],
        purple: ['moras', 'uvas']
    }

    function getFruitsByColor(color: FruitColor): string[] {
        if (!Object.keys(fruitsByColor).includes(color)) throw Error('The colormmust be: red, yellow, purple');
        return fruitsByColor[color];
    }

    let isFirstStepWorking = true;
    let isSecondStepWorking = true;
    let isThirdStepWorking = true;
    let isFourthStepWorking = true;

    function workingSteps() {

        if (!isFirstStepWorking) return 'First step broken';
        if (!isSecondStepWorking) return 'Second step broken';
        if (!isThirdStepWorking) return 'Third step broken';
        if (!isFourthStepWorking) return 'Fourth step broken';

        return 'working properly';
        
    }


    // isRedFruit
    console.log({ isRedFruit: isRedFruit('cereza'), fruit: 'cereza' }); // true
    console.log({ isRedFruit: isRedFruit('piña'), fruit: 'piña' }); // true

    //getFruitsByColor
    console.log({ redFruits: getFruitsByColor('red') }); // ['manzana', 'fresa']
    console.log({ yellowFruits: getFruitsByColor('yellow') }); // ['piña', 'banana']
    console.log({ purpleFruits: getFruitsByColor('purple') }); // ['moras', 'uvas']
    // console.log({ pinkFruits: getFruitsByColor('pink') }); // Error: the color must be: red, yellow, purple

    // workingSteps
    console.log({ workingSteps: workingSteps() }); // Cambiar los valores de la línea 31 y esperar los resultados


})();