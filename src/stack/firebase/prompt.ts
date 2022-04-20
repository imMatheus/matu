import chalk from 'chalk'
import inquirer from 'inquirer'

export const firebaseFeatures = [
    'authentication',
    'firestore',
    'functions',
    'storage',
] as const

export async function prompt() {
    console.log('🔥', chalk.bgYellow('Firebase'))

    const { features } = await inquirer.prompt({
        name: 'features',
        type: 'checkbox',
        message: 'What firebase features do you want?',
        choices: firebaseFeatures,
    })

    return features
}
