// // DEFAULT CODE ////////////////////////
const BASE_URL = 'https://api.lyrics.ovh/v1/adele/'
const songList = document.querySelector('#song-list')
const lyricsPanel = document.querySelector('#lyrics-panel')
const album = {
    artist: 'Adele',
    album: '25',
    tracks: [
        'Hello',
        'Send My Love (To Your New Lover)',
        'I Miss You',
        'When We Were Young',
        'Remedy',
        'Water Under the Bridge',
        'River Lea',
        'Love in the Dark',
        'Million Years Ago',
        'All I Ask',
        'Sweetest Devotion'
    ]
}

// // WRITE YOUR CODE ////////////////////////

// // Generate songlist
let songListItem = '';

for (i = 0; i < album.tracks.length; i++) {
    songListItem += `<li class="nav-item"><a class="nav-link" href="#">${album.tracks[i]}</a></li>`;
}
songList.innerHTML = songListItem;

// Click SongList and then lyrics will show in the lyrics panel

songList.addEventListener('click', showSong);

function showSong(e) {
    // Get All the Links(plural items need looping over)
    let links = document.querySelectorAll('.nav-link');
    console.log(links);
    // Loop over all links to make sure no link is active
    links.forEach(link => {
        link.classList.remove('active');
    })
    // Add active to the clicked link
    console.log(e.target);
    e.target.classList.add('active');

    let songName = e.target.innerText;
    // console.dir shows all the properties we can use with e.target
    console.dir(songName);
    // console.log(BASE_URL + songName);
    for (let i = 0; i < album.tracks.length; i++) {
        axios
            .get(BASE_URL + album.tracks[i])
            .then(function (e) {
                let title = album.tracks[i]
                console.log(e.data);
                let lyrics = e.data.lyrics
                if (title === songName) {
                    lyricsPanel.innerHTML = `<h2>${title}</h2> 
                    <pre>${lyrics}</pre>`
                }

            })
            .catch(error => console.log(error))
    }
}

// code by 00
// songList.addEventListener('click', event => {

//     if (event.target.classList.contains("nav-link")) {//確認監聽對象是否就是點擊的a元素
//         console.log(event.target)
//         let name = event.target.innerText//選擇的歌曲名稱丟入變數

//         axios
//             .get(`${BASE_URL}/${name}`)
//             .then(response => {
//                 console.log(response.data)
//                 let lyrics = `
//                             <h2>${name}</h2>
//                             <pre>${response.data.lyrics}</pre>
//                             `
//                 lyricsPanel.innerHTML = lyrics
//             })
//             .catch(error => {
//                 console.log(error)
//             })

//     }
// })


//由父元素統一監聽，再分頭委派的event delegation
songList.addEventListener('click', showSong);

function showSong(e) {
    //確認監聽對象是否就是點擊的a元素(因為監聽器是設置在父元素上)
    if (e.target.classList.contains('nav-link')) {
        //將監聽對象的文本內容assign值給songName
        let songName = e.target.innerText;
        //使用axios方法發送request
        axios
            //get(url)==>裡頭也可以是變量
            .get(`${BASE_URL}/${songName}`)
            //相當於一個callback function
            .then(response => {
                let lyrics = `
                            <h2>${songName}</h2>
                            <pre>${response.data.lyrics}</pre>
                            `
                lyricsPanel.innerHTML = lyrics
            })
            //若request沒有成功的反應機制
            .catch(error => {
                console.log(error);
            })
    }
}




