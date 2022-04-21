import fs from 'fs'
import path from 'path'
import { getPathToProject } from './getPathToProject'
import chalk from 'chalk'

export function renameFile(oldPath: string, newPath: string) {
    try {
        console.log('paths')
        console.log(path.join(getPathToProject(), oldPath), path.join(getPathToProject(), newPath))

        fs.renameSync(
            path.join(getPathToProject(), oldPath),
            path.join(getPathToProject(), newPath)
        )
    } catch (error) {
        console.log()
        console.log(chalk.red('Could not rename file'))
        process.exit(1)
    }
}
