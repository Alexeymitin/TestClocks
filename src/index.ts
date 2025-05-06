import { Application, Assets, Sprite } from 'pixi.js';
import dialImg from './assets/dial.png';
import secondImg from './assets/second.png';
import minuteImg from './assets/minute.png';
import hourImg from './assets/hour.png';
import { Arrow } from './components/Arrow';

(async () => {
  const app = new Application();

  globalThis.__PIXI_APP__ = app;

  await app.init({ background: '#1099bb', resizeTo: window });

  document.body.appendChild(app.canvas);

  Assets.add({ alias: 'dialImg', src: dialImg });
  Assets.add({ alias: 'secondImg', src: secondImg });
  Assets.add({ alias: 'minuteImg', src: minuteImg });
  Assets.add({ alias: 'hourImg', src: hourImg });

  const dialTexture = await Assets.load('dialImg');
  const secondTexture = await Assets.load('secondImg');
  const minuteTexture = await Assets.load('minuteImg');
  const hourTexture = await Assets.load('hourImg');

  const dial = new Sprite(dialTexture);
  dial.anchor.set(0.5);
  dial.position.set(app.screen.width / 2, app.screen.height / 2);
  app.stage.addChild(dial);

  const secondArrow = new Arrow(secondTexture);
  secondArrow.setAnchor(0.5, 0.72);
  secondArrow.position.set(app.screen.width / 2, app.screen.height / 2);
  app.stage.addChild(secondArrow);

  const minuteArow = new Arrow(minuteTexture);
  minuteArow.setAnchor(0.5, 0.81);
  minuteArow.position.set(app.screen.width / 2, app.screen.height / 2);
  app.stage.addChild(minuteArow);

  const hourArrow = new Arrow(hourTexture);
  hourArrow.setAnchor(0.5, 0.81);
  hourArrow.position.set(app.screen.width / 2, app.screen.height / 2);
  app.stage.addChild(hourArrow);

  app.ticker.add(() => {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();

    secondArrow.setRotation((seconds / 60) * Math.PI * 2);
    minuteArow.setRotation((minutes / 60) * Math.PI * 2);
    hourArrow.setRotation((hours / 12) * Math.PI * 2 + (minutes / 60) * (Math.PI / 6));
  });
})();
