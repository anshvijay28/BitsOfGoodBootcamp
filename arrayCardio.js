const musicData = [
  {
    name: 'Radiohead',
    albums: [
      {
        title: 'The King of Limbs',
        songs: [
          { title: 'Bloom', lengthInMins: 5 },
          { title: 'Morning Mr Magpie', lengthInMins: 4.5 },
          { title: 'Little by Little', lengthInMins: 4.5 },
          { title: 'Feral', lengthInMins: 3 },
          { title: 'Lotus Flower', lengthInMins: 5 },
          { title: 'Codex', lengthInMins: 4.8 },
          { title: 'Give Up the Ghost', lengthInMins: 4.8 },
          { title: 'Separator', lengthInMins: 5.4 },
        ],
        description:
          "The King of Limbs is the eighth studio album by English rock band Radiohead, produced by Nigel Godrich. It was self-released on 18 February 2011 as a download in MP3 and WAV formats, followed by physical CD and 12 inch vinyl releases on 28 March, a wider digital release via AWAL, and a special newspaper edition on 9 May 2011. The physical editions were released through the band's Ticker Tape imprint on XL in the United Kingdom, TBD in the United States, and Hostess Entertainment in Japan.",
      },
      {
        title: 'OK Computer',
        songs: [
          { title: 'Airbag', lengthInMins: 4.7 },
          { title: 'Paranoid Android', lengthInMins: 6.4 },
          { title: 'Subterranean Homesick Alien', lengthInMins: 6.5 },
          { title: 'Exit Music (For a Film)', lengthInMins: 6.5 },
          { title: 'Let Down', lengthInMins: 5 },
          { title: 'Karma Police', lengthInMins: 4.4 },
          { title: 'Fitter Happier', lengthInMins: 2 },
          { title: 'Electioneering', lengthInMins: 3.8 },
          { title: 'Climbing Up the Walls', lengthInMins: 4.7 },
          { title: 'No Surprises', lengthInMins: 3.8 },
          { title: 'Lucky', lengthInMins: 4.4 },
          { title: 'The Tourist', lengthInMins: 5.4 },
        ],
        description:
          "OK Computer is the third studio album by the English alternative rock band Radiohead, released on 16 June 1997 on Parlophone in the United Kingdom and 1 July 1997 by Capitol Records in the United States. It marks a deliberate attempt by the band to move away from the introspective guitar-oriented sound of their previous album The Bends. Its layered sound and wide range of influences set it apart from many of the Britpop and alternative rock bands popular at the time and laid the groundwork for Radiohead's later, more experimental work.",
      },
    ],
  },
  {
    name: 'Portishead',
    albums: [
      {
        title: 'Dummy',
        songs: [
          { title: 'Mysterons', lengthInMins: 5 },
          { title: 'Sour Times', lengthInMins: 4 },
          { title: 'Strangers', lengthInMins: 4 },
          { title: 'It Could Be Sweet', lengthInMins: 4 },
          { title: 'Wandering Star', lengthInMins: 4.8 },
          { title: "It's a Fire", lengthInMins: 3.8 },
          { title: 'Numb', lengthInMins: 3.8 },
          { title: 'Roads', lengthInMins: 5 },
          { title: 'Pedestal', lengthInMins: 3.6 },
          { title: 'Biscuit', lengthInMins: 5 },
          { title: 'Glory Box', lengthInMins: 5 },
        ],
        description:
          'Dummy is the debut album of the Bristol-based group Portishead. Released in August 22, 1994 on Go! Discs, the album earned critical acclaim, winning the 1995 Mercury Music Prize. It is often credited with popularizing the trip-hop genre and is frequently cited in lists of the best albums of the 1990s. Although it achieved modest chart success overseas, it peaked at #2 on the UK Album Chart and saw two of its three singles reach #13. The album was certified gold in 1997 and has sold two million copies in Europe. As of September 2011, the album was certified double-platinum in the United Kingdom and has sold as of September 2011 825,000 copies.',
      },
      {
        title: 'Third',
        songs: [
          { title: 'Silence', lengthInMins: 5 },
          { title: 'Hunter', lengthInMins: 4 },
          { title: 'Nylon Smile', lengthInMins: 3 },
          { title: 'The Rip', lengthInMins: 4.5 },
          { title: 'Plastic', lengthInMins: 3.5 },
          { title: 'We Carry On', lengthInMins: 6.5 },
          { title: 'Deep Water', lengthInMins: 1.5 },
          { title: 'Machine Gun', lengthInMins: 4.7 },
          { title: 'Small', lengthInMins: 6.7 },
          { title: 'Magic Doors', lengthInMins: 3.5 },
          { title: 'Threads', lengthInMins: 5.7 },
        ],
        description:
          "Third is the third studio album by English musical group Portishead, released on 27 April 2008, on Island Records in the United Kingdom, two days after on Mercury Records in the United States, and on 30 April 2008 on Universal Music Japan in Japan. It is their first release in 10 years, and their first studio album in eleven years. Third entered the UK Album Chart at #2, and became the band's first-ever American Top 10 album on the Billboard 200, reaching #7 in its entry week.",
      },
    ],
  },
]
//problem 1
const radioheadAlbums = musicData[0].albums
const specificAlbum = radioheadAlbums.find(album => album.title === 'The King of Limbs')
//console.log(specificAlbum)

//problem 2
const KOLsongs = specificAlbum.songs
const moreThanOneWord = specificAlbum.songs.filter(song => {
    return song.title.split(" ").length > 1
})
//console.log(KOLsongs)
//console.log(moreThanOneWord)

//problem 3
const dummySongs = musicData[1].albums[0].songs
const songsInSeconds = dummySongs.map(song => song.lengthInMins * 60)
//console.log(dummySongs)
//console.log(songsInSeconds)

//problem 4 
const okComputer = musicData[0].albums[1].songs
const okComputerLength = okComputer.reduce((totalLength, currentSong) => {
    return totalLength + (currentSong.lengthInMins * 60)
}, 0)

//console.log(okComputer);
//console.log(okComputerLength);

//problem 5

const thirdAlbumSongs = musicData[1].albums[1].songs
const everyThirdSong = thirdAlbumSongs.filter((song, indexOfSong) =>  (indexOfSong + 1) % 3 === 0)
//console.log(thirdAlbumSongs)
//console.log(everyThirdSong)

//problem 6


/*
const listOfAllSongs1 = musicData.forEach((artist) => {
  artist.albums.forEach((album) => {
    album.songs.forEach((song) => {
      console.log(song)
    })
  })
})
*/


const longerThan90 = musicData.reduce((longerThan90, artist) => {
  artist.albums.forEach(album => {
    if (album.description.split(" ").length > 90) {
      longerThan90.push(album)
    }
  })
  return longerThan90
}, [])

console.log(longerThan90)


const allTheSongs = musicData.reduce((allTheSongs, artist) => {
  artist.albums.forEach((album) => {
    allTheSongs = [...allTheSongs, ...album.songs]
  })
  return allTheSongs
}, [])

console.log(allTheSongs)







