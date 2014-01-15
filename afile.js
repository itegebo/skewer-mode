1 + 1;

function foo() { return "hello world";}

function bar() {
    skewer.log('return four!');
    return 4;
}

function baz(anarg,loggables){
    loggables.forEach(console.log.bind(console));
    return 1+anarg;
}

baz(2,[1,2]);


