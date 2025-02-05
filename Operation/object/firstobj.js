const obj={
    prop:33
};

Object.freeze(obj)   //freez first value and not change other time.
obj.prop=44;
console.log(obj.prop);


