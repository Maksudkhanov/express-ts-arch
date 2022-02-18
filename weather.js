import { getArgs } from './helpers/getArgs.js';

const initCLI = () => {
    const args = getArgs(process.argv)
    console.log(args);
}

initCLI()