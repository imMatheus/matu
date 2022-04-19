#!/usr/bin/env node

import inquirer from 'inquirer'
// import fs from 'fs'
// import path from 'path'
import chalk from 'chalk'
import { execSync } from 'child_process'
import { vite_supported } from './vite_supported'
import { error } from './error'
import { createSpinner } from 'nanospinner'
import { setup } from './stack/tailwind'

console.log('hej')
// error('shiiiiz')
// console.log(viteSupported)

async function main() {
    // Welcome the user
    console.log(chalk.bgGreen('Welcome to the Matu CLI!'))

    const { app_name } = await inquirer.prompt({
        name: 'app_name',
        type: 'input',
        message: 'What is the name of your app?',
    })

    if (!app_name) return error('You must provide a name for your app.')

    const { framework } = await inquirer.prompt({
        name: 'framework',
        type: 'list',
        message: 'What framework do you want to use?',
        choices: ['angular'].concat(vite_supported),
    })

    const { stack } = await inquirer.prompt({
        name: 'stack',
        type: 'checkbox',
        message: 'What stack do you want to use?',
        choices: ['TypeScript', 'Sass', 'Tailwind'],
    })

    // determines if the app is using vite
    if (vite_supported.includes(framework)) {
        const command = `cd dev && npm create vite@latest ${app_name} -- --template ${framework}${
            stack.includes('TypeScript') ? '-ts' : ''
        }`
        const spinner = createSpinner(`Creating your ${framework} app`).start()

        execSync(command)
        spinner.success({ text: `Created ${framework} app` })
        // setup(app_name)
        console.log(setup)

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
