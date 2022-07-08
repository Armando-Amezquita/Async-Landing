const API = "https://movie-database-alternative.p.rapidapi.com/?s=Avengers%20Endgame&r=json&page=1";

const content = null || document.getElementById('content');


const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b34407f10emshfc77465376fff36p1a6a01jsn5e49a2ba8de7',
		'X-RapidAPI-Host': 'movie-database-alternative.p.rapidapi.com'
	}
};

async function fetchData(urlApi){
    try {
        const data = await fetch(urlApi, options);
        const respose = await data.json();
        return respose;
    } catch (error) {
        console.error(error);
    }
}


(async()=> {
    const data = await fetchData(API);
    console.log(data)
    const response = `
        ${data.Search.map(movie => `
            <article class="group relative article-card">
                <div class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
                    <img src="${movie.Poster}" alt="${movie.Title}" class="w-full">
                </div>
                <div class="mt-4 flex justify-between">
                    <h3 class="text-sm text-gray-700 article-title">
                        <span aria-hidden="true" class="absolute inset-0"></span>
                            ${movie.Title}
                    </h3>
                </div>
            </article>
        `).slice(0,4)}
    `;

    content.innerHTML = response;
})();