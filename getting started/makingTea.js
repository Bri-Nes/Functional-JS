
/**
 * ===  JavaScript CheatSheet
 * 'const' is a key word to make constant
 * 'var' is a key word to make variable
 * 'let' is a key word to make variable
 **/

/**
 *   =====   WHAT THE HECK IS FUNCTIONAL PROGRAMMING? ======
 *  Functional programming is a style of programming where solutions become simple, isolated functions,
 *  without any side effects outside of the function scope.
 **/

/**
 * ======   Purpose of functional programming =======
 *
 * // Isolated Functions: there is no dependence on the state of the program, which includes global
 * variables that are subject to change.
 *
 * // Pure Functions: the same input always gives the same output.
 *
 * // Functions with limited side effects - any changes, or mutations,
 * to the state of the program outside the function are carefully controlled
 *
 *
 **/

 /**
 * Let's prepare some tea.
 * @return {string} A cup of tea.
 **/
const prepareTea = () => 'greenTea';
var chamomille = "Chamomille";
let chaiTea = 'Chai Tea';


/**
 * Get given number of cups of tea.
 * @param {number} numOfCups Number of required cups of tea.
 * @return {Array<string>} Given amount of tea cups.
 **/
const getTea = (numOfCups) => {
    const teaCups = [];

    for(let cups = 1; cups <= numOfCups; cups += 1) {
        const teaCup = prepareTea();
        teaCups.push(teaCup);
    }

    return teaCups;
};

// Add your code below this line

const tea4TeamFCC = 40; // :(

// Add your code above this line

console.log(tea4TeamFCC);



// https://learn.freecodecamp.org/javascript-algorithms-and-data-structures/functional-programming/learn-about-functional-programming