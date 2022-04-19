import { execSync } from 'child_process'

export function install(appName: string) {
    execSync(`cd ${appName} && npm install -D tailwindcss postcss autoprefixer`)
}
