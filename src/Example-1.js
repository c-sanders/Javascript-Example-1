// Import the node:util package using an alias.
//
// Setup an alias for the execFile command.

const util     = require("node:util");
const execFile = util.promisify(require("node:child_process").execFile);


// Define the function : invokeExternalCommand

async function invokeExternalCommand()
{
    const commandName = "C:\\Users\\craig\\Documents\\code\\simple\\src\\GUI_frontend_for_yt-dlp.exe";

    const waitForExternalCommand = false;


    // Invoke the external command and capture its output.
    //
    // Prefixing the await keyword onto the front of the execFile function, will
    // cause this script to wait for the execFile function to finish executing
    // before it continues. Remove the await keyword if you do not want this
    // behaviour to occur.

    if (waitForExternalCommand == true)
    {
        const {error, stdout, stderr} = await execFile(commandName);

        console.log(`External Program's output:\n ${stdout}`);
    }
    else
    {
        // The external command should probably be run in a separate thread, so
        // that this script isn't waiting for it to finish.

        const {error, stdout, stderr} = execFile(commandName);

        console.log("The external program has been invoked.");
    }
}


// Invoke the function that was just defined above.

invokeExternalCommand();
