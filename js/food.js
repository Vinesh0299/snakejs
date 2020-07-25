function Food() {
    this.x = 20;
    this.y = 20;

    this.draw = () => {
        ctx2.fillStyle = '#f50505';
        ctx2.fillRect(this.x, this.y, scale, scale);
    }

    this.update = () => {
        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
        var x_new = Math.floor(Math.random()*(canvas1.width+1));
        this.x = x_new - (x_new%10);
        var y_new = Math.floor(Math.random()*(canvas1.height+1));
        this.y = y_new - (y_new%10);
        this.draw();
    }
}