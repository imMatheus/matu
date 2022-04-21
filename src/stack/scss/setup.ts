import { install } from './install'
import { addScriptToPackage } from '@utils/addScriptToPackage'
import { renameFile } from '@utils/renameFile'

export function setupScss() {
    install()
    console.log('rad 7')
    renameFile('/src/index.css', 'src/index.scss')
    console.log('rad 10')

    addScriptToPackage('style', 'sass --watch src/index.scss:src/index.css')
}
