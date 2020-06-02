/* This:

*/
'use strict';

console.log('\n\n<------ this.js ----->');

const tag = 'This';

window.gwv = 'global_window_var';
this.gtv = 'global_this_var';    // 'this' refers to 'window' object

{
    log(tag, 'this_alone');

    console.log('this: ', this);    // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
    console.log('gwv: ', gwv);  // global_window_var
    console.log('gtv: ', gtv);  // global_this_var
};

{
    log(tag, 'this_in_a_function');

    // 'this' refers to 'window' object in Default mode
    // 'this' is 'undefined in Strict mode
    function myFn() {
        return this;
    }

    const x = myFn();

    console.log('x in default mode: ', x);  // Window {postMessage: ƒ, blur: ƒ, focus: ƒ, close: ƒ, parent: Window, …}
    console.log('x in strict mode: ', x);   // undefined
};

{
    log(tag, 'this_in_an_object_method');

    // js object creation
    const person = {
        id: 101,
        firstName: 'John',
        lastName: 'Doe',
        fullName: function () { // <= es5 style
            return 'Mr. ' + this.firstName + ' ' + this.lastName;
        },
        fullName2: () => {  // 'this' is not accessible in arrow functions
            return 'Sire. ' + this.firstName + ' ' + this.lastName;
        },
        fullName3() {   // >= es6 style
            return 'Boss. ' + this.firstName + ' ' + this.lastName;
        }
    };

    console.log('person.fullName(): ', person.fullName());  // Mr. John Doe
    console.log('person.fullName2(): ', person.fullName2());    // Sire. undefined undefined
    console.log('person.fullName3(): ', person.fullName3());    // Boss. John Doe
    console.log('person: ', person);
};

{
    log(tag, 'this_in_an_event');

    function handleClick(e) {
        console.log('handleClick() triggered -->');
        console.log('eventObject: ', e);

        // without this
        /* const btnEl = document.getElementById('removeButton');
        btnEl.style.display = 'none'; */

        // with this
        this.style.display = 'none';    // 'this' refers to btnEl
    }

    // create a button
    const btnEl = document.createElement('button');
    btnEl.id = 'removeButton';
    btnEl.innerHTML = 'Click to Remove Me!';
    /* btnEl.onclick = function () {   // <= es5 style
        console.log('onclick() triggered -->');

        this.style.display = 'none';    // 'this' refers to btnEl
    }; */
    /* btnEl.onclick = () => { // 'this' is not accessible in arrow functions
        console.log('onclick() triggered -->');

        this.style.display = 'none';
    }; */
    // btnEl.setAttribute('onclick', "this.style.display = 'none'");    // inline handler
    // btnEl.addEventListener('click', handleClick);
    btnEl.onclick = handleClick;

    const rootDivEl = document.getElementById('root');
    rootDivEl.after(btnEl);
};

{
    log(tag, 'this_using_bind_call_apply');

    {
        log(tag, 'a_this_using_bind_call_apply_on_object_methods');

        const person = {
            id: 101,
            firstName: 'John',
            lastName: 'Doe',
            getBio(skillLevel = 'good', profession = 'Fielder') {
                return `${this.firstName} is a ${skillLevel} ${profession}`;
            }
        };
        // create similar person objects
        const person1 = { firstName: 'Virat' };

        console.log('person.getBio(): ', person.getBio());    // John is a good Fielder

        const unboundGetBio = person.getBio;
        // console.log('unboundGetBio() in default mode: ', unboundGetBio());    // Boss. undefined undefined
        // console.log('unboundGetBio() in strict mode: ', unboundGetBio());  // TypeError: Cannot read property 'firstName' of undefined

        console.log('unboundGetBio: ', unboundGetBio);    // function definition string
        console.log('unboundGetBio.bind(person): ', unboundGetBio.bind(person));  // function definition string
        console.log('unboundGetBio.bind(person1): ', unboundGetBio.bind(person1));    // function definition string

        const boundGetBio = unboundGetBio.bind(person)();
        const boundGetBio1 = unboundGetBio.bind(person1)('great', 'Batsman');
        console.log('boundGetBio: ', boundGetBio);  // John is a good Fielder
        console.log('boundGetBio1: ', boundGetBio1);  // Virat is a great Batsman

        const calledGetBio = unboundGetBio.call(person);
        const calledGetBio1 = unboundGetBio.call(person1, 'great');
        console.log('calledGetBio: ', calledGetBio);  // John is a good Fielder
        console.log('calledGetBio1: ', calledGetBio1);  // Virat is a great Fielder

        const appliedGetBio = unboundGetBio.apply(person);
        const appliedGetBio1 = unboundGetBio.apply(person1, [undefined, 'Batsman']);
        console.log('appliedGetBio: ', appliedGetBio);  // John is a good Fielder
        console.log('appliedGetBio1: ', appliedGetBio1);  // Virat is a good Batsman
    };

    {
        log(tag, 'b_this_using_bind_on_constructor_functions');

        function LateBloomer() {
            this.petalCount = Math.floor(Math.random() * 12) + 1;
        }
        LateBloomer.prototype.declare = function () {
            console.log(`I am a beautiful flower with ${this.petalCount} petals!`);
        };
        LateBloomer.prototype.unboundBloom = function () {
            // Declare bloom after a delay of 2 second
            window.setTimeout(this.declare, 2000);
        };
        LateBloomer.prototype.boundBloom = function () {
            // Declare bloom after a delay of 4 second
            window.setTimeout(this.declare.bind(this), 4000);
        };

        const flower = new LateBloomer();
        flower.unboundBloom();  // I am a beautiful flower with undefined petals!
        flower.boundBloom();    // I am a beautiful flower with 10 petals!
    };
};