// // Get the user agent string
// const userAgent = navigator.userAgent;

// // Define the regular expressions for different OS
// const windowsRegex = /Windows NT (\d+\.\d+)/;
// const macOSRegex = /Mac OS X (\d+_\d+)/;
// const linuxRegex = /Linux/;

// // Check the user agent against the regular expressions
// let osVersion;

// if (windowsRegex.test(userAgent)) {
//   osVersion = userAgent.match(windowsRegex)[1]; // Extract Windows version
// } else if (macOSRegex.test(userAgent)) {
//   osVersion = userAgent.match(macOSRegex)[1].replace('_', '.'); // Extract macOS version and replace underscore with dot
// } else if (linuxRegex.test(userAgent)) {
//   osVersion = 'Linux'; // For Linux, set a generic string or perform further checks if needed
// } else {
//   osVersion = 'Unknown'; // If the OS cannot be determined
// }

// console.log('Operating System:', osVersion);


// function operatingSytem() {
//     let OSName = "Unknown OS";
//     if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
//     if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
//     if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
//     if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";

//     // Display the OS name
//     document.getElementById("OS").innerHTML = OSName;
// }


function osfunction ()
{
    let os = navigator.userAgent;
    let finalOs="";
    if (os.search('Windows')!==-1){
        finalOs="Windows";
    }
    else if (os.search('Mac')!==-1){
        finalOs="MacOS";
    }
    else if (os.search('X11')!==-1 && !(os.search('Linux')!==-1)){
        finalOs="UNIX";
    }
    else if (os.search('Linux')!==-1 && os.search('X11')!==-1){
        finalOs="Linux"
    }
    
    // document.getElementById('OS').innerHTML = finalOs;
    console.log(finalOs)

}
osfunction()