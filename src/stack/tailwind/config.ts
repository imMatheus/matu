import { execSync } from 'child_process'

export function config() {
    execSync('touch test.js')
}
