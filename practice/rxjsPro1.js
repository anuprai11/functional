const { Observable, from } = require('./node_modules/rxjs');
const { map } = require('rxjs/operators');

const {logger} = require('./logger');

const noop = e => e
const event = function (callBack = noop) {
  let x=1;
  setInterval(() => callBack(x+=2), 3000);
}

const hello = Observable.create(observer => {
  event((value)=>{
    observer.next(value);
  })
});

const pipedHello = hello.pipe(map((x) => {return x*2;}))
                      .pipe(map((x) => {return x*2;}))
                      .pipe(map((x) => x*3))



const stream = pipedHello.subscribe((x)=>(console.log(x)));
