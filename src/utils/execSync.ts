import { execSync as exec } from 'child_process'
import { changeDir } from './changeDir'

export function execSync(command: string) {
    return exec(command, changeDir())
}
