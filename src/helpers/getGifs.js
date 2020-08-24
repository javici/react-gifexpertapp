export const getGifs = async (category) => {
    const apiKey = 'ikHzDC5JVTzIMjwjLvN8SsN5wLdI4d3L'
    const limit = 10;
    const apiUrl = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}=&limit=${limit}&api_key=${apiKey}`

    const res = await fetch(apiUrl);
    const { data } = await res.json();

    const gifs = data.map(gif => {
        const { id, title, images: { downsized_medium: { url } } } = gif;

        return { id, title, url };
    });

    return gifs;
}