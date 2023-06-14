import { c as create_ssr_component, v as validate_component, d as add_attribute, j as each, h as escape, k as null_to_empty } from './index2-71eb62f6.js';
import './functions-4ac208a8.js';

/* empty css                                                       */const product = "/_app/immutable/assets/sparko-with-app.4bd33a92.png";
const css$6 = {
  code: "h1.svelte-u5br64{font-style:normal;font-weight:650;font-size:44px;line-height:54px;color:black;margin-block:1rem;font-family:'Aspekta'}p.svelte-u5br64{font-style:normal;font-weight:450;font-size:1.313rem;line-height:1.75rem;color:#072125;letter-spacing:-0.035em;font-family:'Supreme'}.content.svelte-u5br64{display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-right:3rem;margin:1rem}#main.svelte-u5br64{display:grid;grid-template-columns:repeat(2, minmax(0, 1fr));background-color:white}#button.svelte-u5br64{display:flex;flex-direction:row;justify-content:center;align-items:center;padding:16px 32px;gap:10px;color:black;border-radius:100px;margin-block:1.5rem;background-color:#f4b931;transition:0.3s;font-family:'Supreme'}#button.svelte-u5br64:hover{color:black;background-color:#fcd988;transition:0.3s}@media screen and (max-width: 786px){#main.svelte-u5br64{grid-template-columns:repeat(1, minmax(0, 1fr))}}",
  map: null
};
const Description = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$6);
  return `<div id="main" class="svelte-u5br64"><div class="col-span-1 flex justify-center items-center"><div class="hidden md:flex"><img width="400"${add_attribute("src", product, 0)} alt="" style="margin:3rem;"></div>

    <div class="flex md:hidden"><img width="200"${add_attribute("src", product, 0)} alt="" style="margin:3rem;"></div></div>
  <div class="col-span-1 content svelte-u5br64"><h1 class="svelte-u5br64">What is the solution?</h1>
    <p class="svelte-u5br64">&#39;Sparko&#39; is an all-in-one solution to store and manage energy. It
      seamlessly integrates with solar panels and the grid, using artificial
      intelligence algorithms to analyze energy consumption patterns and weather
      conditions of the future to save your energy. It comes with an app that
      allows you to monitor and control the flow of energy.
    </p>
    <a href="/about" id="button" class="svelte-u5br64">Learn More </a></div>
</div>`;
});
const sparkoVId = "/_app/immutable/assets/landing-page-vid(1).2612a3a9.mp4";
const sparkoVIdMobile = "/_app/immutable/assets/landing-page-vid(mobile).691c0657.mp4";
const css$5 = {
  code: '#button.svelte-734slr{display:flex;flex-direction:row;justify-content:center;align-items:center;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;color:black;border-radius:100px;margin-block:1.5rem;background-color:#f4b931;transition:0.3s;font-family:"Supreme"}#button.svelte-734slr:hover{color:black;background-color:#fcd988;transition:0.3s}#leftbox.svelte-734slr{position:absolute;height:100vh;width:90vw;z-index:10;display:flex;flex-direction:column;justify-content:center;align-items:flex-start;padding-left:2rem;text-decoration-color:#020b16;background:transparent}h2.svelte-734slr{font-style:normal;font-weight:400;color:white;width:50%;margin-top:1.5rem;font-family:"Supreme"}h1.svelte-734slr{margin-top:5rem;text-align:left;font-weight:800;font-size:2.75rem;width:50%;line-height:3.375rem;font-family:"Aspekta"}@media screen and (max-width: 768px){h1.svelte-734slr{font-size:1.5rem;text-align:center;width:90%;margin:0.2rem}h2.svelte-734slr{font-size:1.5rem;text-align:center;width:90%;margin:0.2rem;font-weight:650;text-shadow:0 0 4px black;margin-bottom:6rem;line-height:2rem}}video.svelte-734slr{height:100%;object-fit:cover;width:100vw;overflow:hidden}.overlay.svelte-734slr{position:absolute;text-shadow:2px 2px 4px rgba(0, 0, 0, 0.5);display:flex;flex-direction:column;justify-content:center;align-items:center}',
  map: null
};
const LandingPage = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let video;
  let time = 0;
  $$result.css.add(css$5);
  return `<div class="h-screen hidden md:flex"><div id="leftbox" class="svelte-734slr"><h1 class="duration-500 svelte-734slr"${add_attribute("style", `${"color:black;"} `, 0)}>Sustainable Energy Solutions for a Brighter Future</h1>
    <h2 class="duration-500 svelte-734slr"${add_attribute("style", `${"color:black;"} `, 0)}>A comprehensive solution to meet all your energy needs, including
      generation, storage, and management.
    </h2>

    <a href="/about" id="button" class="svelte-734slr">Learn More </a></div>

  <video autoplay muted loop class="svelte-734slr"${add_attribute("this", video, 0)}${add_attribute("currentTime", time, 0)}><track kind="captions"><source${add_attribute("src", sparkoVId, 0)} type="video/mp4"></video></div>

<div class="flex md:hidden bg-[url(lib/assets/header-img-1.png)] h-screen bg-cover bg-no-repeat bg-center flex-col-reverse items-center z-0"><video autoplay muted loop class="svelte-734slr"${add_attribute("this", video, 0)}${add_attribute("currentTime", time, 0)}><track kind="captions"><source${add_attribute("src", sparkoVIdMobile, 0)} type="video/mp4"></video>

  <div class="overlay svelte-734slr"><a href="/about" id="button" class="svelte-734slr">Learn More </a>
    <h2 class="duration-500 svelte-734slr"${add_attribute("style", `${"color:black;"} `, 0)}>Sustainable Energy Solutions for a Brighter Future
    </h2></div>
</div>`;
});
const css$4 = {
  code: ".content.svelte-99e94s{display:flex;justify-content:center;flex-direction:column;height:100%;width:70%}h1.svelte-99e94s{font-family:'Aspekta';font-size:2.5em;padding-bottom:0.2em;color:black;font-weight:bold}.main.svelte-99e94s{background-color:white;border-radius:12px;padding:2rem;margin-left:1rem;margin-top:3rem;margin-bottom:3rem;display:inline-block;justify-content:center;min-width:50rem;height:25rem;margin-right:10rem}p.svelte-99e94s{font-family:'Supreme';font-size:1em;color:#072125d0;font-weight:700}img.svelte-99e94s{translate:30em -27em;scale:1}@media screen and (max-width: 786px){h1.svelte-99e94s{font-size:1.5em}p.svelte-99e94s{width:100%}.main.svelte-99e94s{min-width:16em;display:flex;justify-content:center;align-items:center;margin-right:1rem}img.svelte-99e94s{translate:3em -10em}.content.svelte-99e94s{text-align:center;justify-content:center;align-items:center;display:flex;width:100%}}",
  map: null
};
const ServicesModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { content } = $$props;
  let { title } = $$props;
  let { imgPath } = $$props;
  if ($$props.content === void 0 && $$bindings.content && content !== void 0)
    $$bindings.content(content);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.imgPath === void 0 && $$bindings.imgPath && imgPath !== void 0)
    $$bindings.imgPath(imgPath);
  $$result.css.add(css$4);
  return `<div class="main svelte-99e94s"><div class="content svelte-99e94s"><h1 class="svelte-99e94s">${escape(title)}</h1>
    <p class="svelte-99e94s">${escape(content)}</p></div>
  <img${add_attribute("src", imgPath, 0)} alt="" style="width:60%" class="md:flex hidden svelte-99e94s">
  
</div>`;
});
const l1 = "/_app/immutable/assets/l1.164121b5.png";
const l2 = "/_app/immutable/assets/l2.05240711.png";
const l3 = "/_app/immutable/assets/l3.f84968c5.png";
const l4 = "/_app/immutable/assets/l4.f5dab128.png";
const l5 = "/_app/immutable/assets/l5.38dcde21.png";
const css$3 = {
  code: ".scrollbar-hide.svelte-1idf56t::-webkit-scrollbar{display:none}#body.svelte-1idf56t{scroll-snap-type:x mandatory;overflow-x:scroll;background-color:#072125;padding-block:2.5rem}.scrollbar-hide.svelte-1idf56t{-ms-overflow-style:none;scrollbar-width:none;display:flex;flex-wrap:nowrap;overflow-x:auto;overflow-y:hidden;width:100%}h1.svelte-1idf56t{color:white;font-size:3rem;margin-top:1rem;margin-left:1rem;font-weight:bold;font-family:'Aspekta'}@media screen and (max-width: 768px){h1.svelte-1idf56t{font-size:1.5em;text-align:center}}",
  map: null
};
const Services = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$3);
  return `<div id="body" class="svelte-1idf56t"><h1 class="px-10 svelte-1idf56t">Our Services</h1>
  <div class="scrollbar-hide px-10 svelte-1idf56t">${validate_component(ServicesModal, "ServicesModal").$$render(
    $$result,
    {
      content: "We visit the site of installation and inspect the infrastructure to estimate the system configuration that would be suitable for installation.",
      title: "Inspection",
      imgPath: l1
    },
    {},
    {}
  )}

    ${validate_component(ServicesModal, "ServicesModal").$$render(
    $$result,
    {
      content: "A 3D model of SPARKO and associated solar panel system is designed.",
      title: "3D Modelling",
      imgPath: l2
    },
    {},
    {}
  )}

    ${validate_component(ServicesModal, "ServicesModal").$$render(
    $$result,
    {
      content: "Our technicians visit the site and set up the complete solar solution consisting of solar panels and the SPARKO.",
      title: "Installation",
      imgPath: l3
    },
    {},
    {}
  )}
    ${validate_component(ServicesModal, "ServicesModal").$$render(
    $$result,
    {
      content: "Through the SPARKO companion app, you get a real-time view of the solar generation and battery status. The flow of energy can also be manually controlled through the app",
      title: "Digital Monitoring and Energy flow control",
      imgPath: l4
    },
    {},
    {}
  )}
    ${validate_component(ServicesModal, "ServicesModal").$$render(
    $$result,
    {
      content: "Cleaning of solar panels along with maintenance and upkeep of SPARKO would be provided on a subscription basis at a minimal cost.",
      title: "Maintainence and After sales services",
      imgPath: l5
    },
    {},
    {}
  )}</div>
</div>`;
});
const ans1 = "/_app/immutable/assets/ans1.32ae1312.png";
const ans2 = "/_app/immutable/assets/ans2.52af09c6.png";
const ans3 = "/_app/immutable/assets/ans3.64966ae0.png";
const ans4 = "data:image/png;base64,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";
const ans5 = "/_app/immutable/assets/ans5.b8f34cca.png";
const ans6 = "/_app/immutable/assets/ans6.509f9fd7.png";
const css$2 = {
  code: 'h2.svelte-9npetc{font-weight:650;margin:1rem 1rem;font-family:"Aspekta";font-size:1.5rem}.ans.svelte-9npetc{display:flex;flex-direction:column;margin:2rem;align-items:center;text-align:center;background-color:white;border-radius:12px;padding:1.5rem}.answers.svelte-9npetc{display:grid;grid-template-columns:repeat(3, minmax(0, 1fr));grid-auto-rows:minmax(100px, auto)}p.svelte-9npetc{color:#072125;font-size:0.875rem;font-family:"Supreme";font-weight:550}h1.svelte-9npetc{color:black;font-size:3rem;margin-top:1rem;margin-left:1rem;font-weight:bold;font-family:"Aspekta"}img.svelte-9npetc{width:fit-content}.main.svelte-9npetc{background:linear-gradient(0deg, rgba(255, 255, 255, 0.92), rgba(255, 255, 255, 0.92)), #072125}@media screen and (max-width: 768px){.answers.svelte-9npetc{display:flex;flex-direction:column}h1.svelte-9npetc{font-size:2rem;text-align:center}h2.svelte-9npetc{font-size:1.2rem}}',
  map: null
};
const Whyus = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$2);
  return `<div class="main h-full p-10 svelte-9npetc"><h1 class="svelte-9npetc">Why choose us?</h1>

  <div class="answers svelte-9npetc"><div class="ans svelte-9npetc"><img${add_attribute("src", ans1, 0)} alt="" class="svelte-9npetc">
      <h2 class="svelte-9npetc">All-in-one solution</h2>
      <p class="svelte-9npetc">A single platform for generation, storage and management of the energy.
      </p></div>
    <div class="ans svelte-9npetc"><img${add_attribute("src", ans2, 0)} alt="" class="svelte-9npetc">
      <h2 class="svelte-9npetc">Real-time Monitoring and Analytics</h2>
      <p class="svelte-9npetc">Customer satisfaction is at the core of everything we do. We are
        committed to providing exceptional service and building long-term
        relationships with our clients.
      </p></div>
    <div class="ans svelte-9npetc"><img${add_attribute("src", ans3, 0)} alt="" class="svelte-9npetc">
      <h2 class="svelte-9npetc">Quality and Re  liability</h2>
      <p class="svelte-9npetc">Partnered with reputable suppliers and manufacturers to get High-quality
        components.
      </p></div>
    <div class="ans svelte-9npetc"><img${add_attribute("src", ans4, 0)} alt="" class="svelte-9npetc">
      <h2 class="svelte-9npetc">End-to-end Solution</h2>
      <p class="svelte-9npetc">Handle every aspect of your solar project, from initial project planning
        and engineering design to procurement, installation, and ongoing
        maintenance.
      </p></div>
    <div class="ans svelte-9npetc"><img${add_attribute("src", ans5, 0)} alt="" class="svelte-9npetc">
      <h2 class="svelte-9npetc">Extra Savings</h2>
      <p class="svelte-9npetc">30% to 40% more saving from regular solar inverter systems.</p></div>
    <div class="ans svelte-9npetc"><img${add_attribute("src", ans6, 0)} alt="" class="svelte-9npetc">
      <h2 class="svelte-9npetc">Experience and Support</h2>
      <p class="svelte-9npetc">Customer satisfaction is at the core of everything we do. We are
        committed to providing exceptional service and building long-term
        relationships with our clients.
      </p></div></div>
</div>`;
});
const residentialImage = "/_app/immutable/assets/residential-icon.3b2f572b.png";
const commercialImage = "/_app/immutable/assets/commercial-icon.38b149af.png";
const css$1 = {
  code: "h1.svelte-cmr62i{text-align:left;font-weight:600;font-size:2.75rem;font-family:'Aspekta'}img.svelte-cmr62i{width:60%;min-width:60%;background-color:white;border-radius:100%;padding:1rem}#sellingto.svelte-cmr62i{align-items:center;background-color:white;color:black;border-radius:24px;padding:3rem;margin:2rem;display:grid;grid-template-columns:1fr 1fr;background-color:rgb(240, 240, 240)}h3.svelte-cmr62i{font-style:normal;font-weight:500;margin-top:1.5rem;font-family:'Supreme'}h2.svelte-cmr62i{font-style:normal;font-weight:800;margin-top:1.5rem;font-family:'Aspekta'}@media(max-width: 768px){#sellingto.svelte-cmr62i{display:flex;flex-direction:column}h1.svelte-cmr62i{font-size:1.3rem;text-align:center}h2.svelte-cmr62i{font-size:1rem;text-align:center}img.svelte-cmr62i{widows:90%;min-width:90%;margin-inline:1rem}}",
  map: null
};
const Sellingto = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css$1);
  return `<div id="sellingto" class="svelte-cmr62i"><div><h1 class="svelte-cmr62i">Who are we selling to?</h1>
    <h3 class="md:flex hidden svelte-cmr62i">We are catering to both the sectors and provide customized solutions to
      everyone.
    </h3></div>
  <div class="flex flex-row"><div class="flex flex-col items-center justify-center"><img${add_attribute("src", residentialImage, 0)} alt="" class="svelte-cmr62i">
      <h2 class="svelte-cmr62i">Residential</h2></div>
    <div class="flex flex-col items-center justify-center"><img${add_attribute("src", commercialImage, 0)} alt="" class="svelte-cmr62i">
      <h2 class="svelte-cmr62i">Commercial</h2></div></div>
</div>`;
});
const css = {
  code: 'h1.svelte-dj5972{text-align:center;font-size:2.75rem;font-weight:650;font-family:"Aspekta"}.btn.svelte-dj5972{background:#072125;border-radius:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;width:2rem;height:2rem;color:white;;;font-size:1.5rem}p.svelte-dj5972{font-style:normal;font-weight:500;font-size:1.125rem;line-height:1.75rem;letter-spacing:-0.035em}.faq-container.svelte-dj5972{border-radius:0.25rem;margin-bottom:1rem;overflow:hidden;background:linear-gradient(\r\n        0deg,\r\n        rgba(255, 255, 255, 0.97),\r\n        rgba(255, 255, 255, 0.97)\r\n      ),\r\n      #072125;padding:1rem;margin:1rem;border-radius:8px}h3.svelte-dj5972{font-weight:700;font-size:1.313rem;line-height:28px;font-family:"Aspekta"}.faq-answer.svelte-dj5972{padding:1rem;background-color:#fff;font-family:"Supreme"}.faq-answer.active.svelte-dj5972{font-family:"Supreme";display:block;max-height:1000px;transition:0.3s ease-in}@media screen and (max-width: 768px){.faq-container.svelte-dj5972{margin:0.5rem;padding:1rem;width:90%}h1.svelte-dj5972{font-size:1.25rem}h3.svelte-dj5972{font-size:1rem}p.svelte-dj5972{font-size:0.875rem;line-height:1.5rem}.btn.svelte-dj5972{width:1.5rem;height:1.5rem;font-size:1rem}}',
  map: null
};
const Faq = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const faqs = [
    {
      question: "What are you trying to solve?",
      answer: "We are providiging user with the ability to manage and utilize their energy effectively providing them with comprehnsive solutions which empowers our customers to overcome grid dependency and reduce their electricity bills."
    },
    {
      question: "What should we choose ezinore?",
      answer: "You should choose ezinore as we provide realtime monitoring and controls on your mobile,with easy integration and installation of renewable energy solutions. We have a scalable and modular design. With the help of AI based energy optimization, our system helps user to reduce their electricity bills to more than 40% "
    },
    {
      question: "How does SPARKO help in reducing my electricity bill?",
      answer: "We provide a single integrated platform that combines Artificial Intelligence, renewable energy solutions and energy storage technologies to optimize energy usage, reduce costs and promote sustainability."
    }
  ];
  let activeIndex = null;
  $$result.css.add(css);
  return `<h1 class="svelte-dj5972">Frequently Asked Questions</h1>
${each(faqs, (faq, index) => {
    return `<div class="faq-container svelte-dj5972"><div class="flex flex-row justify-between"><h3 class="svelte-dj5972">${escape(faq.question)}</h3>
      <button class="btn svelte-dj5972">${escape(index === activeIndex ? "-" : "+")}</button></div>
    <div class="${escape(null_to_empty(`${index === activeIndex ? "h-auto" : "h-0"} transition duration-300 p-2`), true) + " svelte-dj5972"}"><p class="svelte-dj5972">${escape(index === activeIndex ? faq.answer : "")}</p></div>
  </div>`;
  })}`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<meta name="viewport" content="width=device-width, initial-scale=1.0">

${validate_component(LandingPage, "LandingPage").$$render($$result, {}, {}, {})}
${validate_component(Description, "Description").$$render($$result, {}, {}, {})}

${validate_component(Whyus, "Whyus").$$render($$result, {}, {}, {})}
${validate_component(Services, "Services").$$render($$result, {}, {}, {})}
${validate_component(Sellingto, "Sellingto").$$render($$result, {}, {}, {})}

${validate_component(Faq, "Faq").$$render($$result, {}, {}, {})}

${$$result.head += `<!-- HEAD_svelte-1gctc6e_START -->${$$result.title = `<title>Welcome to Ezinore</title>`, ""}<!-- HEAD_svelte-1gctc6e_END -->`, ""}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-6642368b.js.map
