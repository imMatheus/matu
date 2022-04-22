import chalk from 'chalk'
import validateProjectName from 'validate-npm-package-name'

export function checkAppName(appName: string) {
    const validationResult = validateProjectName(appName)
    if (!validationResult.validForNewPackages) {
        console.error(
            chalk.red(
                `Cannot create a project named ${chalk.green(
                    '"' + appName + '"'
                )} because of npm naming restrictions:\n`
            )
        )
        ;[
            ...(validationResult.errors || []),
            ...(validationResult.warnings || []),
        ].forEach((error) => {
            console.error(chalk.red(`  * ${error}`))
        })
        console.error(chalk.red('\nPlease choose a different project name.'))
        process.exit(1)
    }
}
