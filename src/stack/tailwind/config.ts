import fs from 'fs'
import path from 'path'
import { appName } from '../../index'
import { execSync } from '@utils/execSync'
// import { changeDir } from '@utils/changeDir'

export function config() {
    execSync('npx tailwindcss init -p')

    const pathToConfigFile = path.join(
        process.cwd(),
        `/dev/${appName}/tailwind.config.js`
    )

    let tailwindConfigFile = fs.readFileSync(pathToConfigFile, 'utf8')

    tailwindConfigFile = tailwindConfigFile.replace(
        'content: []',
        "content: ['./src/**/*.{js,jsx,ts,tsx}']"
    )

    fs.writeFileSync(pathToConfigFile, tailwindConfigFile)
}
