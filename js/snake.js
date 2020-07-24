function Snake() {
    this.x = 0;
    this.y = 0;
    this.xSpeed = scale;
    this.ySpeed = 0;

    this.draw = () => {
        ctx1.fillStyle = '#45f522';
        ctx1.fillRect(this.x, this.y, scale, scale);
    }

    this.update = () => {
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
        this.x += this.xSpeed;
        this.x = this.x % canvas1.width;
        this.y += this.ySpeed;
        this.y = this.y % canvas1.height;
    }
}