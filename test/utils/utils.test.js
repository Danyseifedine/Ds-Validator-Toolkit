const { _STR_ } = require("../../dist/index.js");


// ======================= isString function ========================== \\
describe('STR Utility Class - isString', () => {

    test('should return true for a valid string', () => {

        expect(_STR_.isString('Hello')).toBe(true);
        expect(_STR_.isString('123')).toBe(true);
        expect(_STR_.isString('')).toBe(true);
        expect(_STR_.isString('true')).toBe(true);

    });

    test('should return false for a non-string value', () => {

        expect(_STR_.isString(123)).toBe(false);
        expect(_STR_.isString(true)).toBe(false);
        expect(_STR_.isString({})).toBe(false);
        expect(_STR_.isString(null)).toBe(false);
        expect(_STR_.isString(undefined)).toBe(false);

    });

    test('should return false for edge cases', () => {

        expect(_STR_.isString()).toBe(false);
        expect(_STR_.isString([])).toBe(false);
        expect(_STR_.isString(new Date())).toBe(false);

    });
});


// ======================= isStringRequired function ========================== \\
describe('STR Utility Class - isStringRequired', () => {

    test('should return true if string is required and not empty', () => {

        expect(_STR_.isStringRequired('Hello', true)).toBe(true);
        expect(_STR_.isStringRequired('  Hello  ', true)).toBe(true);

    });

    test('should return false if string is required but empty', () => {

        expect(_STR_.isStringRequired('', true)).toBe(false);
        expect(_STR_.isStringRequired('  ', true)).toBe(false);
        expect(_STR_.isStringRequired(null, true)).toBe(false);
        expect(_STR_.isStringRequired(undefined, true)).toBe(false);

    });

    test('should return true if string is not required', () => {

        expect(_STR_.isStringRequired('Hello', false)).toBe(true);
        expect(_STR_.isStringRequired('', false)).toBe(true);
        expect(_STR_.isStringRequired(null, false)).toBe(true);
        expect(_STR_.isStringRequired(undefined, false)).toBe(true);

    });
});


// ======================= isStringLengthAtLeast function ========================== \\
describe('STR Utility Class - isStringLengthAtLeast', () => {

    test('should return true if string length is at least as long as the minimum length', () => {

        expect(_STR_.isStringLengthAtLeast('Hello', 5)).toBe(true);
        expect(_STR_.isStringLengthAtLeast('Hello', 4)).toBe(true);
        expect(_STR_.isStringLengthAtLeast('Hello', 1)).toBe(true);

    });

    test('should return false if string length is less than the minimum length', () => {

        expect(_STR_.isStringLengthAtLeast('', 1)).toBe(false);
        expect(_STR_.isStringLengthAtLeast('Hi', 3)).toBe(false);

    });
});

// ======================= isStringLengthAtMost function ========================== \\
describe('STR Utility Class - isStringLengthAtMost', () => {

    test('should return true if string length is at most as long as the maximum length', () => {

        expect(_STR_.isStringLengthAtMost('', 0)).toBe(true);
        expect(_STR_.isStringLengthAtMost('Hello', 5)).toBe(true);
        expect(_STR_.isStringLengthAtMost('Hi', 5)).toBe(true);
        expect(_STR_.isStringLengthAtMost('Hello', 10)).toBe(true);


    });

    test('should return false if string length exceeds the maximum length', () => {

        expect(_STR_.isStringLengthAtMost('Hello', 4)).toBe(false);
        expect(_STR_.isStringLengthAtMost('Hi', 1)).toBe(false);

    });
});


// ======================= trimString function ========================== \\
describe('STR Utility Class - trimString', () => {

    test('should trim the string if the input is a string', () => {

        expect(_STR_.trimString('   Hello   ')).toBe('Hello');
        expect(_STR_.trimString('Hello')).toBe('Hello');
        expect(_STR_.trimString('   ')).toBe('');
        expect(_STR_.trimString('  Spaces   in  between  ')).toBe('Spaces   in  between');

    });

    test('should return an empty string if the input is not a string', () => {

        expect(_STR_.trimString(123)).toBe('');
        expect(_STR_.trimString(true)).toBe('');
        expect(_STR_.trimString([])).toBe('');
        expect(_STR_.trimString({})).toBe('');
        expect(_STR_.trimString(null)).toBe('');
        expect(_STR_.trimString(undefined)).toBe('');

    });
});


