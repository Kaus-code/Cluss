import React, { useEffect, useRef, useState } from "react";
import Matter from "matter-js";
import { useInView } from "framer-motion";
import Image from "next/image";
import Logo from "../public/Logo.png";

// --- Data Structure Defining the "Smile" Layout ---
const itemsData = [
    // Left Side - Top to bottom
    { id: 1, type: "image", src: "https://picsum.photos/seed/ui-green/240/160", width: 180, height: 130, initialTop: "20%", initialLeft: "10%", rotate: -15, z: 2 },
    { id: 2, type: "image", src: "https://picsum.photos/seed/ui-design/220/180", width: 200, height: 150, initialTop: "38%", initialLeft: "18%", rotate: -8, z: 3 },
    { id: 3, type: "image", src: "https://picsum.photos/seed/ui-analytics/200/160", width: 170, height: 130, initialTop: "58%", initialLeft: "12%", rotate: -12, z: 2 },

    // Center-Left - Lower arc
    { id: 4, type: "image", src: "https://picsum.photos/seed/ui-video/220/180", width: 190, height: 140, initialTop: "72%", initialLeft: "25%", rotate: -5, z: 4 },
    { id: 5, type: "image", src: "https://picsum.photos/seed/ui-workspace/240/200", width: 200, height: 150, initialTop: "82%", initialLeft: "40%", rotate: 0, z: 5 },

    // Center-Right - Lower arc  
    { id: 6, type: "image", src: "https://picsum.photos/seed/ui-dashboard/220/180", width: 190, height: 140, initialTop: "78%", initialLeft: "56%", rotate: 3, z: 4 },
    { id: 7, type: "image", src: "https://picsum.photos/seed/ui-code/200/160", width: 220, height: 160, initialTop: "85%", initialLeft: "68%", rotate: 8, z: 5 },

    // Right Side - Rising up
    { id: 8, type: "image", src: "https://picsum.photos/seed/ui-social/220/160", width: 210, height: 150, initialTop: "62%", initialLeft: "78%", rotate: 10, z: 3 },
    { id: 9, type: "image", src: "https://picsum.photos/seed/ui-meeting/240/180", width: 180, height: 140, initialTop: "42%", initialLeft: "85%", rotate: 15, z: 2 },
    { id: 10, type: "image", src: "https://picsum.photos/seed/ui-data/200/140", width: 160, height: 110, initialTop: "18%", initialLeft: "78%", rotate: 18, z: 2 },
];

