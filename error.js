import chalk from 'chalk'

export function error(message) {
    console.log(chalk.red(message))
    return
}
