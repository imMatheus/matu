import { execSync } from '@utils/execSync'

export function install() {
    execSync('npm install -D tailwindcss postcss autoprefixer')
}
