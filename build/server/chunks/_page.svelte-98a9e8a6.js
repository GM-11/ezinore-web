import { c as create_ssr_component, h as escape, d as add_attribute, j as each, k as null_to_empty } from './index2-71eb62f6.js';

/* empty css                                                          */const leftArrow = "/_app/immutable/assets/left-arrow.232db8d6.png";
const rightArrow = "/_app/immutable/assets/right-arrow.c692d72c.png";
const k1 = "/_app/immutable/assets/a1.a1964b87.png";
const k2 = "data:image/png;base64,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";
const k3 = "/_app/immutable/assets/a3.d1fd79ae.png";
const gopal = "/_app/immutable/assets/gopal.5d6c1c63.png";
const rohit = "/_app/immutable/assets/rohit.08aa48fe.png";
const saumya = "/_app/immutable/assets/saumya.3a9e596f.jpg";
const anshu = "/_app/immutable/assets/anshu.f3a1df37.jpg";
const keshav = "/_app/immutable/assets/keshav.e6edad8c.jpg";
const nirmal1 = "/_app/immutable/assets/1.0fa5ac8a.png";
const css = {
  code: "li.svelte-1824vfe{height:30rem;min-width:20rem;margin:1rem;display:flex;flex-direction:column-reverse;transition:transform 0.3s ease;border-top-left-radius:20px;border-top-right-radius:20px;transition:0.3s}#button.svelte-1824vfe{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:16px 32px;gap:10px;color:black;border-radius:100px;margin-block:1.5rem;background-color:#f4b931;transition:0.3s}#button.svelte-1824vfe:hover{color:#f4b931;background-color:black;transition:0.3s}.handleScroll.svelte-1824vfe{display:flex;justify-self:center;align-items:center;border-radius:150px;box-shadow:0 0 2rem rgba(0, 0, 0, 0.5);margin:0 0.5rem;transition:0.3s;width:3rem}#leftbox.svelte-1824vfe{width:90vw;height:100vh;z-index:10;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-left:2rem;background:transparent}h2.svelte-1824vfe{font-style:normal;font-weight:600;font-size:2.5rem;font-family:'Aspekta'}h6.svelte-1824vfe{font-style:normal;font-weight:500;text-align:center;font-size:1.5rem;color:white;font-family:'Supreme'}h4.svelte-1824vfe{font-style:normal;font-weight:700;font-size:1.1rem;line-height:21px;color:#072125cc;font-family:'Supreme'}h3.svelte-1824vfe{font-style:normal;font-weight:650;font-size:1.6rem;padding-block:0.5rem;line-height:32px;font-family:'Supreme'}@media screen and (max-width: 768px){h3.svelte-1824vfe{font-size:1rem;line-height:1em}h4.svelte-1824vfe{font-size:0.875rem}h2.svelte-1824vfe{font-size:2rem;text-align:center}li.svelte-1824vfe{height:20rem;min-width:10rem}.aim-para.svelte-1824vfe{width:100%;margin-bottom:1rem}.ans.svelte-1824vfe{display:flex;flex-direction:column;align-items:center;width:20em;padding-bottom:2rem}p.svelte-1824vfe{text-align:center}img.svelte-1824vfe{width:30%;margin:1rem}}p.svelte-1824vfe{text-align:flex-start;color:#072125cc}.slider.svelte-1824vfe{scrollbar-width:0em;scrollbar-color:transparent transparent;align-items:flex-start;display:flex;flex-direction:row;overflow-x:scroll;-ms-overflow-style:none;scrollbar-width:none;height:35rem}.slider.svelte-1824vfe::-webkit-scrollbar{width:0em}.slider.svelte-1824vfe::-webkit-scrollbar-thumb{background-color:transparent}.ans.svelte-1824vfe{display:flex;flex-direction:column;align-items:flex-start;width:20em;padding-bottom:2rem}.aim-para.svelte-1824vfe{margin-right:20rem;margin-top:2rem;color:#072125;font-style:normal;font-weight:500;font-size:1.125rem;line-height:1.75rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let selected = 0;
  const team = [
    {
      img: nirmal1,
      name: "Nirmal Yadav",
      position: "Founder/CEO",
      id: 0
    },
    {
      img: rohit,
      name: "Rohit Gorai",
      position: "Design Head",
      id: 2
    },
    {
      img: gopal,
      name: "Gopal Mathur",
      position: "Full Stack Developer",
      id: 3
    },
    {
      img: saumya,
      name: "Saumya Garg",
      position: "UI/UX Designer",
      id: 1
    },
    {
      img: anshu,
      name: "Anshu",
      position: "3D Designer",
      id: 4
    },
    {
      img: keshav,
      name: "Keshav Singhal",
      position: "AI/ML Engineer",
      id: 5
    }
  ];
  $$result.css.add(css);
  return `<div class="hidden md:grid grid-cols-1">
  <div class="${escape(null_to_empty(`bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex flex-col-reverse items-center z-0`), true) + " svelte-1824vfe"}"></div></div>

<div class="flex md:hidden bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex-col-reverse items-center z-0"><a href="/about" id="button" class="svelte-1824vfe">Learn More </a>
<h6 class="svelte-1824vfe">We at Ezinore provide solutions for the generation, storage, monitoring and intelligent control of clean energy.</h6></div>

<div class="py-10 px-14"><h2 class="svelte-1824vfe">Aim</h2>
  <p class="aim-para svelte-1824vfe">Our goal is to revolutionise today&#39;s power grid system with the help of an
    all-in-one sustainable solution that seamlessly embeds itself into the
    existing infrastructure.
  </p>

  <div class="flex md:flex-row flex-col mt-10 justify-between"><div class="ans svelte-1824vfe"><img${add_attribute("src", k1, 0)} alt="" class="svelte-1824vfe">
      <p class="svelte-1824vfe">Sustainable electricity with minimal environmental impact, powered by
        renewable energy sources.
      </p></div>
    <div class="ans svelte-1824vfe"><img${add_attribute("src", k2, 0)} alt="" class="svelte-1824vfe">
      <p class="svelte-1824vfe">A future where every building is a net-zero energy building, enabled by
        renewable energy and smart grid technologies optimized by AI.
      </p></div>
    <div class="ans svelte-1824vfe"><img${add_attribute("src", k3, 0)} alt="" class="svelte-1824vfe">
      <p class="svelte-1824vfe">An efficient and resilient electricity grid, powered by sustainable
        energy and fine-tuned to minimize waste and emissions.
      </p></div></div>

  <div class="flex flex-row justify-between"><h2 class="svelte-1824vfe">Team</h2>

    <div class="md:flex hidden"><button class="text-2xl" ${"disabled"}><img class="handleScroll svelte-1824vfe" alt=""${add_attribute("src", leftArrow, 0)}></button>
      <button class="text-2xl" ${selected == team.length - 1 ? "disabled" : ""}><img class="handleScroll svelte-1824vfe" alt=""${add_attribute("src", rightArrow, 0)}></button></div></div>

  <ul class="slider h-full svelte-1824vfe">${each(team, (member) => {
    return `<li${add_attribute("id", `${member.id}`, 0)} class="element svelte-1824vfe"${add_attribute("style", `background-image: url('${member.img}'); background-size: cover; background-position: center;`, 0)}><div class="w-full p-3 bg-white"><h3 class="svelte-1824vfe">${escape(member.name)}</h3>
          <h4 class="svelte-1824vfe">${escape(member.position)}</h4></div>
      </li>`;
  })}</ul></div>




${$$result.head += `<!-- HEAD_svelte-9aiml4_START -->${$$result.title = `<title>About Us</title>`, ""}<!-- HEAD_svelte-9aiml4_END -->`, ""}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-98a9e8a6.js.map
