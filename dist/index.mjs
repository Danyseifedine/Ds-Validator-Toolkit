// src/validators/regex/regex.ts
var predefinedPatterns = {
  LETTERS_ONLY: /^[A-Za-z]+$/,
  LETTERS_WITH_SPACES: /^[A-Za-z\s]+$/,
  LETTERS_NUMBERS_WITH_SPACES: /^[A-Za-z0-9\s]+$/,
  NUMBERS_ONLY: /^[0-9]+$/,
  ALPHANUMERIC: /^[A-Za-z0-9]+$/,
  EMAIL_ADDRESS: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_NUMBER: /^\+?[0-9]{1,3}[-. (]?\d{3}[-. )]?\d{3}[-. ]?\d{4}$/,
  POSTAL_CODE_US: /(^\d{5}$)|(^\d{5}-\d{4}$)/,
  URL: /^(https?|ftp):\/\/[^\s/$.?#]+\.[^\s]*$/,
  HEX_COLOR_CODE: /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/,
  TIME_24_HOURS_FORMAT: /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/,
  DATE_MM_DD_YYYY: /^(0[1-9]|1[0-2])\/(0[1-9]|[12]\d|3[01])\/\d{4}$/,
  USERNAME: /^[a-zA-Z0-9_]+$/,
  HTML_TAG: /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,
  IP_ADDRESS: /^\b\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}\b$/,
  HTML_COLOR_CODE: /^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/,
  CREDIT_CARD: /^\d{4} \d{4} \d{4} \d{4}$/,
  US_SSN: /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/,
  HTML_HEXADECIMAL_COLOR: /#(?:[0-9a-fA-F]{3}){1,2}\b/,
  MAC_ADDRESS: /^([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})$/,
  ALPHABET_UPPERCASE_ONLY: /^[A-Z]+$/,
  ALPHABET_LOWERCASE_ONLY: /^[a-z]+$/,
  ALPHABET_MIXED_CASE: /^[A-Za-z]+$/,
  NUMBERS_WITH_DECIMALS: /^-?\d+(\.\d+)?$/,
  DATE_YYYY_MM_DD: /^\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01])$/,
  DATE_DD_MM_YYYY: /^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-\d{4}$/,
  TIME_12_HOURS_FORMAT: /^(0?[1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/,
  HTML_COMMENT: /<!--[\s\S]*?-->/,
  US_PHONE_NUMBER: /^(1\s?)?(\([0-9]{3}\)|[0-9]{3})[\s.-]?[0-9]{3}[\s.-]?[0-9]{4}$/,
  INTERNATIONAL_PHONE_NUMBER: /^\+(?:[0-9] ?){6,14}[0-9]$/,
  UK_POSTAL_CODE: /^[A-Za-z]{1,2}\d{1,2}[A-Za-z]?\s*\d[A-Za-z]{2}$/,
  ALPHA_NUMERIC_WITH_SPECIAL_CHARACTERS: /^[a-zA-Z0-9!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]+$/,
  HTML_IMAGE_TAG: /<img\s+(?:[^>]*?\s+)?src=(["'])(.*?)\1/,
  HTML_LINK_TAG: /<a\s+(?:[^>]*?\s+)?href=(["'])(.*?)\1/,
  HTML_SCRIPT_TAG: /<script[^>]*>[\s\S]*?<\/script>/i,
  HTML_STYLE_TAG: /<style[^>]*>[\s\S]*?<\/style>/i
};

// src/utils/utils.ts
var StringValidator = class {
  /**
   * Checks if the given value is a string.
   * @param value The value to check.
   * @returns True if the value is a string, false otherwise.
   */
  static isString(value) {
    return typeof value === "string";
  }
  /**
   * Validates if a string is required based on the `isRequired` flag.
   * @param value The string value to validate.
   * @param isRequired Indicates if the string is required.
   * @returns True if the string is required and not empty, or not required; false otherwise.
   */
  static isRequired(value, isRequired) {
    if (isRequired) {
      return value !== void 0 && value !== null && value.trim() !== "";
    } else {
      return true;
    }
  }
  /**
   * Checks if the length of a string is at least as long as the specified minimum length.
   * @param value The string value to check.
   * @param minLength The minimum length required for the string.
   * @returns True if the string length is at least as long as the minimum length, false otherwise.
   */
  static isStringLengthAtLeast(value, minLength) {
    const length = value.length;
    return length >= minLength;
  }
  /**
   * Checks if the length of a string does not exceed the specified maximum length.
   * @param value The string value to check.
   * @param maxLength The maximum length allowed for the string.
   * @returns True if the string length does not exceed the maximum length, false otherwise.
   */
  static isStringLengthAtMost(value, maxLength) {
    const length = value.length;
    return length <= maxLength;
  }
  /**
   * Trims leading and trailing whitespace from a string.
   * @param value The string value to trim.
   * @returns The trimmed string.
   */
  static trimString(value) {
    if (this.isString(value)) {
      return value.trim();
    }
    return "";
  }
  /**
   * Checks if a string contains any disallowed characters from the specified array.
   * @param value The string value to check.
   * @param arrayOfChar An array of characters that are not allowed in the string.
   * @returns The disallowed character found in the string, or null if no disallowed characters are found.
   */
  static containsDisallowedChar(value, arrayOfChar) {
    const disallowedChar = arrayOfChar.find((char) => value.includes(char));
    return disallowedChar || null;
  }
  /**
   * Checks if a string contains any allowed characters from the specified array.
   * @param value The string value to check.
   * @param arrayOfChar An array of characters that are allowed in the string.
   * @returns The allowed character found in the string, or null if no allowed characters are found.
   */
  static containsAllowedChar(value, arrayOfChar) {
    const allowedChar = arrayOfChar.find((char) => value.includes(char));
    return allowedChar || null;
  }
  /**
   * Checks if a string contains any blacklisted words from the specified array.
   * @param value The string value to check.
   * @param blacklist An array of blacklisted words.
   * @returns The blacklisted word found in the string, or null if no blacklisted words are found.
   */
  static containsBlacklistedWord(value, blacklist) {
    const lowercasedValue = value.toLowerCase();
    const blacklistedWord = blacklist.find((word) => lowercasedValue.includes(word.toLowerCase()));
    return blacklistedWord || null;
  }
  /**
   * Checks if a string starts with the specified prefix.
   * @param value The string value to check.
   * @param prefix The prefix to check for.
   * @returns True if the string starts with the prefix, false otherwise.
   */
  static doesStringStartsWith(value, prefix) {
    return prefix ? value.startsWith(prefix) : true;
  }
  /**
   * Checks if a string ends with the specified suffix.
   * @param value The string value to check.
   * @param suffix The suffix to check for.
   * @returns True if the string ends with the suffix, false otherwise.
   */
  static doesStringEndsWith(value, suffix) {
    return suffix ? value.endsWith(suffix) : true;
  }
  /**
   * Checks if spaces are allowed in the string.
   * @param value The string value to check.
   * @param allowSpaces Indicates if spaces are allowed.
   * @returns True if spaces are allowed or if the string doesn't contain any spaces, false otherwise.
   */
  static isSpacesAllowed(value, allowSpaces) {
    return allowSpaces ? true : !value.includes(" ");
  }
  /**
   * Checks if the word count in a string is above the specified threshold.
   * @param value The string value to check.
   * @param minWords The minimum number of words allowed in the string.
   * @returns True if the word count in the string is above the threshold, false otherwise.
   */
  static isWordCountAboveThreshold(value, minWords) {
    const words = value.trim().split(/\s+/);
    return words.length >= minWords;
  }
  /**
   * Checks if the word count in a string is below the specified threshold.
   * @param value The string value to check.
   * @param maxWords The maximum number of words allowed in the string.
   * @returns True if the word count in the string is below the threshold, false otherwise.
   */
  static isWordCountBelowThreshold(value, maxWords) {
    const words = value.trim().split(/\s+/);
    return words.length <= maxWords;
  }
  /**
   * Checks if the string contains consecutive repetitive characters exceeding the specified limit.
   * @param value The string value to check.
   * @param maxRepetitiveChars The maximum number of consecutive repetitive characters allowed in the string.
   * @returns True if the string contains excessive repetitive characters, false otherwise.
   */
  static hasExcessiveRepetitiveChars(value, maxRepetitiveChars) {
    for (let i = 0; i < value.length; i++) {
      const currentChar = value[i];
      let consecutiveCount = 1;
      while (i + 1 < value.length && value[i + 1] === currentChar) {
        consecutiveCount++;
        i++;
      }
      if (consecutiveCount > maxRepetitiveChars) {
        return true;
      }
    }
    return false;
  }
  /**
   * Handles predefined regex patterns by returning the corresponding RegExp object.
   * @param regexPattern The regex pattern to handle, either a RegExp object or a string representing a predefined pattern.
   * @param predefinedPatterns A dictionary containing predefined regex patterns.
   * @returns The corresponding RegExp object if the pattern exists in the predefined patterns, or null otherwise.
   * @throws Error if the specified regex pattern is a string but not found in the predefined patterns.
   */
  static handlePredefinedPattern(regexPattern, predefinedPatterns2) {
    if (typeof regexPattern === "string" && predefinedPatterns2[regexPattern]) {
      return predefinedPatterns2[regexPattern];
    } else if (typeof regexPattern === "string" && !predefinedPatterns2[regexPattern]) {
      throw new Error(`The regex pattern '${regexPattern}' is not available in the predefined patterns.`);
    }
    return regexPattern instanceof RegExp ? regexPattern : null;
  }
};

// src/validators/string-validator.ts
function validateString(name, options = {}) {
  const {
    // Indicates whether the string is required.
    isRequired = true,
    // The minimum allowed length of the string.
    minStringLength,
    // The maximum allowed length of the string.
    maxStringLength,
    // An array of allowed characters.
    allowedChars,
    // An array of disallowed characters.
    disallowedChars,
    // An array of blacklisted words.
    blacklistWords,
    // The character used to replace spaces.
    wordSeparator = " ",
    // The pattern the string must start with.
    startsWithPattern,
    // The pattern the string must end with.
    endsWithPattern,
    // Indicates whether spaces are allowed in the string.
    allowSpaces = true,
    // The minimum allowed word count.
    minWordsCount,
    // The maximum allowed word count.
    maxWordsCount,
    // The maximum allowed consecutive repetitive characters.
    maxRepetitiveCharsLimit = Infinity,
    // A custom regex pattern or predefined pattern key.
    regexPattern,
    // A custom validation function.
    customValidationFn,
    // Error message for when the input must be a string but is not.
    isStringError,
    // Error message for when the input length does not meet the specified requirements.
    lengthError,
    // Error message for when custom validation fails.
    customError,
    // Error message for when the input contains disallowed characters.
    allowedCharsError,
    // Error message for when the input contains disallowed characters.
    disallowedCharsError,
    // Error message for when the input contains blacklisted words.
    blacklistWordsError,
    // Error message for when the input is required but missing.
    isRequiredError,
    // Error message for when the input does not start with the specified pattern.
    startsWithError,
    // Error message for when the input does not end with the specified pattern.
    endsWithError,
    // Error message for when spaces are not allowed in the input string.
    allowedSpacesError,
    // Error message for when the input does not contain the minimum required number of words.
    minWordsError,
    // Error message for when the input exceeds the maximum allowed number of words.
    maxWordsError,
    // Error message for when the input contains consecutive repetitive characters exceeding the limit.
    maxRepetitiveCharsError,
    // Error message for when the input does not match the specified regex pattern.
    regexPatternError
  } = options;
  const validOptions = {
    isRequired: true,
    minStringLength: void 0,
    maxStringLength: void 0,
    allowedChars: void 0,
    disallowedChars: void 0,
    blacklistWords: void 0,
    wordSeparator: " ",
    startsWithPattern: void 0,
    endsWithPattern: void 0,
    allowSpaces: true,
    minWordsCount: void 0,
    maxWordsCount: void 0,
    maxRepetitiveCharsLimit: Infinity,
    regexPattern: void 0,
    customValidationFn: void 0,
    isStringError,
    lengthError,
    customError,
    allowedCharsError,
    disallowedCharsError,
    blacklistWordsError,
    isRequiredError,
    startsWithError,
    endsWithError,
    allowedSpacesError,
    minWordsError,
    maxWordsError,
    maxRepetitiveCharsError,
    regexPatternError
  };
  if (!StringValidator.isString(name)) {
    return {
      isValid: false,
      errorMessage: isStringError || "Name must be a string"
    };
  }
  const invalidOptions = Object.keys(options).filter((key) => !(key in validOptions));
  if (invalidOptions.length > 0) {
    const availableOptions = Object.keys(validOptions).join("\n- ");
    throw new Error(`Invalid option(s):
- ${invalidOptions.join("\n- ")}

Available options:
- ${availableOptions}`);
  }
  const trimmedName = StringValidator.trimString(name);
  let modifiedName = trimmedName.replace(/\s+/g, wordSeparator);
  let updatedRegexPattern = null;
  if (regexPattern) {
    updatedRegexPattern = StringValidator.handlePredefinedPattern(regexPattern, predefinedPatterns);
  }
  const validationRules = [
    // Check if name is required
    {
      condition: isRequired && !StringValidator.isRequired(trimmedName, isRequired),
      message: isRequiredError || "Name is required"
    },
    // Check for allowed characters
    {
      condition: allowedChars && !StringValidator.containsAllowedChar(trimmedName, allowedChars),
      message: allowedCharsError || "Name contains disallowed characters"
    },
    // Check for minimum string length
    {
      condition: minStringLength && !StringValidator.isStringLengthAtLeast(trimmedName, minStringLength),
      message: lengthError || `Name must be at least ${minStringLength} characters long`
    },
    // Check for maximum string length
    {
      condition: maxStringLength && !StringValidator.isStringLengthAtMost(trimmedName, maxStringLength),
      message: lengthError || `Name must be at most ${maxStringLength} characters long`
    },
    // Check against custom regex pattern
    {
      condition: updatedRegexPattern && !updatedRegexPattern.test(trimmedName),
      message: regexPatternError || "Invalid input pattern"
    },
    // Check for disallowed characters
    {
      condition: disallowedChars && StringValidator.containsDisallowedChar(trimmedName, disallowedChars),
      message: disallowedCharsError || "Name contains disallowed characters"
    },
    // Custom validation function
    {
      condition: customValidationFn && !customValidationFn(trimmedName),
      message: customError || "Custom validation failed"
    },
    // Check for blacklisted words
    {
      condition: blacklistWords && StringValidator.containsBlacklistedWord(trimmedName, blacklistWords),
      message: blacklistWordsError || "Name contains blacklisted words"
    },
    // Check if name starts with specified pattern
    {
      condition: startsWithPattern && !StringValidator.doesStringStartsWith(trimmedName, startsWithPattern),
      message: startsWithError || `Name must start with ${startsWithPattern}`
    },
    // Check if name ends with specified pattern
    {
      condition: endsWithPattern && !StringValidator.doesStringEndsWith(trimmedName, endsWithPattern),
      message: endsWithError || `Name must end with '${endsWithPattern}'`
    },
    // Check if spaces are allowed in the name
    {
      condition: !StringValidator.isSpacesAllowed(trimmedName, allowSpaces),
      message: allowedSpacesError || "Spaces are not allowed in the name"
    },
    // Check if word count is above the threshold
    {
      condition: minWordsCount && !StringValidator.isWordCountAboveThreshold(trimmedName, minWordsCount),
      message: minWordsError || `Name must contain at least ${minWordsCount} words`
    },
    // Check if word count is below the threshold
    {
      condition: maxWordsCount && !StringValidator.isWordCountBelowThreshold(trimmedName, maxWordsCount),
      message: maxWordsError || `Name must contain at most ${maxStringLength} words`
    },
    // Check for excessive repetitive characters
    {
      condition: StringValidator.hasExcessiveRepetitiveChars(trimmedName, maxRepetitiveCharsLimit),
      message: maxRepetitiveCharsError || `Name contains consecutive repetitive characters exceeding the limit of ${maxRepetitiveCharsLimit}`
    }
  ];
  for (const rule of validationRules) {
    if (rule.condition) {
      return {
        isValid: false,
        errorMessage: rule.message
      };
    }
  }
  return {
    isValid: true,
    validatedInput: modifiedName
  };
}

// src/index.ts
var validator = {
  validateString,
  Utils: StringValidator
};
export {
  validator as LEBIFY
};
