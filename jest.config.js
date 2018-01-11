module.exports = {
    "moduleFileExtensions": [
        "ts",
        "tsx",
        "js",
        "jsx",
        "json"
    ],
    "testRegex": "(/__tests__/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    "testPathIgnorePatterns": [
        "<rootDir>/(node_modules|dist)/"
    ],
    "transform": {
        "^.+\\.tsx?$": "ts-jest"
    },
    "verbose": true,
    "mapCoverage": true,
    "moduleNameMapper": {
        "@/(.*)": "<rootDir>/src/$1"
    }
};