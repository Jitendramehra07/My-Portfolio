"use client";
import {useState} from "react";

const modes=[
  {label:"OBSERVE",number:"01 / OBSERVE",title:"Start with the real problem.",body:"I want to understand what a person needs and where the friction is before choosing how to build. Learning sticks when it has a reason."},
  {label:"BUILD",number:"02 / MAKE",title:"Turn the idea into a working thing.",body:"My current focus is full-stack development, with deeper attention on Django and backend systems. I’m learning how the parts connect by putting them together."},
  {label:"IMPROVE",number:"03 / REFLECT",title:"Let the problem teach me.",body:"When something breaks or feels awkward, I want to know why. That cycle of trying, understanding, and refining is how I’m building stronger engineering fundamentals."}
];

export default function LearningModes(){
  const [active,setActive]=useState(0);
  const item=modes[active];
  return <section className="thinking section" id="thinking">
    <div className="section-meta"><span>03 — HOW I WORK</span><span>CHOOSE A PERSPECTIVE</span></div>
    <div className="thinking-head"><h2>Keep the loop<br/><em>moving.</em></h2><p>Learning becomes clearer when I can connect an idea to something I’m making.</p></div>
    <div className="mode-layout">
      <div className="mode-tabs" role="tablist" aria-label="Learning approach">
        {modes.map((mode,i)=><button key={mode.label} type="button" role="tab" id={"mode-tab-"+i} aria-selected={active===i} aria-controls="mode-panel" onClick={()=>setActive(i)}><span>{mode.number}</span>{mode.label}<b>{active===i?"↗":"+"}</b></button>)}
      </div>
      <div className={`mode-panel${active===0?" has-observation":""}`} id="mode-panel" role="tabpanel" aria-labelledby={"mode-tab-"+active} key={active}>
        <span className="panel-index">{item.number}</span><h3>{item.title}</h3><p>{item.body}</p>
        {active===0&&<div className="observation-visual" aria-label="A visual signal marker for observing a problem"><span className="observation-ring ring-one"/><span className="observation-ring ring-two"/><span className="observation-crosshair">+</span><span className="observation-dot"/><span className="observation-caption">SIGNAL / 001</span></div>}
        
      </div>
    </div>
  </section>;
}


