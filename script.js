const photos = [
  {
    src: "foto1.jpg",
    caption: "Our child memory, ini foto yang paling aku suka. 
	kita udah bareng bareng dari kecil ya 🥹"
  },
  {
    src: "foto2.jpg",
    caption: "Ini waktu kita jalan jalan ke Yogyakarta tahun 2017 💫"
  },
  {
    src: "foto3.jpg",
    caption: "Kita lucu banget disini, lagi makan ice cream 🥹"
  },
  {
    src: "foto4.jpg",
    caption: "Puncak memory tahun 2023, 
	ini kita lagi jalan jalan ke Safari Night 🥰"
  },
  {
    src: "foto5.jpg",
    caption: "caption">Pertama kali nganter kamu ke bandara untuk berangkat ke Madinah 💕
  },
  {
    src: "foto6.jpg",
    caption: "Ini waktu ke kopi nako sore sore, seru banget naik motor terjauh sama kamu🌹"
  }
];

function showPhoto(index) {
  const photoBox = document.querySelector('.photo-box');
  const photo = document.getElementById('photo');
  const caption = document.getElementById('caption');

  photo.src = photos[index].src;
  caption.textContent = photos[index].caption;
  photoBox.style.display = "flex";
}
