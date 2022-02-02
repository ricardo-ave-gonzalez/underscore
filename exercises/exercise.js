const allEqual = (arr, key) => {
    let firstNonNull = null;
    return arr.every((v) => {
        const value = v[key];
        if (value === null) {
            return true;
        }
        if (firstNonNull === null) {
            firstNonNull = value;
            return true;
        }
        return value === firstNonNull;
    });
};

let example = [
    {
        test: null,
    },
    {
        test: "foo",
    },
    {
        test: "foo",
    },
];
console.log(allEqual(example, "test")); // true

let counterExample = [
    {
        test: null,
    },
    {
        test: "foo",
    },
    {
        test: "bar",
    },
];
console.log(allEqual(counterExample, "test"));