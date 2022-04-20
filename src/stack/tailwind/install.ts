import { execSync } from '@utils/execSync'

export function install() {
    execSync(
        'npm install --save --package-lock-only --no-package-lock -D tailwindcss postcss autoprefixer'
    )
}
