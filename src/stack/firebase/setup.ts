import { prompt } from './prompt'

export async function setupFirebase() {
    const features = await prompt()

    console.log(features)
}
