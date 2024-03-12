# AsterBase
Base system for any program.
## Overview
A program designed to keep the system running properly with automatic repair systems, automatic malware scans, etc.
## Installation
When you want to implement AsterBase in your system,
You will need the following requirements

Requirements: 1.
- Node.js
- npm

Do you meet the requirements?

If you meet the requirements, install it.
````
npm i asterbase_js
```
Once installed, try it out.

## Test

1. create a test file

To test the functionality, we need to create a "test file.json".

On Linux (Unix): create a file named
````
touch testfile.json
echo '[{' >> testfile.json
```


2. start the REPL

On Linux(Unix): ```` touch testfile.json
````
node
Start the REPL ```
Be sure to run it in the folder where the testfile.json file you just created is located.


Import AsterBase_js

```
const base = require('asterbase_js')
```

4. start testing

Start the test ```
base.arsJSON('testfile.json')
//output->
//A flaw was found in the JSON file. 
// Initialize the file.
```

## Function

Currently, the following two functions are available.


### Automatic Repair System (JSON)

How to use functions:.
```
base.arsJSON(file path)
```

### Automatic Malware Scanning

Function usage: ```` base.arsJSON(file path)
```
base.ams();
```

## Contributing
Please feel free to submit issues or pull requests.

## LICENCE
©Carnation All rights reserved.
Modification or redistribution of the code is prohibited.
However, use of the library, including commercial use, is permitted.