const CreativeLabFallingSection = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const itemsRefs = useRef<(HTMLDivElement | null)[]>([]);
    const [hasFallen, setHasFallen] = useState(false);

    // Trigger when 50% of the section is visible
    const isInView = useInView(containerRef, { once: true, amount: 0.5 });

    useEffect(() => {
        if (isInView && !hasFallen) {
            setHasFallen(true);
        }
    }, [isInView, hasFallen]);

    // --- Matter.js Physics Logic ---
    useEffect(() => {
        if (!hasFallen || !containerRef.current) return;

        const { Engine, World, Bodies, Runner, Mouse, MouseConstraint } = Matter;
        const container = containerRef.current;

        // Get precise container dimensions
        const width = container.offsetWidth;
        const height = container.offsetHeight;

        // 1. Setup Engine
        const engine = Engine.create();
        engine.world.gravity.y = 1.2;

        // 2. Create Boundaries
        const wallOpts = { isStatic: true, render: { visible: false } };
        const floor = Bodies.rectangle(width / 2, height + 50, width, 100, wallOpts);
        const leftWall = Bodies.rectangle(-50, height / 2, 100, height * 2, wallOpts);
        const rightWall = Bodies.rectangle(width + 50, height / 2, 100, height * 2, wallOpts);
        World.add(engine.world, [floor, leftWall, rightWall]);

        // 3. Create Bodies Logic (THE FIX)
        const itemBodies: { body: Matter.Body; elem: HTMLElement; w: number; h: number }[] = [];

        itemsData.forEach((item, index) => {
            const elem = itemsRefs.current[index];
            if (!elem) return;

            // FIX: Instead of measuring the DOM (which causes the glitch), 
            // we calculate the EXACT position from your data percentages.

            // Convert "20%" string to 0.2 float
            const percentX = parseFloat(item.initialLeft) / 100;
            const percentY = parseFloat(item.initialTop) / 100;

            // Calculate pixel position relative to container
            const x = percentX * width;
            const y = percentY * height;

            const body = Bodies.rectangle(x, y, item.width, item.height, {
                restitution: 0.5,
                friction: 0.1,
                frictionAir: 0.01,
                angle: (item.rotate * Math.PI) / 180,
            });

            itemBodies.push({ body, elem, w: item.width, h: item.height });
        });

        World.add(engine.world, itemBodies.map((ib) => ib.body));

        // 4. Mouse Interaction
        const mouse = Mouse.create(container);
        mouse.pixelRatio = window.devicePixelRatio || 1;
        const mouseConstraint = MouseConstraint.create(engine, {
            mouse,
            constraint: { stiffness: 0.2, render: { visible: false } },
        });
        World.add(engine.world, mouseConstraint);

        // 5. Run Engine
        const runner = Runner.create();
        Runner.run(runner, engine);

        // 6. Sync Loop
        let animationId: number;
        const tick = () => {
            itemBodies.forEach(({ body, elem, w, h }) => {
                const { x, y } = body.position;

                // We must remove the static CSS positioning so physics takes over
                elem.style.top = "0px";
                elem.style.left = "0px";

                // Apply physics transform
                // (x, y) is the center of the body, so we offset by w/2 and h/2
                elem.style.transform = `translate(${x - w / 2}px, ${y - h / 2}px) rotate(${body.angle}rad)`;
            });
            animationId = requestAnimationFrame(tick);
        };
        tick();

        // Cleanup
        return () => {
            cancelAnimationFrame(animationId);
            Runner.stop(runner);
            Engine.clear(engine);
            World.clear(engine.world, false);
        };
    }, [hasFallen]);

    return (
        <section
            ref={containerRef}
            className="relative w-full h-[800px] bg-[#e5e9eb] overflow-hidden flex flex-col items-center pt-24 font-sans"
        >
            {/* Header Content */}
            <div className="text-center z-10 px-4 pointer-events-none select-none">
                <h2 className="text-[40px] md:text-[70px] font-medium text-black tracking-tight leading-[1.1] mb-6">
                    Our Creative Lab
                </h2>
                <p className="text-[18px] text-muted-foreground mb-10 max-w-xl mx-auto leading-relaxed">
                    Where breakthroughs begin, and ideas take shape.
                </p>

                {/* CTA Button */}
                <div className="pointer-events-auto group relative cursor-pointer w-fit mx-auto px-6 py-3 bg-black text-white flex gap-2 rounded-full overflow-hidden">
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-in-out"></div>
                    <div className="relative z-10 flex gap-2 group-hover:text-black transition-colors duration-500 items-center">
                        <div>Explore now</div>
                        <div className="group-hover:-rotate-45 transition-transform duration-500">
                            <Image src={Logo} alt="Logo" width={20} height={20} />
                        </div>
                    </div>
                </div>
            </div>

            {/* The Boxes Container */}
            <div className="absolute inset-0 z-0">
                {itemsData.map((item, i) => (
                    <div
                        key={item.id}
                        ref={(el) => { itemsRefs.current[i] = el; }}
                        className={`absolute bg-white rounded-2xl flex items-center justify-center overflow-hidden select-none
                       border-[14px] border-white shadow-[0_10px_30px_-10px_rgba(0,0,0,0.15)]
                       ${hasFallen ? 'cursor-grab active:cursor-grabbing' : 'transition-transform duration-300'}
                      `}
                        style={{
                            width: item.width,
                            height: item.height,
                            zIndex: item.z,
                            // If fallen, physics engine controls style (via the tick loop above). 
                            // If not, CSS controls initial static position using your data.
                            top: hasFallen ? undefined : item.initialTop,
                            left: hasFallen ? undefined : item.initialLeft,
                            transform: hasFallen ? undefined : `translate(-50%, -50%) rotate(${item.rotate}deg)`,
                        }}
                    >
                        <img
                            src={item.src}
                            alt="Educational snippet"
                            className="w-full h-full object-cover pointer-events-none select-none"
                            draggable={false}
                            style={{ userSelect: 'none', WebkitUserDrag: 'none' } as React.CSSProperties}
                            onDragStart={(e) => e.preventDefault()}
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

const FallingBoxes = () => {
    return (
        <div className="bg-white">
            <CreativeLabFallingSection />
        </div>
    )
}

export default FallingBoxes;