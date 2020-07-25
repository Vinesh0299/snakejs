function Snake() {
    this.xSpeed = scale;
    this.ySpeed = 0;
    this.length = 1;
    this.body = [{
        x: 0,
        y: 0
    }];

    this.draw = () => {
        ctx1.fillStyle = '#45f522';
        this.body.forEach((point) => {
            ctx1.fillRect(point.x, point.y, scale, scale);
        });
    }

    this.move = () => {
        for(var i = this.body.length-1; i >= 0; i--) {
            if(i > 0) {
                this.body[i].x = this.body[i-1].x;
                this.body[i].y = this.body[i-1].y;
            } else {
                this.body[i].x += this.xSpeed;
                if(this.body[i].x < 0) this.body[i].x += canvas1.width;
                this.body[i].x = this.body[i].x % canvas1.width;
                this.body[i].y += this.ySpeed;
                if(this.body[i].y < 0) this.body[i].y += canvas1.height;
                this.body[i].y = this.body[i].y % canvas1.height;
            }
        }
        
    }

    this.clear = () => {
        ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
    }
}