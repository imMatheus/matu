import { changeCssFile } from './changeCssFile'
import { config } from './config'
import { install } from './install'

export function setup() {
    install()

    config()

    changeCssFile()
}
