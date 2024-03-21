/**
 * Options for specifying the minimum and maximum length of a string.
 */
interface LengthOptions {
    /**
     * The minimum length allowed for the string.
     */
    minLength?: number;
    /**
     * The maximum length allowed for the string.
     */
    maxLength?: number;
}
/**
 * Requirement option
 */
interface Requirement {
    /**
     * Indicates whether the input string is required (cannot be empty or null).
     */
    isRequired?: boolean;
}
/**
 * Regex option
 */
interface Regex {
    /**
     * A regular expression pattern or identifier for predefined patterns to match against the input string.
     */
    regexPattern?: RegExp | string;
}
/**
 * RESULT
 */
interface Result {
    /**
        * Indicates whether the input string is valid according to the validation rules.
        */
    isValid: boolean;
    /**
     * An error message describing why the input string is invalid, if applicable.
     */
    errorMessage?: string;
}

/**
 * Error messages that can be customized for different validation failures.
 */
interface StringErrorMessage {
    /**
     * Error message for when the input is not a string.
     */
    isStringError?: string;
    /**
     * Error message for when the input string length does not meet the requirements.
     */
    lengthError?: string;
    /**
     * Error message for when custom validation fails.
     */
    customError?: string;
    /**
     * Error message for when the input contains disallowed characters.
     */
    allowedCharsError?: string;
    /**
     * Error message for when the input contains disallowed characters.
     */
    disallowedCharsError?: string;
    /**
     * Error message for when the input contains blacklisted words.
     */
    blacklistWordsError?: string;
    /**
     * Error message for when the input is required but missing.
     */
    isRequiredError?: string;
    /**
     * Error message for when the input does not start with the specified pattern.
     */
    startsWithError?: string;
    /**
     * Error message for when the input does not end with the specified pattern.
     */
    endsWithError?: string;
    /**
     * Error message for when spaces are not allowed in the input string.
     */
    allowedSpacesError?: string;
    /**
     * Error message for when the input does not contain the minimum required number of words.
     */
    minWordsError?: string;
    /**
     * Error message for when the input exceeds the maximum allowed number of words.
     */
    maxWordsError?: string;
    /**
     * Error message for when the input contains consecutive repetitive characters exceeding the limit.
     */
    maxRepetitiveCharsError?: string;
    /**
     * Error message for when the input does not match the specified regex pattern.
     */
    regexPatternError?: string;
}
/**
 * Options for customizing the string validation behavior.
 */
interface StringValidatorOptions extends LengthOptions, StringErrorMessage, Regex, Requirement {
    /**
     * A function to perform custom validation on the input string.
     * @param input The input string to validate.
     * @returns true if the input is considered valid; otherwise, false.
     */
    customValidationFn?: (input: string) => boolean;
    /**
     * An array of allowed characters for the input string.
     */
    allowedChars?: string[];
    /**
     * An array of disallowed characters for the input string.
     */
    disallowedChars?: string[];
    /**
     * An array of blacklisted words. If any of these words are found in the input string, validation fails.
     */
    blacklistWords?: string[];
    /**
     * The minimum number of words required in the input string.
     */
    minWordsCount?: number;
    /**
     * A pattern that the input string must start with.
     */
    startsWithPattern?: string;
    /**
     * A pattern that the input string must end with.
     */
    endsWithPattern?: string;
    /**
     * Specifies whether spaces are allowed in the input string.
     */
    allowSpaces?: boolean;
    /**
     * The maximum number of words allowed in the input string.
     */
    maxWordsCount?: number;
    /**
     * The character used to separate words in the input string.
     */
    wordSeparator?: string;
    /**
     * The maximum number of consecutive repetitive characters allowed in the input string.
     */
    maxRepetitiveCharsLimit?: number;
}
/**
 * Represents the result of string validation.
 */
interface StringValidationResult extends Result {
    /**
     * The validated input string after applying modifications or transformations, if any.
     */
    validatedInput?: string;
}

