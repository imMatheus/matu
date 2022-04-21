import path from 'path'
import { appName } from '../index'

export function getPathToProject() {
    return path.join(process.cwd(), `/dev/${appName}`)
}
