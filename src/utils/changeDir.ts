import path from 'path'
import { appName } from '../index'

export function changeDir(pathName?: string) {
    return {
        cwd: path.join(
            process.cwd(),
            `/dev/${appName}${pathName ? `/${pathName}` : ''}`
        ),
    }
}
