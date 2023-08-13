const defaultSongBox = document.getElementById("defaultSongBox");
const audioElement = document.getElementById("audioElement");
const audioSource = document.getElementById("audioSource");
const songListContainer = document.getElementById("songlistbox");
const lyricsContainer = document.getElementsByClassName("lyricsContainer");
const songList = [
  {
    title: "raaz aankhe teri sab bayaan kar rahi",
    src: "songlist/01.mp3",
    lyrics: `
raaz aankhe teri sab bayaan kar rahi
sun raha dil teri khamoshiya
kuch kaho na suno, paas mere raho
ishq ki kaisi hai ye gehraiya
saaya bhi jism se hota hai kya judaa
jitni bhi zor ki ho aandhiya
raaz aankhe teri sab bayaan kar rahi
sun raha dil teri khamoshiya

jeene ka tu sahara, tu hi roshni
kehta hai har sitara meri tu chandni
hum judaa ho jaaye aisa mumkin nahi
dhup ho tum meri, chhaanv bhi ho tumhi
paas ho to dur hai tanhaaiya

main chalunga mushkilo me saaya ban tera
is jahan me, us jahan me bas ek tu mera
khusbuwo se teri mehke jism mera
raat aayegi to main subah laaunga
maut aayegi to lad jaaunga
saaya bhi jism se hota hai kya judaa
jitni bhi zor ki ho aandhiya
kuch kaho na suno, paas mere raho
ishq ki kaisi hai ye gehraiya`,
  },
  {
    title: "Saware-Pehle Kyun Na Miley Hum",
    src: "songlist/02.mp3",
    lyrics: `
Pehle Kyun Na Miley Hum
Tanhaa Hi Kyun Jale Hum
Milke Muqammal Huye Hain
Yaa They Tanhaa Bhale Hum
Saware Saware Saware
Na Hamara Hua Na Tumhara Hua
Ishq Ka Ye Sitam Na Gawara Hua
Na Hamara Hua Na Tumhara Hua
Ishq Ka Ye Sitam Na Gawara Hua
Sun Beriyaan Saware
Sun Beriyaan Saware

Pal Pal Ginke Ghuzara
Maano Karza Utaara
Tumse Munasib Hua Hai
Phir Se Jeena Hamara
Saware Saware Saware
Na Hamara Hua Na Tumhara Hua
Ishq Ka Ye Sitam Na Gawara Hua
Na Hamara Hua Na Tumhara Hua
Ishq Ka Ye Sitam Na Gawara Hua
Sun Beriyaan Saware
Sun Beriyaan Saware

Dhalti Raat Ka Ik Musafir
Subaha Alvida Keh Chala
Jeete Jee Tera Ho Saka Na
Marke Haq Adaa Kar Chala Oo..
Ishq Ka Ye Sitam Na Gawara Hua
Na Hamara Hua Na Tumhara Hua
Ishq Ka Ye Sitam Na Gawara Hua
Sun Beriyaan Saware
Sun Beriyaan Saware..
    `,
  },
  {
    title: "Ashq Na Ho",
    src: "songlist/03.mp3",
    lyrics: `
    ओ यूँ ना लम्हा लम्हा मेरी याद में
    होके तन्हा तन्हा मेरे बाद में
    नैना अश्क़ ना हो
    माना कल से होंगे हम दूर
    नैना अश्क़ ना हो, नैना अश्क़ ना हो
    
    नैना लौटा आने वाले साल जो
    मेरी वर्दी बोले मेरा हाल तो
    नैना अश्क़ ना हो
    ये समझना, मैं हूँ मजबूर
    नैना अश्क़ ना हो, नैना अश्क़ ना हो
    
    बीते हुए लम्हों के तारे गिनूंगा मैं
    आके तुझे ख़्वाबों में तेरे मिलूंगा मैं
    जब कभी हल्की हल्की बरखा आए
    जब कभी दिल भी यूँ ही भर सा जाए
    जब कभी हल्की हल्की बरखा आए
    उस पल झौंका इक बनके आऊंगा मैं
    उस पल ज़ुल्फ़ें पलकें दामन, छू जाऊँगा मैं
    ओ तेरी चूड़ी नग्में गाये जो मेरे
    तेरी पलकों पे हो साए जो मेरे
    नैना अश्क़ ना हो
    आँसू करते हमें कमज़ोर
    नैना अश्क़ ना हो, नैना अश्क़ ना हो
    
    तेरे लिए सांसें आए
    तेरी लिए जाए, जाए रे, जाए रे
    रब्बा, रब्बा बैरी से बिछोड़े जाने किसने बनाए
    हाय रे, हाय रे, हाय रे, दूरी तड़पाये
    मेरे बाद चाहे आए याद मेरी
    नैना अश्क़ ना हो...
    
    ओ लिखी खत में मैंने तुझे बात जो
    सोना रख के तकिये तले रात को
    नैना अश्क़ ना हो
    ये जुदाई भी है दस्तूर
    नैना अश्क़ ना हो, नैना अश्क़ ना हो
    नैना लौटा आने वाले साल जो...
`,
  },
  {
    title: "Dekha hazaron dafa aapko",
    src: "songlist/04.mp3",
    lyrics: `
Dekha hazaron dafa aapko
Phir beqarari kaisi hai
Sambhale sambhalta nahi ye dil
Kuch aap mein baat aisi hai

Lekar ijazat ab aap se
Saansein ye aati jaati hain
Dhoondhe se milte nahi hain hum
Bas aap hi aap baaki hain

Pal bhar na doori sahein aap se
Betaabiyan yeh kuch aur hain
Hum door hoke bhi paas hain
Nazdeekiyan yeh kuch aur hain

Dekha hazaro dafaa aapko
Phir beqarari kaisi hai
Sambhale sambhalta nahi ye dil
Kuch pyar mein baat aisi hai

Aagosh mein hai jo aapki
Aisa sukoon aur paaye kahan
Aankhen humein ye raas aa gayi
Ab hum yahan se jaaye kahan

Dekha hazaron dafa aapko
Phir beqarari kaisi hai
Sambhale sambhalta nahi ye dil
Kuch pyar mein baat aisi hai
mmm.. hmm..
Phir beqarari kaisi hai
mmm.. hmm..
Kuch pyar mein baat aisi hai
 `,
  },
  {
    title: "Daayre",
    src: "songlist/05.mp3",
    lyrics: `
Dillon ki mohabbat ko bandhe kyu haaye re
Dillon ki mohabbat ko bandhe kyu haaye re
Daayre, daayre, dayre, daayre

Hain kyu fasle darmiya leke aaye re
Hain kyu fasle darmiya leke aaye re
Daayre, daayre, dayre, daayre

Kaanch ke woh khwaab naazuk the hamare sare
Choone se hi tootne lage
Mannaton mein umar bhar ka saath jinka maanga
Humsafar woh chootne lage

Na marna munasib, jia bhi na jaaye re
Na marna munasib, jia bhi na jaaye re
Haaye re daayre, dayre, daayre


`,
  },
  {
    title: "Khwahishein teri ab duaaein meri",
    src: "songlist/06.mp3",
    lyrics: `
    पल दो पल की ही क्यूं है ज़िंदगी
    इस प्यार को है सदियाँ काफी नहीं
    तो खुदा से माँग लूँ
    मोहलत मैं इक नयी
    रहना है बस यहाँ
    अब दूर तुझसे जाना नहीं
    जो तू मेरा हमदर्द है
    जो तू मेरा हमदर्द है
    सुहाना हर दर्द है
    जो तू मेरा हमदर्द है
    
    तेरी मुस्कुराहटें हैं ताक़त मेरी
    मुझको इन्हीं से उम्मीद मिली
    चाहे करे कोई सितम ये जहां
    इनमे ही है सदा हिफाज़त मेरी
    जिंदगानी बड़ी खूबसूरत हुई
    जन्नत अब और क्या होगी कहीं
    जो तू मेरा हमदर्द है…
    
    तेरी धड़कनों से है ज़िन्दगी मेरी
    ख्वाहिशें तेरी अब दूआएं मेरी
    कितना अनोखा बंधन है ये
    तेरी मेरी जान जो एक हुई
    लौटूंगा यहाँ तेरे पास मैं हाँ
    वादा है मेरा मर भी जाऊं कहीं
    जो तू मेरा हमदर्द है…`,
  },

  {
    title: "Woh Mere Aane pe Khil Jaana Tera",
    src: "songlist/07.mp3",
    lyrics: `
Woh Mere Aane Pe Khil Jaana Tera
Woh Mere Jaane Pe Chidd Jaana Tera
Woh Mere Chhune Pe Chhil Jaana Tera
Yaad Hai Na

Woh Paas Aane Pe Pighal Jaana Tera
Boond Boond Mujhpe Baras Jaana Tera
Til Til Mujhko Woh Tarsana Tera
Yaad Hai Na.. Yaad Hai Na.. Yaad Hai Na

Honthon Se Palkon Ko Kholna
Palkon Pe Dardon Ko Tolna
Dardon Ko Chadar Mein Chodna

Jo Tere Takiye Pe Neendein Thi Padi
Jo Teri Neendon Mein Raatein Thi Dhali
Yaad Hai Na Lyrics At Lyricsted.com
Jo Teri Raaton Mein Sansein Thi Chali
Yaad Hai Na.. Yaad Hai Na.. Yaad Hai Na

Aaja Na Phir Se Chand Talle
Main Aur Tu Ek Sath Jale
Main Aur Tu Ek Sath Bujhe

Woh Mere Aane Pe Khil Jaana Tera
Woh Mere Jaane Pe Chidd Jaana Tera
Woh Mere Chhune Pe Chhil Jaana Tera
Yaad Hai Na`,
  },
];