// ======================= containsDisallowedChar function ========================== \\
describe('STR Utility Class - containsDisallowedChar', () => {

    test('should return the disallowed character if found in the string', () => {

        expect(_STR_.containsDisallowedChar('Hello!', ['!'])).toBe('!');
        expect(_STR_.containsDisallowedChar('Hello@#', ['@', '#'])).toBe('@');
        expect(_STR_.containsDisallowedChar('Hello$#@', ['$', '#'])).toBe('$');

    });

    test('should return null if no disallowed character found in the string', () => {

        expect(_STR_.containsDisallowedChar('Hello', ['!'])).toBeNull();
        expect(_STR_.containsDisallowedChar('', ['@', '#'])).toBeNull();

    });
});


// ======================= containsAllowedChar function ========================== \\
describe('STR Utility Class - containsAllowedChar', () => {

    test('should return the allowed character if found in the string', () => {

        expect(_STR_.containsAllowedChar('Hello!', ['H'])).toBe('H');
        expect(_STR_.containsAllowedChar('Hello@#', ['@', '#'])).toBe('@');
        expect(_STR_.containsAllowedChar('Hello$#@', ['$', '#'])).toBe('$');
    });

    test('should return null if no allowed character found in the string', () => {

        expect(_STR_.containsAllowedChar('1234', ['H'])).toBeNull();
        expect(_STR_.containsAllowedChar('', ['@', '#'])).toBeNull();

    });
});


// ======================= containsBlacklistedWord function ========================== \\
describe('STR Utility Class - containsBlacklistedWord', () => {

    test('should return the blacklisted word if found in the string', () => {

        expect(_STR_.containsBlacklistedWord('Hello world', ['world'])).toBe('world');
        expect(_STR_.containsBlacklistedWord('Hello world!', ['world', 'hello'])).toBe('world');
        expect(_STR_.containsBlacklistedWord('Hello world! Hi there.', ['world', 'hi'])).toBe('world');

    });

    test('should return null if no blacklisted word found in the string', () => {

        expect(_STR_.containsBlacklistedWord('Hello', ['world'])).toBeNull();
        expect(_STR_.containsBlacklistedWord('', ['world', 'hello'])).toBeNull();

    });
});


// ======================= doesStringStartsWith function ========================== \\
describe('STR Utility Class - doesStringStartsWith', () => {

    test('should return true if the string starts with the prefix', () => {

        expect(_STR_.doesStringStartsWith('Hello', 'He')).toBe(true);
        expect(_STR_.doesStringStartsWith('Hello', '')).toBe(true);

    });

    test('should return false if the string does not start with the prefix', () => {

        expect(_STR_.doesStringStartsWith('Hello', 'lo')).toBe(false);
        expect(_STR_.doesStringStartsWith('Hello', undefined)).toBe(false);
        expect(_STR_.doesStringStartsWith('', 'prefix')).toBe(false);
        expect(_STR_.doesStringStartsWith('Hello')).toBe(false);
        expect(_STR_.doesStringStartsWith('Hello', null)).toBe(false);

    });
});


// ======================= doesStringEndsWith function ========================== \\
describe('STR Utility Class - doesStringEndsWith', () => {

    test('should return true if the string ends with the suffix', () => {

        expect(_STR_.doesStringEndsWith('Hello', 'lo')).toBe(true);
        expect(_STR_.doesStringEndsWith('Hello', '')).toBe(true);

    });

    test('should return false if the string does not end with the suffix', () => {

        expect(_STR_.doesStringEndsWith('Hello', 'He')).toBe(false);
        expect(_STR_.doesStringEndsWith('Hello', undefined)).toBe(false);
        expect(_STR_.doesStringEndsWith('', 'suffix')).toBe(false);
        expect(_STR_.doesStringEndsWith('Hello')).toBe(false);

    });
});


