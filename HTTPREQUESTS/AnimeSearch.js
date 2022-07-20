const form = document.querySelector('#searchForm');
form.addEventListener('submit', async function (e) {
    e.preventDefault();
    const searchTerm = form.elements.value
    const headers = {
        headers: {
            'X-MAL-CLIENT-ID': '025036182d326f10e84858a6a015414d',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET'
        }
    }
    const params = { params: { q: searchTerm } }
    const res = await axios.get('https://crossorigin.me/https://api.myanimelist.net/v2/anime', headers, params)
    makeSyn(res.data)
})


const makeSyn = (shows) => {
    for (let result of shows) {
        if (result.data.node.synopsis) {
            const synopsis = document.createElement('p');
            p.src = data.node.synopsis;
            document.body.append(synopsis)
        }
    }
}