// let currentLyrics = "";

// function updateLyrics(time) {
//   const lines = currentLyrics.split("\n");
//   for (let i = 0; i < lines.length; i++) {
//     if (time > i * 10 && time < (i + 1) * 10) {
//       // lyricsContainer.innerHTML = lines[i].replace(/\n/g, '<br>');
//       console.log(i);
//       break;
//     }
//   }
// }

// audioElement.addEventListener("timeupdate", () => {
//   const currentTime = audioElement.currentTime; // Get the current time
//   updateLyrics(currentTime);
// });

function createSongBox(song) {
  const newSongBox = document.createElement("div");
  newSongBox.className = "songbox";
  newSongBox.innerHTML = `<p>${song.title}</p2>`;
  let x = 0;

  newSongBox.addEventListener("click", () => {
    const songName = document.getElementById("songName");
    const imageboxtext = document.getElementById("imageboxtext");
    // currentLyrics = song.lyrics;
    songName.innerHTML = song.title;
    audioSource.src = song.src;
    imageboxtext.innerHTML = song.lyrics.replace(/\n/g, "<br>"); // Replace newline characters with line breaks


    
    if (audioElement.paused || audioElement.currentTime <= 0) {
      audioElement.load();
      audioElement.currentTime = x;
      audioElement.play();
    } else {
      audioElement.load();
      audioElement.play();
      x = audioElement.currentTime;
    }
  });

  songListContainer.insertBefore(newSongBox, defaultSongBox.nextSibling);
}

