/**
 * 搬移语句到调用者
 */


emitPhotoData(outStream, person.photo);

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title:${photo.title}</p>`)
    outStream.write(`<p>title:${photo.location}</p>`)
}


/////////==============>

emitPhotoData(outStream, person.photo);
outStream.write(`<p>title:${photo.location}</p>`)

function emitPhotoData(outStream, photo) {
    outStream.write(`<p>title:${photo.title}</p>`)
}
// function renderPerson(outStream, person) {
//     outStream.write(`<p>${person.name}</p>`);
//     renderPhoto(outStream, person.photo);
//     emitPhotoData(outStream, person.photo);
// }

// function listRecentPhotos(outStream, photos) {
//     photos.filter(p => p.date > recentDateCutoff())
//         .forEach(p => {
//             outStream.write("<div>\n");
//             emitPhotoData(outStream, p);
//             outStream.write("</div>\n");
//         })
// }

// function emitPhotoData(outStream, photo) {
//     outStream.write(`<p>title: ${photo.title}</p>`)
//     outStream.write(`<p>title: ${photo.date.toDateString()}</p>`)
//     outStream.write(`<p>title: ${photo.location}</p>`)
// }

