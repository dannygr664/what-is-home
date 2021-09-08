function setup() {
  createCanvas(1920, 1080);
  
  vidElement = createVideo("videos/sample_video.mp4");
  vidElement.size(1080, 720);
  vidElement.center();
  vidElement.loop(true);

  vidElement2 = createVideo("videos/sample_video_2.mp4");
  vidElement2.size(1080, 720);
  vidElement2.center();
  vidElement2.loop(true);
  
  videoMixer = createSlider(0, 1, 0, 0.05);
  videoMixer.position(30, 100);
  videoMixer.style('width', '80px');
  videoMixer.center('horizontal');
}

function draw() {
  let val = videoMixer.value();
  vidElement.style('opacity', val.toString());
  vidElement2.style('opacity', (1-val).toString());
}