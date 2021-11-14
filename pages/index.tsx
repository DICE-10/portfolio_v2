import type { NextPage } from 'next';
import Head from 'next/head';
import MainLayout from './components/MainLayout';
import Scroll from './api/scroll';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'

const Home: NextPage = () => {
  const [text, setText] = useState("Loading");
  //const [distance, setDistance] = useState(0);
  const router = useRouter();
  var distance = 0;
  var flg = false;  
  useEffect(() => {
    if (process.browser) {
      const width = window.innerWidth;
      setTimeout(() => {
        if (width >= 960) {
          distance = 210;
          //setDistance(210);
        }
        else if (width >= 480) {
          distance = 160;
          //setDistance(160);
        }
        else {
          distance = 110;
          //setDistance(110);
        }
        gsap.registerPlugin(ScrollTrigger);
        Animation();
      }, 500);
      
    }
    
  }, []);
  const Animation = () => {
    if (!flg) {
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
        .to("div#face1", { rotationX: 360, rotationY: 360, z: distance })
        .to("div#face2", { rotationX: 90, rotationY: 0,rotationZ: 360, y: -distance }, '1')
        .to("div#face3", { rotationY: 270, x: -distance }, '1')
        .to("div#face4", { rotationX: 270, rotationY: 360,y: distance }, '1')
        .to("div#face5", { rotationY: 90,rotationZ: 360, x: distance }, '1')
        .to("div#face6", { rotationX: 180, rotationY: 0, rotationZ: 180, z: -distance ,onComplete: textChange}, '1');
    
  
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
  const moveGallery = () => {
    gsap.timeline({
      repeat: 0,
      defaults: {
        duration: 1,
        ease: "expo.inOut"
      }
    }).to("div#cubeParent", { z: '-=250' })
    .to("div#cubeParent", {
      rotateX: 360,
      rotateY: 0,
      rotateZ: 360
    })
      .add(gsap.timeline({
          repeat: 0,
          defaults: {
            duration: 1,
            ease: "expo.inOut"
          }
        })
          .to("div#cubeParent", {
          z: 500,
        })
          .to("div.cubeFace", {
          duration:.5,
            autoAlpha: 0,
            //onComplete: _moveGallery
        },"<"
      ).add(_moveGallery)
    );
  }
  const _moveGallery = () => {
    router.push("Gallery");
    //router.push("https://dice-se.com/");
  }
  return (
    <MainLayout title="Home">
      <div id="trigger1"></div>
      <div id="trigger2"></div>
      <div id="trigger3"></div>
      <div id="trigger4"></div>
      <div id="trigger5"></div>
      <div id="trigger6"></div>
      <div id="boxarea">
      <div className="container" id="cubeArea">
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
            <div className="cubeFace fs-outer" id="face5" onClick={moveGallery}>
            <span className="fs-inner upper">Gallery</span>
          </div>
          <div className="cubeFace fs-outer" id="face6">
              <span className="fs-inner upper">{ text }</span>
          </div>
        </div>
      </div>
      </div>

    </MainLayout>
  )
}

export default Home

