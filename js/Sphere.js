class Sphere {
    constructor(x,y,z,r,xvel,yvel,zvel,mesh){
        this.x = x;
        this.y = y;
        this.z = z;
        this.r = r;
        //this.bounce_factor = bounce_factor;
        this.xvel = xvel;
        this.yvel = yvel;
        this.zvel = zvel;
        this.mesh = mesh;
        this.setpos(x,y,z);
        this.update();
    }
    setpos(x,y,z){
        this.x =x;
        this.y = y;
        this.z = z;
        this.mesh.position.x = x;
        this.mesh.position.y = y;
        this.mesh.position.z = z;
    }


    update(){
        this.setpos(this.x + this.xvel,this.y + this.yvel,this.z + this.zvel)
    }

    check_walls(front,back,bot,top,left,right){

        if(this.z +this.r >= front){
            //collision
            this.zvel *=-.3;
            this.setpos(this.x,this.y,front-this.r);
            //friction
            this.yvel*= .3;
            this.xvel*=.3;
        };
        if(this.z - this.r<= back){
            this.zvel *=-.3;
            this.setpos(this.x,this.y,back+this.r);

            this.yvel*=.3;
            this.xvel*=.3;
        };
        if(this.y - this.r<= bot){
            this.yvel *=-.3;
            this.setpos(this.x,bot+this.r,this.z);

            this.xvel*=.3;
            this.zvel *=.3;
        };
        if(this.y +this.r>= top){
            //collision
            this.yvel *=-.3;
            this.setpos(this.x,top-this.r,this.z);
            //friction
            this.xvel*=.3;
            this.zvel*=.3;
        };
        if(this.x+this.r >= right){
            //collision
            this.xvel *=-.3;
            this.setpos(right-this.r, this.y, this.z);

            //friction
            this.yvel*=.3;
            this.zvel*=.3;
        };
        if(this.x -this.r <= left){
            //collision
            this.xvel *=-.3;
            this.setpos(left+this.r,this.y,this.z);
            //friction
            this.yvel*=0.3;
            this.zvel*=.3;
        };

    }
    compute_normal(sphere2){
        var pt = vec3(this.x,this.y,this.z);
        var collision_pt = vec3(sphere2.x,sphere2.y,sphere2.y);
        //var point = vec3(this,x,this.y,this.z);

        var normal = normalize(subtract(collision_pt,pt));
        return normal;}

}