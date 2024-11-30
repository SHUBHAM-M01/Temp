const modifyName = (name) => {
    return Math.random(0.1) + name;
}

const modifyBoolean = (value) => {
    return !value;
}

const roundOfInteger = (integer) => {
    return Math.round(integer);
}

module.exports = {
    modifyName,
    modifyBoolean,
    roundOfInteger
}