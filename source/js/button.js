import init, {do_something} from '../../wasm/pkg/wasm.js'
await init()
document.getElementById('button').addEventListener('click', do_something)