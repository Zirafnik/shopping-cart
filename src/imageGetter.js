//https://shaquillegalimba.medium.com/how-to-import-multiple-images-in-react-1936efeeae7b
//https://gist.github.com/shaquille-galimba/64f462f0b119945630427f9bedeceba7

function importAll(r) {
    let images = {};
    r.keys().forEach((item, index) => { images[item.replace('./', '')] = r(item); });
    return images
}

const images = importAll(require.context('./images', false, /\.(png|jpe?g|svg)$/));

export default images;