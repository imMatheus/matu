import { changeCssFile } from './changeCssFile'
import { config } from './config'
import { install } from './install'

export function setupTailwind() {
    install()
    config()
    changeCssFile()
}
