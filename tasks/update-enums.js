import { shouldExecuteTask, getDataFromURL, to_snake_case, updateSchemaDefinitionEnum, GREEN, RESET, YELLOW, RED } from "./util.js";

const ITEMS_URL = "https://api.hypixel.net/v2/resources/skyblock/items";
const SKILLS_URL = "https://api.hypixel.net/v2/resources/skyblock/skills";
const COLLECTIONS_URL = "https://api.hypixel.net/v2/resources/skyblock/collections";
//const BAZAAR_URL = "https://api.hypixel.net/v2/skyblock/bazaar";

const mobTypesEnum = [
    "airborne",
    "animal",
    "aquatic",
    "arcane",
    "arthropod",
    "construct",
    "cubic",
    "elusive",
    "ender",
    "frozen",
    "glacial",
    "humanoid",
    "infernal",
    "magmatic",
    "mythological",
    "pest",
    "shielded",
    "skeletal",
    "spooky",
    "subterranean",
    "undead",
    "wither",
    "woodland"
];

const updaters = {
    async items() {
        const data = await getDataFromURL(ITEMS_URL);
        const itemIds = data.items.map(item => item.id);
        const minionIds = [...new Set(data.items.map(item => item.generator).filter(Boolean))];
        
        updateSchemaDefinitionEnum("ItemIds", itemIds);
        updateSchemaDefinitionEnum("MinionIds", minionIds);
    },

    async skills() {
        const data = await getDataFromURL(SKILLS_URL);
        const skills = Object.keys(data.skills).map(skill => to_snake_case(skill));
        updateSchemaDefinitionEnum("Skills", skills);
    },

    async collections() {
        const data = await getDataFromURL(COLLECTIONS_URL);
        const collections = Object.values(data.collections).flatMap(category => 
            Object.values(category.items).map(collection => to_snake_case(collection.name))
        );
        updateSchemaDefinitionEnum("Collections", collections);
    },

    async mobTypes() {
        updateSchemaDefinitionEnum("MobTypes", mobTypesEnum);
    }

    /*async enchants() {
        const data = await getDataFromURL(BAZAAR_URL);
        const enchants = Object.keys(data.products)
            .filter(id =>
                id.startsWith("ENCHANTMENT_")
            )
            .map(id => {
                // Remove ENCHANTMENT_
                return id.replace("ENCHANTMENT_", "");
            })
            .filter(Boolean);
        updateSchemaDefinitionEnum("Enchants", enchants);
    }*/
};

export const updateEnums = async () => {
    console.log(`${YELLOW}Updating enums...${RESET}`);
    
    const tasks = Object.values(updaters).map(fn => fn());
    
    try {
        await Promise.all(tasks);
        console.log(`${GREEN}Enums are up to date.${RESET}`);
    } catch (error) {
        console.error(`${RED}Failed to update one or more enums:${RESET}`, error);
    }
};

if (shouldExecuteTask(import.meta.url)) updateEnums();