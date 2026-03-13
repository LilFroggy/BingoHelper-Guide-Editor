import fetch from "node-fetch";
import { readFileSync, writeFileSync } from "fs";

const RED = "\x1b[31m";
const YELLOW = "\u001b[33m"
const GREEN = "\x1b[32m";
const RESET = "\x1b[0m";

export const GUIDE_SCHEMA_PATH = "./schemas/guide.schema.json";

export const getDataFromURL = async (url) => {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    return data;
}

export const getSchema = () => JSON.parse(readFileSync(GUIDE_SCHEMA_PATH, "utf8"));

export const setSchema = (schema) => writeFileSync(GUIDE_SCHEMA_PATH, JSON.stringify(schema, null, "\t"));

/**
 * 
 * @param {String} definition - The name of the definition e.g. "ItemIds" or "Skills"
 * @param {Array} list - The list of acceptable values to set the enum to
 */
export const updateSchemaDefinitionEnum = async (definition, list) => {
    const schema = getSchema();
    const old = schema.definitions[definition].enum
    const then = old ? old.length : 0;
    const now = list.length;
    schema.definitions[definition].enum = list;
    setSchema(schema);
    let prefix = "=";
    if (now > then) prefix = `${GREEN}+${RESET}`;
    if (now < then) prefix = `${RED}-${RESET}`;
    console.log(`${prefix} ${definition}: ${then} -> ${now}`);
}

export const to_snake_case = (string) => string.toLowerCase().replaceAll(" ", "_");

export const toRoman = (num) => {
    const romans = [
        ["M", 1000],
        ["CM", 900],
        ["D", 500],
        ["CD", 400],
        ["C", 100],
        ["XC", 90],
        ["L", 50],
        ["XL", 40],
        ["X", 10],
        ["IX", 9],
        ["V", 5],
        ["IV", 4],
        ["I", 1],
    ];

    let result = "";
    for (const [symbol, value] of romans) {
        while (num >= value) {
            result += symbol;
            num -= value;
        }
    }
    return result;
}

export const toTitleCase = (str) => {
    return str
        .toLowerCase()
        .split("_")
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(" ");
}