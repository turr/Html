var hello = require('./r1');
hello.world();


var Hello2 = require('./r2'); 
Hello2 = new Hello2(); 
Hello2.setName('BYVoid'); 
Hello2.sayHello(); 