function addDefaultSongContent() {
  const defaultSong = {
    title: "Raaz aankhen teri",
   
    src: "songlist/01.mp3",
    lyrics:
    `raaz aankhe teri sab bayaan kar rahi
sun raha dil teri khamoshiya
kuch kaho na suno, paas mere raho
ishq ki kaisi hai ye gehraiya
saaya bhi jism se hota hai kya judaa
jitni bhi zor ki ho aandhiya
raaz aankhe teri sab bayaan kar rahi
sun raha dil teri khamoshiya

jeene ka tu sahara, tu hi roshni
kehta hai har sitara meri tu chandni
hum judaa ho jaaye aisa mumkin nahi
dhup ho tum meri, chhaanv bhi ho tumhi
paas ho to dur hai tanhaaiya

main chalunga mushkilo me saaya ban tera
is jahan me, us jahan me bas ek tu mera
khusbuwo se teri mehke jism mera
raat aayegi to main subah laaunga
maut aayegi to lad jaaunga
saaya bhi jism se hota hai kya judaa
jitni bhi zor ki ho aandhiya
kuch kaho na suno, paas mere raho
ishq ki kaisi hai ye gehraiya`
  
    };
  defaultSongBox.innerHTML = `${defaultSong.title}`;

  defaultSongBox.addEventListener("click", () => {
    audioSource.src = defaultSong.src;
    songName.innerHTML="Raaz aankhen teri";
    imageboxtext.innerHTML = defaultSong.lyrics.replace(/\n/g, "<br>"); // Replace newline characters with line breaks

    audioElement.load();
    audioElement.play();
  });
}

