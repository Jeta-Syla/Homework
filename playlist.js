class Playlist {
    constructor() {
        this.medias = [];
        this.currentIndex = 0;
    }

    addMedia(media) {
        this.medias.push(media);
    }

    deleteMedia(mediaTitle) {
       
        this.medias = this.medias.filter((media) => media.title !== mediaTitle);
    }

    play() {
        const media = this.medias[this.currentIndex];
        media.play();
    }

    stop() {
        const media = this.medias[this.currentIndex];
        media.stop();
    }

    next() {
        this.stop();
        this.currentIndex++;
        if (this.currentIndex === this.medias.length) {
            this.currentIndex = 0;
        }
        this.play();
    }

    renderHTML(list) {
        list.innerHTML = '';
        this.medias.forEach(media => {
            list.innerHTML += media.renderHTML();
        });
    }
}

export default Playlist;
