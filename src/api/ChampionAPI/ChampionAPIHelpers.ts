export const removeUnusedPath = (gameDataStr: string) : string => {
    let splittedStr : string[] = gameDataStr.split('/lol-game-data/assets');

    return splittedStr[1].toLowerCase();
}


export function arrayBufferToBase64( buffer : ArrayBuffer ) {
    var binary = '';
    var bytes = new Uint8Array( buffer );
    var len = bytes.byteLength;
    for (var i = 0; i < len; i++) {
        binary += String.fromCharCode( bytes[ i ] );
    }
    return window.btoa( binary );
}