function addSongBoxes(songList) {
  addDefaultSongContent();
  songList.forEach((song) => {
    createSongBox(song);
  });
}

addSongBoxes(songList);
let playsongImage = document.getElementById("playbutton");

function changeImage(image) {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    image.src = "pause.png";
    playsongImage.src = "pause.png";
     // Update playsong image
    // divplayImage.src = "pause.png"; // Update divplay image
  } else {
    audioElement.pause();
    image.src = "play.png";
    playsongImage.src = "play.png"; // Update playsong image
  }
}
 
  const forwardbutton =  document.getElementById("forward");
  const backwardbutton = document.getElementById("backward");
  const playbutton =     document.getElementById("playbutton");
  let progressbar =      document.getElementById("progressbar");
 

let isSeeking = false;


function updateProgressBar() {
  const progress = (audioElement.currentTime / audioElement.duration) * 100;
  progressbar.value = progress;
}

// Event listener to continuously update the progress bar during audio playback
audioElement.addEventListener("timeupdate", () => {
  if (!isSeeking) {
    updateProgressBar();
  }
});

// Event listener to handle seeking when the progress bar is interacted with
progressbar.addEventListener("input", () => {
  isSeeking = true;
  const seekTime = (progressbar.value / 100) * audioElement.duration;
  audioElement.currentTime = seekTime;
});

// Event listener to handle seeking completion
progressbar.addEventListener("mouseup", () => {
  isSeeking = false;
  updateProgressBar(); // Update progress bar once seeking is completed
});

let x = 0;
function backseek() {
  x = audioElement.currentTime - 10;
  audioElement.currentTime = x;
  updateProgressBar();
}

function forwardseek() {
  let y = 0;
  y = audioElement.currentTime + 10;
  audioElement.currentTime = y;
  updateProgressBar();
}
function changeImage(image) {
  if (audioElement.paused || audioElement.currentTime <= 0) {
    audioElement.play();
    image.src = "pause.png";
    // playsongImage.src = "pause.png"; // Update playsong image
    // divplayImage.src = "pause.png"; // Update divplay image
  } else {
    audioElement.pause();
    image.src = "play.png";
    // playsongImage.src = "play.png"; // Update playsong image
    // divplayImage.src = "play.png"; // Update divplay image
  }
}
function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${minutes}:${seconds.toString().padStart(2, "0")}`;
}
let songduration = document.getElementById("songduration");
function duration() {
  currentduration.innerHTML = formatTime(audioElement.currentTime);
  songduration.innerHTML = formatTime(audioElement.duration);
}
const durationUpdate = setInterval(duration, 500);

const volumeSlider = document.getElementById("volumeSlider");

function adjustVolume(change) {
  const newVolume = audioElement.volume + change / 100;
  audioElement.volume = Math.min(1, Math.max(0, newVolume));
  volumeSlider.value = audioElement.volume * 100; // Update the volume slider value
 
}

// Event listener to handle volume adjustment when the volume slider is interacted with
volumeSlider.addEventListener("input", () => {
  const newVolume = volumeSlider.value / 100;
  audioElement.volume = newVolume;
  if(volumeSlider.value>0){
    mutebutton.src = "unmute2.png";
  }
    else{

    mutebutton.src = "mute.jpg";
  }
});
let mutebutton = document.getElementById("mutebutton");
let y = 0.50;
mutebutton.addEventListener("click",()=>{
  if(volumeSlider.value>0){
    audioElement.volume = 0;
    volumeSlider.value =0;
    mutebutton.src="mute.jpg";

  }
   else{
    volumeSlider.value =50;
    audioElement.volume = 0.50;
    mutebutton.src="unmute2.png";
   };
})