import { c as create_ssr_component, d as add_attribute, v as validate_component, h as escape, k as null_to_empty, j as each } from './index2-71eb62f6.js';

const sparko = "/_app/immutable/assets/sparko.0339ea44.png";
const css$1 = {
  code: '.scrollable-content.svelte-15mp5h5::-webkit-scrollbar-thumb{display:none}.scrollable-content.svelte-15mp5h5::-webkit-scrollbar-track{display:none;width:0}.scrollable-content.svelte-15mp5h5{display:flex;flex-direction:column;justify-content:space-between;background:rgba(255, 255, 255, 0.92)}p.svelte-15mp5h5{margin-block:1rem;font-family:"Supreme";cursor:pointer;font-style:normal;font-weight:500;font-size:18px;line-height:28px;margin-inline:5rem;color:#b8c0c2f1;letter-spacing:-0.035em;transition:0.1s ease-in-out}p.svelte-15mp5h5:hover{color:#0c373df1;transition:0.1s ease-in-out}',
  map: null
};
const ScrollModal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { imagePath } = $$props;
  let { num } = $$props;
  let { list } = $$props;
  if ($$props.imagePath === void 0 && $$bindings.imagePath && imagePath !== void 0)
    $$bindings.imagePath(imagePath);
  if ($$props.num === void 0 && $$bindings.num && num !== void 0)
    $$bindings.num(num);
  if ($$props.list === void 0 && $$bindings.list && list !== void 0)
    $$bindings.list(list);
  $$result.css.add(css$1);
  return `<div class="h-screen md:grid md:grid-cols-2 m-2 hidden ">${num === 1 ? `<div class="col-span-1 md:flex justify-center items-center "><img${add_attribute("src", imagePath, 0)} width="250" alt=""></div>` : ``}
  <div class="${escape(null_to_empty(`col-span-1 flex flex-col justify-center items-start`), true) + " svelte-15mp5h5"}"><div class="scrollable-content svelte-15mp5h5">${each(list, (item) => {
    return `<p${add_attribute("id", list.indexOf(item).toString(), 0)} class="svelte-15mp5h5">${escape(item)}</p>`;
  })}</div></div>
  ${num === 2 ? `<div class="col-span-1 md:flex justify-center items-center "><img${add_attribute("src", imagePath, 0)} width="300" alt=""></div>` : ``}</div>
<div class="h-full grid md:grid-cols-1 m-2 md:hidden "><div class="col-span-1 md:flex justify-center items-center p-10 mt-12 "><img${add_attribute("src", imagePath, 0)} width="200" alt=""></div>
  <div class="${escape(null_to_empty(`col-span-1 flex flex-col justify-center items-start`), true) + " svelte-15mp5h5"}"><div class="scrollable-content svelte-15mp5h5">${each(list, (item) => {
    return `<p${add_attribute("id", list.indexOf(item).toString(), 0)} class="svelte-15mp5h5">${escape(item)}</p>`;
  })}</div></div>
  
</div>`;
});
const sparkoVideo = "/_app/immutable/assets/sparkoVid.9968dd12.mp4";
const moblieApp = "/_app/immutable/assets/mobile-app.26701c14.png";
const css = {
  code: '.main.svelte-mt2ffa{background-color:#0e0d0b}.main-img.svelte-mt2ffa{translate:0 -5rem}section.svelte-mt2ffa{background:#f1eded;padding-inline:10rem;padding-block:2.5rem;text-align:center;font-family:"Aspekta";font-weight:700;font-size:21px;line-height:28px;text-decoration-color:#0c373df1}p.svelte-mt2ffa{color:#0c373df1}video.svelte-mt2ffa{height:100%;width:100%;object-fit:cover;scale:0.8}h1.svelte-mt2ffa{margin-top:5rem;font-style:normal;font-weight:650;font-size:8rem;width:100%;font-family:"Aspekta";color:#ddf6a2}h3.svelte-mt2ffa{font-family:"Supreme";font-style:normal;font-weight:650;font-size:1.563rem;line-height:2rem;text-align:center;color:#ddf6a2;position:absolute;width:60%;translate:0 15rem }@media screen and (max-width: 768px){h1.svelte-mt2ffa{font-size:3rem;line-height:3rem}img.svelte-mt2ffa{translate:0 0}h3.svelte-mt2ffa{width:90%;font-size:1rem;translate:0 10rem;line-height:1.28rem}.main.svelte-mt2ffa{padding:3rem}section.svelte-mt2ffa{padding:1rem;font-size:smaller}}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let video;
  let list1 = [
    "Utilizing artificial intelligence algorithms to analyse energy consumption patterns, weather patterns and solar irradiance to identify inefficiencies, and provide personalized recommendations for optimal energy usage.",
    "A scalable and modular design, allowing easy integration into existing energy infrastructure and future expansions.",
    "Inbuild battery system with integrated liquid cooling to increase battery life and efficiency."
  ];
  let list2 = [
    "Provides you with real-time insights into your energy consumption, generation, and storage",
    "Offers detailed analytics and visualizations of your energy usage patterns. You can view historical data, analyse trends, and identify areas where you can optimize your energy consumption.",
    "Allows to monitor and manage energy storage effectively. You can check the state of charge, set charging and discharging schedules, and receive notifications about the performance of your energy storage system.",
    "Get notified about high energy usage, low battery levels, system malfunctions, or any other critical updates.",
    "The app offers easy access to our customer care and after sales services."
  ];
  $$result.css.add(css);
  return `<div><div class="flex flex-col items-center justify-center main svelte-mt2ffa"><h1 class="text-center svelte-mt2ffa">Coming Soon</h1>
    <div class="md:hidden flex"><img class="main-img svelte-mt2ffa"${add_attribute("src", sparko, 0)} width="170" alt="" style="margin-top: 5rem;"></div>
    <div class="md:flex hidden"><img class="main-img svelte-mt2ffa"${add_attribute("src", sparko, 0)} width="250" alt=""></div>
    <h3 class="svelte-mt2ffa">An AI powered smart energy control system with integrated inverter system
      and in build liquid cooled energy storage system.
    </h3></div>
  <div class="bg-white"><video autoplay muted loop class="svelte-mt2ffa"${add_attribute("this", video, 0)}><track kind="captions"><source${add_attribute("src", sparkoVideo, 0)} type="video/mp4"></video></div>

  <section class="svelte-mt2ffa"><p class="svelte-mt2ffa">Sparko tracks the amount of energy that solar panels produce and
      automatically adjusts the energy flow from grids and solar panels for
      maximum energy consumption. Any excess energy generated is stored in the
      inbuilt battery system further savings.
    </p></section>

  

  ${validate_component(ScrollModal, "ScrollModal").$$render($$result, { list: list1, imagePath: sparko, num: 1 }, {}, {})}
  
  
  ${validate_component(ScrollModal, "ScrollModal").$$render(
    $$result,
    {
      list: list2,
      imagePath: moblieApp,
      num: 2
    },
    {},
    {}
  )}

  </div>


${$$result.head += `<!-- HEAD_svelte-1bu9olj_START -->${$$result.title = `<title>Our Products</title>`, ""}<!-- HEAD_svelte-1bu9olj_END -->`, ""}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-61fbf1e4.js.map
