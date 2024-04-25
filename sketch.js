let P=[]; //dari solve
let t=[]; //dari solve
let r;
let K;
let P0=20;
let dt=0.1;
let tMax=10;

let grafik; //Chart JS

function setup() {
  createCanvas(400, 400);
  r = createInput("Ex : 0.8");
  r.position(10,15)
  let p = createP('Konstanta Pertumbuhan')
  p.style('fontsize','10px');
  p.position(10,-10)
  
  K = createInput("Ex : 100");
  K.position(300,15)
  let q = createP('Carrying capacity')
  q.style('fontsize','10px');
  q.position(300,-10)
  
  
  
  solve(); //untuk inisiasi jalankan dahulu solve
  r.changed(solve); //jika r ganti, jalankan fungsi solve
  K.changed(solve);
  
  //membuat grafik
  grafik=new Chart(this, config);
}

function draw() {
  background(220);
  
  grafik.update();
}

function solve() {
  P[0]=P0;
  t[0]=0;
  let rs = float(r.value());
  let Kp = float(K.value());
  let iterNum = int(tMax/dt);
  
  
  
  for (i=0; i<iterNum; i++){
    P[i+1] = P[i]+dt*rs**P[i]*(1-P[i]/Kp)
    t[i+1] = (i+1)*dt;
  }
  
}
