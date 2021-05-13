# nodejs-salvage-dumper

This simple websocket client for the RACErs Ledger is a proof of concept to dump the salvage events salvaged and destroyed values to two textfiles in the current working directory.

## Requirements

This requires, that the ledger runs on port 8029, hence the regular version cannot be used at the time of writing.

The modified version is available only from klaernie directly.

Furthermore a working nodejs installation is required.

## Installation

1. Clone this repository to a location of your choosing.
2. Execute `npm install`.

Afterwards you can start the game and then start the dumper with `nodejs index.js`.


## License
Copyright 2021 Andre Klärner

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


