function createUniqueCounter() {
    let cnt = 0;

    function increment() {
        cnt++;
        console.log(`Count incresed by ${cnt}`);
    }

    function getValue() {
        console.log(`The count is ${cnt}`);
    }

    return {
        increment,
        getValue
    };
}

const c1 = createUniqueCounter();
const c2 = createUniqueCounter();

c1.increment();
c1.increment();
c1.getValue(); 

c2.increment();
c2.getValue(); 
c2.increment();
