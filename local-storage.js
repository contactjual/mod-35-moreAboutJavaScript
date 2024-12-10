// for string (all are String) --------------------------------------

// window.localStorage.setItem('age', 19);
// or 
localStorage.setItem('age', 19);
localStorage.getItem('age');
localStorage.removeItem('age')

// localStorage.clear();
// localStorage.length();




// for object ---------------------------------
// to set object must convert this to string (all are String) following the process ( JSON.stringify() ) below :-

const myObject = {'name': 'jual', 'age': 19, 'Occupationv': 'developer'};

// JSON.stringify(myObject); // '{'name':'jual','age':19,'Occupationv':'developer'}'

// JSON.parse(myObject); // parse use for reconverting to object



