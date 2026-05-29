import { exec, execSync } from 'child_process';
import { shouldExecuteTask, GREEN, RED, RESET, YELLOW } from './util.js';

const REPO_URL = "https://github.com/LilFroggy/BingoHelper-Guide-Editor.git";

export const updateEditor = () => {
    try {
        execSync('git --version', { stdio: 'ignore' });
    } catch (e) {
        console.log(`${RED}This editor uses Git to sync updates from GitHub.${RESET}`);
        console.log(`${RED}Please download and install Git from: https://git-scm.com/${RESET}`);
        return;
    }

    console.log(`${YELLOW}Syncing BingoHelper Guide Editor...${RESET}`);

    try {
        ensureRemote('upstream', REPO_URL);
        execSync('git fetch upstream main');
        execSync('git reset --hard upstream/main');
        execSync('npm ci');

        console.log(`${GREEN}Update successful! Core files have been refreshed.${RESET}`);

    } catch (error) {
        console.error(`${RED}Update failed.${RESET}`, error);

        // Check if the error is because it's not a git repo (e.g. they downloaded a ZIP)
        if (error.message.includes('not a git repository')) {
            console.log("Suggestion: It looks like this folder wasn't cloned with Git.");
            console.log("To enable updates, please 'git clone' the repository instead of downloading the ZIP.");
            // point to readme
        } else {
            console.log("Details:", error.message);
        }
    }
}

function ensureRemote(name, url) {
    try {
        const remotes = execSync('git remote').toString();

        if (remotes.includes(name)) {
            execSync(`git remote set-url ${name} ${url}`, { stdio: 'inherit' });
        } else {
            execSync(`git remote add ${name} ${url}`, { stdio: 'inherit' });
        }
    } catch (e) {
        console.error(`Failed to configure remote '${name}':`, e);
    }
}

if (shouldExecuteTask(import.meta.url)) updateEditor();