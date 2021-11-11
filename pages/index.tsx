import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from './components/MainLayout';
import Scroll from './api/scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect,useState } from 'react';


const Home: NextPage = () => {
  const [text, setText] = useState("Click\nor\nTap");
  var flg = false;
  useEffect(() => {
    if (process.browser) {
      gsap.registerPlugin(ScrollTrigger);
      //Animation();
    }
  }, []);
  const Animation = () => {
    if (flg != true) {
      var tl3 = gsap.timeline({ paused: true });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#trigger1',
          start: 'top', // アニメーション開始位置
          scrub: true,
          markers: true, // マーカー表示
          onToggle: cube
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#trigger2',
          start: 'top', // アニメーション開始位置
          scrub: true,
          markers: true, // マーカー表示
          onToggle: cube1
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#trigger3',
          start: 'top', // アニメーション開始位置
          scrub: true,
          markers: true, // マーカー表示
          onToggle: cube2
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#trigger4',
          start: 'top', // アニメーション開始位置
          scrub: true,
          markers: true, // マーカー表示
          onToggle: cube3
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#trigger5',
          start: 'top', // アニメーション開始位置
          scrub: true,
          markers: true, // マーカー表示
          onToggle: cube4
        }
      });
      gsap.timeline({
        scrollTrigger: {
          trigger: '#trigger6',
          start: 'top', // アニメーション開始位置
          scrub: true,
          markers: true, // マーカー表示
          onToggle: cube5
        }
      });
      tl3.to("div#cubeParent", { z: '-=150' })
        .to("div.cubeFace", { autoAlpha: 1 })
        .to("div#face1", { rotationX: 360, rotationY: 360, z: 260 })
        .to("div#face2", { rotationX: 90, rotationY: 0, y: -260 }, '1')
        .to("div#face3", { rotationY: 270, x: -260  }, '1')
        .to("div#face4", { rotationX: 270, rotationY: 360,y: 260 }, '1')
        .to("div#face5", { rotationY: 90, x: 260 }, '1')
        .to("div#face6", { rotationX: 180, rotationY: 0, rotationZ: 180, z: -260 ,onComplete: textChange}, '1');
    
  
      gsap.set("div.container", { perspective: 500 });
      gsap.set("div#cubeParent", { transformStyle: "preserve-3d" });
      tl3.play(0);
      flg = true;
    }
  }
  const cube = () => {// front
    gsap.timeline({
      repeat: 0,
      defaults: {
        duration: 1.5,
        ease: "expo.inOut"
      }
    })
      .to("div#cubeParent", {
        rotateX: 0,
        rotateY: 0,
      });
}
  const cube1 = () => { // top
      gsap.timeline({ 
        repeat: 0,
        defaults: {
          duration: 1.5,
          ease: "expo.inOut"
        }
      })
        .to("div#cubeParent", {
          rotateX: -90,
          rotateY: 360,
        });
  }
  const cube2 = () => { // right
      gsap.timeline({
        repeat: 0,
        defaults: {
          duration: 1.5,
          ease: "expo.inOut"
        }
      })
        .to("div#cubeParent", {
          rotateX: 360,
          rotateY: 90,
        });
  }
  const cube3 = () => {// bottom
    gsap.timeline({
      repeat: 0,
      defaults: {
        duration: 1.5,
        ease: "expo.inOut"
      }
    })
      .to("div#cubeParent", {
        rotateX: 90,
        rotateY: 360,
      });
  }
  const cube4 = () => {// bottom
    gsap.timeline({
      repeat: 0,
      defaults: {
        duration: 1.5,
        ease: "expo.inOut"
      }
    })
      .to("div#cubeParent", {
        rotateX: 360,
        rotateY: -90,
      });
  }
  const cube5 = () => {// bottom
    gsap.timeline({
      repeat: 0,
      defaults: {
        duration: 1.5,
        ease: "expo.inOut"
      }
    })
      .to("div#cubeParent", {
        rotateX: 0,
        rotateZ: -360,
        rotateY: 180,
      });
}
  const textChange = () => setText("Contact");
  return (
    <MainLayout title="Home">
      {/* <div>
        <button id="btn7">Tween Faces</button>
        <button id="btn8">Rotate Parent</button>
        <div>
          <button id="btn1">front face</button>
          <button id="btn2">right face</button>
          <button id="btn3">back face</button>
          <button id="btn4">left face</button>
          <button id="btn5">top face</button>
          <button id="btn6">bottom face</button>
        </div>
      </div> */}
      <div id="trigger1"></div>
      <div id="trigger2"></div>
      <div id="trigger3"></div>
      <div id="trigger4"></div>
      <div id="trigger5"></div>
      <div id="trigger6"></div>
      <div id="boxarea">
      <div className="container">
        <div id="cubeParent">
          <div className="cubeFace fs-outer" id="face1">
            <span className="fs-inner upper">DICE<br/>SE</span>
          </div>
          <div className="cubeFace fs-outer" id="face2">
            <span className="fs-inner upper">About</span>
          </div>
          <div className="cubeFace fs-outer" id="face3">
            <span className="fs-inner upper">Profile</span>
          </div>
          <div className="cubeFace fs-outer" id="face4">
            <span className="fs-inner upper">Service</span>
          </div>
          <div className="cubeFace fs-outer" id="face5">
            <span className="fs-inner upper">Works</span>
          </div>
          <div className="cubeFace fs-outer" id="face6" onClick={Animation}>
              <span className="fs-inner upper">{ text }</span>
          </div>
        </div>
      </div>
      </div>

    </MainLayout>
  )
}

export default Home