/**
 * Destructure the options object for string validation.
 *
 * @property {boolean} [isRequired=true] - Indicates whether the string is required.
 *
 * @property {number} [minStringLength] - The minimum allowed length of the string.
 *
 * @property {number} [maxStringLength] - The maximum allowed length of the string.
 *
 * @property {string[]} [allowedChars] - An array of allowed characters.
 *
 * @property {string[]} [disallowedChars] - An array of disallowed characters.
 *
 * @property {string[]} [blacklistWords] - An array of blacklisted words.
 *
 * @property {string} [wordSeparator=' '] - The character used to replace spaces.
 *
 * @property {string} [startsWithPattern] - The pattern the string must start with.
 *
 * @property {string} [endsWithPattern] - The pattern the string must end with.
 *
 * @property {boolean} [allowSpaces=true] - Indicates whether spaces are allowed in the string.
 *
 * @property {number} [minWordsCount] - The minimum allowed word count.
 *
 * @property {number} [maxWordsCount] - The maximum allowed word count.
 *
 * @property {number} [maxRepetitiveCharsLimit=Infinity] - The maximum allowed consecutive repetitive characters.
 *
 * @property {RegExp|string} [regexPattern] - A custom regex pattern or predefined pattern key.
 *
 * @property {Function} [customValidationFn] - A custom validation function.
 *
 * @property {string} [isStringError] - Error message for when the input is not a string.
 *
 * @property {string} [lengthError] - Error message for when the input length does not meet the requirements.
 *
 * @property {string} [customError] - Error message for when custom validation fails.
 *
 * @property {string} [allowedCharsError] - Error message for when the input contains disallowed characters.
 *
 * @property {string} [disallowedCharsError] - Error message for when the input contains disallowed characters.
 *
 * @property {string} [blacklistWordsError] - Error message for when the input contains blacklisted words.
 *
 * @property {string} [isRequiredError] - Error message for when the input is required but missing.
 *
 * @property {string} [startsWithError] - Error message for when the input does not start with the specified pattern.
 *
 * @property {string} [endsWithError] - Error message for when the input does not end with the specified pattern.
 *
 * @property {string} [allowedSpacesError] - Error message for when spaces are not allowed in the input string.
 *
 * @property {string} [minWordsError] - Error message for when the input does not contain the minimum required number of words.
 *
 * @property {string} [maxWordsError] - Error message for when the input exceeds the maximum allowed number of words.
 *
 * @property {string} [maxRepetitiveCharsError] - Error message for when the input contains consecutive repetitive characters exceeding the limit.
 *
 * @property {string} [regexPatternError] - Error message for when the input does not match the specified regex pattern.
 */
declare function validateString(name: unknown, options?: StringValidatorOptions): StringValidationResult;

/**
 * Utility class for validating strings based on various criteria.
 */
