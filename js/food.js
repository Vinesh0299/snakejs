function Food() {
    this.x = 20;
    this.y = 20;

    this.draw = () => {
        ctx2.fillStyle = '#f50505';
        ctx2.fillRect(this.x, this.y, scale, scale);
    }
}