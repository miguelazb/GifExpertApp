const endpointURL = 'https://api.giphy.com/v1/gifs/search';
const api_key = 'zIHXbrmUQ5phEWLtK7rdFHDSdwUHThZD';
const cantidad = 5;

export const getGifs = async ( categoria) => {
    const requestURL = `${ endpointURL }?api_key=${ api_key }&q=${ encodeURI(categoria) }&limit=${cantidad}`;
    const resp = await fetch(requestURL);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url,
        }
    });
    return gifs;
}