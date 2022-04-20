import fs from 'fs'
import path from 'path'
import { appName } from '../../index'
import { execSync } from '@utils/execSync'
// import { changeDir } from '@utils/changeDir'

export function changeCssFile() {
    execSync('npx tailwindcss init -p')

    const pathToConfigFile = path.join(
        process.cwd(),
        `/dev/${appName}/src/index.css`
    )

    fs.writeFileSync(
        pathToConfigFile,
        `@tailwind base;\n@tailwind components;\n@tailwind utilities;`
    )
}
