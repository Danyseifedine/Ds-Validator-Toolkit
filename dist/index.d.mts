/**
 * Options for specifying the minimum and maximum length of a string.
 */
interface LengthOptions {
    /**
     * The minimum length allowed for the string.
     */
    minStringLength?: number;
    /**
     * The maximum length allowed for the string.
     */
    maxStringLength?: number;
}
/**
 * Error messages that can be customized for different validation failures.
 */
interface ErrorMessages {
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
interface ValidatorOptions extends LengthOptions, ErrorMessages {
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
     * Indicates whether the input string is required (cannot be empty or null).
     */
    isRequired?: boolean;
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
    /**
     * A regular expression pattern or identifier for predefined patterns to match against the input string.
     */
    regexPattern?: RegExp | string;
}
/**
 * Represents the result of string validation.
 */
interface ValidationResult {
    /**
     * Indicates whether the input string is valid according to the validation rules.
     */
    isValid: boolean;
    /**
     * An error message describing why the input string is invalid, if applicable.
     */
    errorMessage?: string;
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
declare function validateString(name: unknown, options?: ValidatorOptions): ValidationResult;

/**
 * Utility class for validating strings based on various criteria.
 */
declare class StringValidator {
    /**
     * Checks if the given value is a string.
     * @param value The value to check.
     * @returns True if the value is a string, false otherwise.
     */
    static isString(value: unknown): value is string;
    /**
     * Validates if a string is required based on the `isRequired` flag.
     * @param value The string value to validate.
     * @param isRequired Indicates if the string is required.
     * @returns True if the string is required and not empty, or not required; false otherwise.
     */
    static isRequired(value: string | undefined | null, isRequired: boolean): boolean;
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
    /**
     * Handles predefined regex patterns by returning the corresponding RegExp object.
     * @param regexPattern The regex pattern to handle, either a RegExp object or a string representing a predefined pattern.
     * @param predefinedPatterns A dictionary containing predefined regex patterns.
     * @returns The corresponding RegExp object if the pattern exists in the predefined patterns, or null otherwise.
     * @throws Error if the specified regex pattern is a string but not found in the predefined patterns.
     */
    static handlePredefinedPattern(regexPattern: RegExp | string, predefinedPatterns: {
        [key: string]: RegExp;
    }): RegExp | null;
}

declare const StrValidator: {
    validateString: typeof validateString;
    Utils: typeof StringValidator;
};

export { StrValidator as LEBIFY_STR };