// ======================= isSpacesAllowed function ========================== \\
describe('STR Utility Class - isSpacesAllowed', () => {

    test('should return true if spaces are allowed and the string contains spaces', () => {

        expect(_STR_.isSpacesAllowed('Hello World', true)).toBe(true);

    });

    test('should return true if spaces are allowed and the string does not contain spaces', () => {

        expect(_STR_.isSpacesAllowed('HelloWorld', true)).toBe(true);
        expect(_STR_.isSpacesAllowed('', true)).toBe(true);

    });

    test('should return false if spaces are not allowed and the string contains spaces', () => {

        expect(_STR_.isSpacesAllowed('Hello World', false)).toBe(false);

    });

    test('should return true if spaces are not allowed and the string does not contain spaces', () => {

        expect(_STR_.isSpacesAllowed('HelloWorld', false)).toBe(true);
        expect(_STR_.isSpacesAllowed('', false)).toBe(true);

    });
});


describe('STR Utility Class - isWordCountAboveThreshold', () => {

    test('should return true if word count is above the threshold', () => {

        expect(_STR_.isWordCountAboveThreshold('Hello World', 2)).toBe(true);
        expect(_STR_.isWordCountAboveThreshold('Hello World!', 2)).toBe(true);
        expect(_STR_.isWordCountAboveThreshold('One Two Three Four Five', 3)).toBe(true);

    });

    test('should return true if word count is equal to the threshold', () => {

        expect(_STR_.isWordCountAboveThreshold('Hello World', 2)).toBe(true);
        expect(_STR_.isWordCountAboveThreshold('One Two', 2)).toBe(true);

    });

    test('should return false if word count is below the threshold', () => {

        expect(_STR_.isWordCountAboveThreshold('Hello', 2)).toBe(false);
        expect(_STR_.isWordCountAboveThreshold('', 1)).toBe(false);

    });
});


describe('isWordCountBelowThreshold', () => {

    test('should return true if word count is below threshold', () => {

        expect(_STR_.isWordCountBelowThreshold('Hello world', 3)).toBe(true);
        expect(_STR_.isWordCountBelowThreshold('Lorem ipsum dolor sit amet', 6)).toBe(true);
        expect(_STR_.isWordCountBelowThreshold('', 1)).toBe(true);
        expect(_STR_.isWordCountBelowThreshold('Hello world', 2)).toBe(true);

    });

    test('should return false if word count equals or exceeds threshold', () => {

        expect(_STR_.isWordCountBelowThreshold('Hello world', 1)).toBe(false);

    });
});


describe('hasExcessiveRepetitiveChars', () => {
    test('should return false if there are no excessive repetitive characters', () => {
        expect(_STR_.hasExcessiveRepetitiveChars('abcde', 2)).toBe(false); 
        expect(_STR_.hasExcessiveRepetitiveChars('abbcccddddeeeee', 2)).toBe(true);
    });

    test('should return true if there are excessive repetitive characters', () => {
        expect(_STR_.hasExcessiveRepetitiveChars('aabbcc', 2)).toBe(false);
        expect(_STR_.hasExcessiveRepetitiveChars('aaabbbccc', 2)).toBe(true);
        expect(_STR_.hasExcessiveRepetitiveChars('aaaabbbbccccc', 3)).toBe(true);
    });

    test('should return false if string is empty', () => {
        expect(_STR_.hasExcessiveRepetitiveChars('', 2)).toBe(false);
    });

    test('should return false if maximum repetitive characters limit is 1', () => {
        expect(_STR_.hasExcessiveRepetitiveChars('aaaa', 1)).toBe(true);
        expect(_STR_.hasExcessiveRepetitiveChars('ab', 1)).toBe(false);
    });

    test('should return false if maximum repetitive characters limit is greater than string length', () => {
        expect(_STR_.hasExcessiveRepetitiveChars('ab', 3)).toBe(false); 
        expect(_STR_.hasExcessiveRepetitiveChars('a', 2)).toBe(false);
    });
});

