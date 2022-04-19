import chalk from 'chalk'

export function error(message: string) {
    console.log(chalk.red(message))
    process.exit(1)
}