declare class STR {
    /**
     * Checks if the given value is a string.
     * @param value The value to check.
     * @returns True if the value is a string, false otherwise.
     */
    static isString(value: unknown): value is string;
    /**
     * Checks if a string is required and not empty.
     * @param value The string value to check.
     * @param isRequired Indicates if the string is required.
     * @returns True if the string is required and not empty, or not required; false otherwise.
     */
    static isStringRequired(value: string | undefined | null, isRequired: boolean): boolean;
    /**
     * Checks if the length of a string is at least as long as the specified minimum length.
     * @param value The string value to check.
     * @param minLength The minimum length required for the string.
     * @returns True if the string length is at least as long as the minimum length, false otherwise.
     */
    static isStringLengthAtLeast(value: string, minLength: number): boolean;
    /**
     * Checks if the length of a string does not exceed the specified maximum length.
     * @param value The string value to check.
     * @param maxLength The maximum length allowed for the string.
     * @returns True if the string length does not exceed the maximum length, false otherwise.
     */
    static isStringLengthAtMost(value: string, maxLength: number): boolean;
    /**
     * Trims leading and trailing whitespace from a string.
     * @param value The string value to trim.
     * @returns The trimmed string.
     */
    static trimString(value: unknown): string;
    /**
     * Checks if a string contains any disallowed characters from the specified array.
     * @param value The string value to check.
     * @param arrayOfChar An array of characters that are not allowed in the string.
     * @returns The disallowed character found in the string, or null if no disallowed characters are found.
     */
    static containsDisallowedChar(value: string, arrayOfChar: string[]): string | null;
    /**
     * Checks if a string contains any allowed characters from the specified array.
     * @param value The string value to check.
     * @param arrayOfChar An array of characters that are allowed in the string.
     * @returns The allowed character found in the string, or null if no allowed characters are found.
     */
    static containsAllowedChar(value: string, arrayOfChar: string[]): string | null;
    /**
     * Checks if a string contains any blacklisted words from the specified array.
     * @param value The string value to check.
     * @param blacklist An array of blacklisted words.
     * @returns The blacklisted word found in the string, or null if no blacklisted words are found.
     */
    static containsBlacklistedWord(value: string, blacklist: string[]): string | null;
    /**
     * Checks if a string starts with the specified prefix.
     * @param value The string value to check.
     * @param prefix The prefix to check for.
     * @returns True if the string starts with the prefix, false otherwise.
     */
    static doesStringStartsWith(value: string, prefix: string | undefined): boolean;
    /**
     * Checks if a string ends with the specified suffix.
     * @param value The string value to check.
     * @param suffix The suffix to check for.
     * @returns True if the string ends with the suffix, false otherwise.
     */
    static doesStringEndsWith(value: string, suffix: string | undefined): boolean;
    /**
     * Checks if spaces are allowed in the string.
     * @param value The string value to check.
     * @param allowSpaces Indicates if spaces are allowed.
     * @returns True if spaces are allowed or if the string doesn't contain any spaces, false otherwise.
     */
    static isSpacesAllowed(value: string, allowSpaces: boolean): boolean;
    /**
     * Checks if the word count in a string is above the specified threshold.
     * @param value The string value to check.
     * @param minWords The minimum number of words allowed in the string.
     * @returns True if the word count in the string is above the threshold, false otherwise.
     */
    static isWordCountAboveThreshold(value: string, minWords: number): boolean;
    /**
     * Checks if the word count in a string is below the specified threshold.
     * @param value The string value to check.
     * @param maxWords The maximum number of words allowed in the string.
     * @returns True if the word count in the string is below the threshold, false otherwise.
     */
    static isWordCountBelowThreshold(value: string, maxWords: number): boolean;
    /**
     * Checks if the string contains consecutive repetitive characters exceeding the specified limit.
     * @param value The string value to check.
     * @param maxRepetitiveChars The maximum number of consecutive repetitive characters allowed in the string.
     * @returns True if the string contains excessive repetitive characters, false otherwise.
     */
    static hasExcessiveRepetitiveChars(value: string, maxRepetitiveChars: number): boolean;
}

