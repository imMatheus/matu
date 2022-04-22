#!/usr/bin/env node

import 'module-alias/register'

// import fs from 'fs'
// import path from 'path'
import inquirer from 'inquirer'
import chalk from 'chalk'
import { execSync } from 'child_process'
import { vite_supported } from './vite_supported'
import { createSpinner } from 'nanospinner'
import { stacks, IStack } from '@stack/stacks'
import { setupTailwind } from '@stack/tailwind/setup'
import { setupScss } from '@stack/scss/setup'
import { setupFirebase } from '@stack/firebase/setup'
import { checkAppName } from '@utils/index'

export let appName: string

async function main() {
    // Welcome the user
    console.log(chalk.bgGreen('Welcome to the Matu CLI!'))

    const { app_name } = await inquirer.prompt({
        name: 'app_name',
        type: 'input',
        message: 'What is the name of your app?',
    })

    // will throw error if app name is not valid
    checkAppName(app_name)

    appName = app_name

    const { framework } = await inquirer.prompt({
        name: 'framework',
        type: 'list',
        message: 'What framework do you want to use?',
        choices: ['angular'].concat(vite_supported),
    })

    const { stack }: { stack: IStack } = await inquirer.prompt({
        name: 'stack',
        type: 'checkbox',
        message: 'What stack do you want to use?',
        choices: stacks,
    })

    // determines if the app is using vite
    if (vite_supported.includes(framework)) {
        const command = `cd dev && npm create vite@latest ${app_name} -- --template ${framework}${
            stack.includes('TypeScript') ? '-ts' : ''
        }`
        const spinner = createSpinner(`Creating your ${framework} app`).start()

        execSync(command)
        spinner.success({ text: `Created ${framework} app` })

        console.log('before')

        if (stack.includes('Tailwind')) setupTailwind()
        if (stack.includes('Scss')) setupScss()
        if (stack.includes('Firebase')) await setupFirebase()

        console.log('after')

        return
    }

    execSync('echo helloworld')
    // execSync('mkdir test && cd test && touch test.js')
    // execSync(`npm create vite@latest ${app_name} -- --template vue`)

    console.log('lol')
    console.log(framework)
    // console.log(stack)
}
main()
