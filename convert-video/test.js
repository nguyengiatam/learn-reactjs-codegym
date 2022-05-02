const ffmpegPath = require('@ffmpeg-installer/ffmpeg').path;
const ffmpeg = require('fluent-ffmpeg');
ffmpeg.setFfmpegPath(ffmpegPath);
// var command = ffmpeg('vid.webm');
const fs = require('fs');

// function ahihi() {
//     let a = 'https:\/\/video.fhan2-1.fna.fbcdn.net\/v\/t42.1790-2\/279111322_1015833735984877_4540136538035729775_n.mp4?_nc_cat=102&ccb=1-5&_nc_sid=5aebc0&efg=eyJ2ZW5jb2RlX3RhZyI6ImRhc2hfYXVkaW9fYWFjcF80OF9mcmFnXzJfYXVkaW8ifQ\u00253D\u00253D&_nc_ohc=XGF13E7zWwIAX_wfqST&_nc_ht=video.fhan2-1.fna&oh=00_AT9H_3CM3ewTWpvLDv72hrCWykwE9jkJens4UX65qVUU6A&oe=626D7BEF'
//     a = a.replace(/\\/g, '')
//     console.log(a);
// }

// const video = command.toFormat()
// var stream = fs.createWriteStream('vidConvert.mp4');

// ffmpeg('vid.webm')
//     .toFormat('mp4')
//     .on("error", (error) => {
//         console.log(error);
//     })
//     .on("end", () => {
//         console.log("end");
//     })
//     .pipe(stream);

// ffmpeg()
//     .input('vid.webm')
//     .on('error', function (err) {
//         console.log('An error occurred: ' + err.message);
//     })
//     .on('end', function () {
//         console.log('Processing finished !');
//     })
//     .save('output.mp4');

const  source = fs.readFileSync('source.txt', 'utf8');

let linkList = source.match(/https:\\\/\\\/video.*?\"/g)
const resultList = []
for (let link of linkList) {
    let newLink = link.replace(/\\/g, '')
    newLink = newLink.replace(/\"/g, '')
    resultList.push(newLink)
}
console.log(resultList);