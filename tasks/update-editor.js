import { execSync } from 'child_process';
import { RED, RESET, shouldExecuteTask, YELLOW } from './util';

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
        execSync(`git remote set-url origin ${REPO_URL}`);

        execSync('git fetch origin main');

        execSync('git reset --hard origin/main');

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

if (shouldExecuteTask(import.meta.url)) updateEditor();