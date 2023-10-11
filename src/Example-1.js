// Filename : Example-1.js
// =======================
//
// This file contains Javascript code.
//
// It doesn't necessarily need to be run from within a Web browser. It can be
// run from the command line by using the Interpreter named node.
//
// For example;
//
//   > node C:\Users\craig\Documents\code\Example-1.js 


// Import the node:util package using an alias.
//
// Setup an alias for the execFile command.

const util     = require("node:util");
const execFile = util.promisify(require("node:child_process").execFile);


// Define the function : invokeExternalCommand

async function invokeExternalCommand(url)
{
    const commandName = "C:\\Users\\craig\\Documents\\code\\simple\\src\\GUI\ frontend\ for\ yt-dlp.exe";

    const waitForExternalCommand = false;


    if ((url === "") || (url.length === 0))
    {
        // A URL value seemingly wasn't passed to this function.

        console.log("A URL seemingly wasn't passed to this function.");

        // Set the value of url to the URL of an arbitrary Youtube video.

        url = "https://www.youtube.com/watch?v=KudGpbfWYrI"
    }

    // Invoke the external command and optionally capture its output.
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
        // that this script isn't left idle waiting for it to finish.

        const {error, stdout, stderr} = execFile(commandName);

        console.log("The external program has been invoked.");
    }
}


// Invoke the function that was just defined above.

invokeExternalCommand("");