declare class NUM {
    /**
     * Checks if the provided value is a number.
     * @param value The value to check.
     * @returns True if the value is a number, false otherwise.
     */
    static isNumber(value: unknown): value is number;
    /**
     * Checks if a numeric value is required based on the `isRequired` flag.
     * @param value The numeric value to validate.
     * @param isRequired Indicates if the numeric value is required.
     * @returns True if the numeric value is required and not empty, or not required; false otherwise.
     */
    static isNumberRequired(value: number | undefined | null, isRequired: boolean): boolean;
    /**
     * Checks if a numeric value is greater than or equal to a minimum value.
     * @param value The numeric value to check.
     * @param minValue The minimum allowed value.
     * @returns True if the value is greater than or equal to the minimum value, false otherwise.
     */
    static isMinValue(value: number, minValue: number): boolean;
    /**
     * Checks if a numeric value is less than or equal to a maximum value.
     * @param value The numeric value to check.
     * @param maxValue The maximum allowed value.
     * @returns True if the value is less than or equal to the maximum value, false otherwise.
     */
    static isMaxValue(value: number, maxValue: number): boolean;
    /**
     * Checks if a numeric value is an integer.
     * @param value The numeric value to check.
     * @returns True if the value is an integer, false otherwise.
     */
    static isInteger(value: number, isInteger: boolean): boolean;
    /**
     * Checks if a numeric value is zero based on the allowZero flag.
     * @param value The numeric value to check.
     * @param allowZero Flag indicating whether zero is allowed.
     * @returns True if the value is zero and zero is allowed, false otherwise.
     */
    static allowZero(value: number, allowZero?: boolean): boolean;
    /**
     * Checks if a numeric value is negative based on the allowNegative flag.
     * @param value The numeric value to check.
     * @param allowNegative Flag indicating whether negative numbers are allowed.
     * @returns True if the value is negative and negative numbers are allowed, false otherwise.
     */
    static allowNegative(value: number, allowNegative?: boolean): boolean;
    /**
     * Checks if a numeric value is positive based on the allowPositive flag.
     * @param value The numeric value to check.
     * @param allowPositive Flag indicating whether positive numbers are allowed.
     * @returns True if the value is positive and positive numbers are allowed, false otherwise.
     */
    static allowPositive(value: number, allowPositive?: boolean): boolean;
    /**
     * Checks if a numeric value must have a decimal component based on the allowDecimal flag.
     * @param value The numeric value to check.
     * @param allowDecimal Flag indicating whether a decimal component is required.
     * @returns True if the value has a decimal component and it's required, false otherwise.
     */
    static mustHaveDecimal(value: number, allowDecimal?: boolean): boolean;
    /**
     * Checks if the number of decimal places in a numeric value exceeds the specified maximum.
     * @param value The numeric value to check.
     * @param maxDecimalPlaces The maximum number of decimal places allowed.
     * @returns True if the number of decimal places does not exceed the maximum, false otherwise.
     */
    static isValidMaxDecimalPlaces(value: number, maxDecimalPlaces: number): boolean;
    /**
     * Checks if the number of decimal places in a numeric value meets the specified minimum.
     * @param value The numeric value to check.
     * @param minDecimalPlaces The minimum number of decimal places allowed.
     * @returns True if the number of decimal places meets or exceeds the minimum, false otherwise.
     */
    static isValidMinDecimalPlaces(value: number, minDecimalPlaces: number): boolean;
    /**
     * Checks if a numeric value is in binary notation when allowBinary is true.
     * @param value The numeric value to check.
     * @param allowBinary Flag indicating whether binary notation is allowed.
     * @returns True if the value is in binary notation and allowed, false otherwise.
     */
    static onlyBinary(value: number, allowBinary: boolean): boolean;
}

/**
 * Error message for when a required number is not provided.
 */
interface NumberErrorMessage {
    /**
     * Error message for when a required number is not provided.
     */
    requiredError?: string;
    /**
     * Error message for when the number is below the minimum allowed value.
     */
    minValueError?: string;
    /**
     * Error message for when the number is above the maximum allowed value.
     */
    maxValueError?: string;
    /**
     * Error message for when the number is not an integer.
     */
    integerError?: string;
    /**
     * Error message for when the number is negative.
     */
    negativeError?: string;
    /**
     * Error message for when the number is positive.
     */
    positiveError?: string;
    /**
     * Error message for when the number is zero.
     */
    zeroError?: string;
    /**
     * Error message for when a decimal value is not provided.
     */
    decimalError?: string;
    /**
     * Error message for when the provided value exceeds the maximum allowed decimal places.
     */
    maxDecimalError?: string;
    /**
     * Error message for when the provided value does not meet the minimum required decimal places.
     */
    minDecimalError?: string;
    /**
     * Error message for when the provided value is not a binary number.
     */
    binaryError?: string;
}
/**
 * Options for validating numeric values.
 */
