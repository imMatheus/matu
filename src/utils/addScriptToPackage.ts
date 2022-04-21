import fs from 'fs'
import path from 'path'
import { getPathToProject } from './getPathToProject'

export function addScriptToPackage(scriptName: string, script: string) {
    const pathToPackageFile = path.join(getPathToProject(), `/package.json`)
    const packageJson = JSON.parse(fs.readFileSync(pathToPackageFile, 'utf8'))
    packageJson.scripts[scriptName] = script
    fs.writeFileSync(pathToPackageFile, JSON.stringify(packageJson, null, 2))
}
