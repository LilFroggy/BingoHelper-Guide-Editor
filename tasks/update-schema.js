import fs from 'fs';
import path from 'path';
import { updateEnums } from './update-enums.js';
import { shouldExecuteTask, GREEN, YELLOW, RESET, RED } from './util.js';

const SCHEMA_URL = "https://raw.githubusercontent.com/LilFroggy/BingoHelper-REPO/master/schemas/guide.schema.json";
const LOCAL_SCHEMA_PATH = path.join(process.cwd(), 'schemas/guide.schema.json');

export const updateSchema = async () => {
    console.log(`${YELLOW}Checking for schema updates...${RESET}`);

    try {
        // maybe use etags
        const response = await fetch(SCHEMA_URL);
        
        if (!response.ok) throw new Error('Network response was not ok');
        
        const remoteSchema = await response.json();
        
        fs.writeFileSync(LOCAL_SCHEMA_PATH, JSON.stringify(remoteSchema, null, "\t"));
        console.log(`${GREEN}Schema is up to date.${RESET}`);
        await updateEnums();
    } catch (error) {
        console.log(`${RED}Could not reach GitHub. Using local schema as fallback.${RESET}`);
    }
}

if (shouldExecuteTask(import.meta.url)) updateSchema();