interface NumberValidatorOptions extends Requirement, NumberErrorMessage {
    /**
     * The minimum allowed numeric value.
     */
    minValue?: number;
    /**
     * The maximum allowed numeric value.
     */
    maxValue?: number;
    /**
     * Indicates whether the numeric value must be an integer.
     */
    isInteger?: boolean;
    /**
     * Indicates whether negative numeric values are allowed.
     */
    allowNegative?: boolean;
    /**
     * Indicates whether positive numeric values are allowed.
     */
    allowPositive?: boolean;
    /**
     * Indicates whether the numeric value zero is allowed.
     */
    allowZero?: boolean;
    /**
     * Indicates whether decimal values are allowed.
     */
    onlyDecimal?: boolean;
    /**
     * The maximum number of decimal places allowed.
     */
    maxDecimalPlaces?: number;
    /**
     * The minimum number of decimal places required.
     */
    minDecimalPlaces?: number;
    /**
     * Indicates whether Binary values are allowed.
     */
    onlyBinary?: boolean;
}
/**
 * Represents the result of numeric value validation.
 */
interface NumberValidationResult extends Result {
    /**
     * The validated numeric value.
     */
    returnedNumber?: number;
}

/**
 * Validates a numeric value based on specified options.
 * @param {number} value - The numeric value to validate.
 *
 * @param {NumberValidatorOptions} [options={}] - Validation options.
 *
 * @property {boolean} [isRequired=true] - Indicates if the number is required.
 *
 * @property {number} [minValue=Infinity] - The minimum allowed numeric value.
 *
 * @property {number} [maxValue=Infinity] - The maximum allowed numeric value.
 *
 * @property {boolean} [isInteger=false] - Indicates if the number must be an integer.
 *
 * @property {boolean} [allowNegative=true] - Indicates if negative numbers are allowed.
 *
 * @property {boolean} [allowPositive=true] - Indicates if positive numbers are allowed.
 *
 * @property {boolean} [allowZero=true] - Indicates if zero is allowed.
 *
 * @property {number} [maxDecimalPlaces] - The maximum number of decimal places allowed.
 *
 * @property {number} [minDecimalPlaces] - The minimum number of decimal places required.
 *
 * @property {boolean} [onlyDecimal] - Flag indicating whether decimal numbers are allowed.
 *
 * @property {boolean} [onlyBinary] - Flag indicating whether binary number are allowed
 *
 * @property {string} [requiredError] - Error message for when a required number is not provided.
 *
 * @property {string} [minValueError] - Error message for when the number is below the minimum allowed value.
 *
 * @property {string} [maxValueError] - Error message for when the number is above the maximum allowed value.
 *
 * @property {string} [integerError] - Error message for when the number is not an integer.
 *
 * @property {string} [negativeError] - Error message for when a negative number is not allowed.
 *
 * @property {string} [positiveError] - Error message for when a positive number is not allowed.
 *
 * @property {string} [zeroError] - Error message for when zero is not allowed.
 *
 * @property {string} [decimalError] - Error message for when a numeric value is not a decimal number.
 *
 * @property {string} [maxDecimalError] - Error message for when a numeric value exceeds the maximum allowed decimal places.
 *
 * @property {string} [minDecimalError] - Error message for when a numeric value falls below the minimum required decimal places.
 *
 * @property {string} [binaryError] - Error message for when a numeric value is not a binary number.
 *
 * @returns {NumberValidationResult} The validation result.
 */
declare function validateNumber(value: number, options?: NumberValidatorOptions): NumberValidationResult;

export { validateNumber as VALIDATE_NUMBER, validateString as VALIDATE_STRING, NUM as _NUM_, STR as _STR_ };
