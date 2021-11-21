import type { NextPage } from 'next';
import Link  from 'next/link';
import { useRouter } from 'next/router'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
const Gallery: NextPage = () => {
    const router = useRouter();
    console.dir(router);
    useEffect(() => {
        if (process.browser) {
            gsap.registerPlugin(ScrollTrigger);
            Cube1();
            Cube2();
            Cube3();
         }
    })
    const Cube1 = () => {
        gsap.timeline({
            repeat: 0,
        }).set("div.cubeArea1", { autoAlpha: 0 })
        .set("div.cubeItem1", { z: "-=500" })
        .add(gsap.timeline({
            repeat: 0,
            defaults: {
                duration: 1.25,
            }
        })
        .to("div.cubeArea1", {
            duration: 1,
            autoAlpha: 1,
            //onComplete: _moveGallery
        })
        .to("div.cubeItem1", {
            z: 0,
            onComplete: () => {
                gsap.timeline({
                    repeat: -1,
                 })
                    .to("div.cubeItem1", { duration: 10, rotationY: 360 })
                  .to("div.cubeItem1",  { duration:10, rotationX:-360})
                  .to("div.cubeItem1", { duration:10, rotationY:-360, rotationX:0});
            }
        }, "<")
                
        );
         
    }
    const Cube2 = () => {
        gsap.timeline({
            repeat: 0,
        }).set("div.cubeArea2", { autoAlpha: 0 })
        .set("div.cubeItem2", { z: "-=500" })
        .add(gsap.timeline({
            repeat: 0,
            defaults: {
                duration: 1.25,
            }
        })
        .to("div.cubeArea2", {
            duration: 1,
            autoAlpha: 1,
            //onComplete: _moveGallery
        })
        .to("div.cubeItem2", {
            z: 0,
            onComplete: () => {
                gsap.timeline({
                    repeat: -1,
                 }).to("div.cubeItem2", { duration: 10, rotationX: -360 })
                     .to("div.cubeItem2", { duration: 10, rotationY: 360 })
                     .to("div.cubeItem2", { duration: 10, rotationZ: -360, rotationX: 0 });
            }
        }, "<")
                
        );
        
    }
    const Cube3 = () => {
        gsap.timeline({
            repeat: 0,
        }).set("div.cubeArea3", { autoAlpha: 0 })
        .set("div.cubeItem3", { z: "-=500" })
        .add(gsap.timeline({
            repeat: 0,
            defaults: {
                duration: 1.25,
            }
        })
        .to("div.cubeArea3", {
            duration: 1,
            autoAlpha: 1,
            //onComplete: _moveGallery
        })
        .to("div.cubeItem3", {
            z: 0,
            onComplete: () => {
                gsap.timeline({
                    repeat: -1,
                 }).to("div.cubeItem3", { duration: 10, rotationZ: -360 ,rotationX: -360,})
                     .to("div.cubeItem3", { duration: 10, rotationY: 360 })
                     .to("div.cubeItem3", { duration: 10, rotationX: 360 ,rotationY: 360});
            }
        }, "<")
                
        );
        
   }
    return (
        <>
            <h1><Link href="/">Home</Link></h1>
        <div className="fs-grid m-grid-col-2 fs-wfull gallery_area">
            <div className="fs-outer jc-center">
                <div className="fs-inner bg-crimson">
                    <div id="Area">
                        <div className="scene cubeArea1">
                            <div className="cube cubeItem1">
                                <div className="cube__face cube__face--front">front</div>
                                <div className="cube__face cube__face--back">back</div>
                                <div className="cube__face cube__face--right">right</div>
                                <div className="cube__face cube__face--left">left</div>
                                <div className="cube__face cube__face--top">top</div>
                                <div className="cube__face cube__face--bottom">bottom</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fs-outer jc-center">
                <div className="fs-inner fs-aspectHD-vert fs-sh300">
                    <h1 className="h1">Gallery1</h1>
                </div>
            </div>
        </div>
        <div className="fs-grid m-grid-col-2 fs-wfull gallery_area">
            <div className="fs-outer jc-center order2 m-order1">
                <div className="fs-inner bg-crimson">
                    <h1 className="h1">Gallery2</h1>
                </div>
            </div>
            <div className="fs-outer jc-center order1 m-order2">
                <div className="fs-inner fs-aspectHD-vert fs-sh300">
                    <div id="Area">
                        <div className="scene">
                            <div className="cube cubeItem2">
                                <div className="cube__face cube__face--front">front</div>
                                <div className="cube__face cube__face--back">back</div>
                                <div className="cube__face cube__face--right">right</div>
                                <div className="cube__face cube__face--left">left</div>
                                <div className="cube__face cube__face--top">top</div>
                                <div className="cube__face cube__face--bottom">bottom</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="fs-grid m-grid-col-2 fs-wfull gallery_area">
            <div className="fs-outer jc-center">
                <div className="fs-inner bg-crimson">
                    <div id="Area">
                        <div className="scene">
                            <div className="cube cubeItem3">
                                <div className="cube__face cube__face--front">front</div>
                                <div className="cube__face cube__face--back">back</div>
                                <div className="cube__face cube__face--right">right</div>
                                <div className="cube__face cube__face--left">left</div>
                                <div className="cube__face cube__face--top">top</div>
                                <div className="cube__face cube__face--bottom">bottom</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fs-outer jc-center">
                <div className="fs-inner fs-aspectHD-vert fs-sh300">
                    <h1 className="h1">Gallery3</h1>
                </div>
            </div>
        </div>
        </>
    );
}
export default Gallery