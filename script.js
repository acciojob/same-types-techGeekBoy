import test from 'ava';

function isSameType(value1, value2) {
    if (isNaN(value1) && isNaN(value2)) {
        return true; // Both values are NaN
    }

    return typeof value1 === typeof value2;
}

test('isSameType - numbers of the same type', t => {
    t.true(isSameType(1, 3));
});

test('isSameType - strings of the same type', t => {
    t.true(isSameType("hey", "hello"));
});

test('isSameType - NaN values', t => {
    t.true(isSameType(NaN, NaN));
});

test('isSameType - values of different types', t => {
    t.false(isSameType("3", 3));
});
