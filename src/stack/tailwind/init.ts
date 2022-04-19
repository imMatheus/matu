import { execSync } from 'child_process'

export function init() {
    execSync('npx tailwindcss init -p')
}
