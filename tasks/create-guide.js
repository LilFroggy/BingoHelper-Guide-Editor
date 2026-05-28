import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'node:readline';
import { updateSchema } from './update-schema.js';
import { shouldExecuteTask, GREEN, RESET } from './util.js';

const __fileName = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__fileName);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

export const createGuide = async () => {
    await updateSchema();
    rl.question('\n📝 Enter the name for your new guide: ', (name) => {
        const guideName = name || 'untitled_guide';
        const fileName = `${guideName.toLowerCase().replace(/\s+/g, '_')}.json`;
        const filePath = path.join(__dirname, '../drafts', fileName);

        const boilerplate = {
            "name": guideName,
            "version": 1,
            "data": {
                "stepIndex": 0,
                "steps": []
            }
        };

        try {
            const draftsDir = path.join(__dirname, '../drafts');
            if (!fs.existsSync(draftsDir)) {
                fs.mkdirSync(draftsDir, { recursive: true });
            }
            
            fs.writeFileSync(filePath, JSON.stringify(boilerplate, null, 4));
            console.log(`${GREEN}Success! Created ${fileName} in drafts.${RESET}`);
        } catch (err) {
            console.error("\nError creating guide:", err);
        }

        rl.close();
    });
}

if (shouldExecuteTask(import.meta.url)) createGuide();