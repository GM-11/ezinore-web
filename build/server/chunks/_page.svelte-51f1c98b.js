import { c as create_ssr_component, d as add_attribute } from './index2-71eb62f6.js';

const css = {
  code: '#rightbox.svelte-155gi7g{background-image:url("$lib/assets/join-us.png");background-clip:content-box;background-size:contain;background-position:center;border-top-left-radius:1.5rem /* 24px */;border-top-right-radius:1.5rem /* 24px */;width:100%;height:50%}.main.svelte-155gi7g{background:linear-gradient(\r\n        0deg,\r\n        rgba(255, 255, 255, 0.92),\r\n        rgba(255, 255, 255, 0.92)\r\n      ),\r\n      #072125;margin:2rem;border-radius:20px}button.svelte-155gi7g{width:40%;background-color:#f4b931;display:flex;flex-direction:row;justify-content:center;align-items:center;padding:1rem;gap:10px;border-radius:50px;transition:0.3s}button.svelte-155gi7g:hover{color:black;background-color:#fcd988;transition:0.3s}input.svelte-155gi7g{border-radius:10px;padding:1rem;margin-block:1rem}p.svelte-155gi7g{padding-top:0.1rem;padding-bottom:0.1rem;font-size:1rem;font-family:"Supreme"}h2.svelte-155gi7g{font-style:normal;font-weight:700;font-size:1.313rem;line-height:1.75rem;font-family:"Supreme"}h1.svelte-155gi7g{font-style:normal;font-weight:650;font-size:2rem;font-family:"Aspekta";color:#072125}',
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let message = "";
  let email = "";
  $$result.css.add(css);
  return `<div class="h-full p-20 grid grid-cols-1 md:grid-cols-2 main gap-10 svelte-155gi7g"><div class="span-cols-1 w-[100%] flex flex-col mt-10"><h1 class="svelte-155gi7g">How can we help you?</h1>
    <input type="text" placeholder="Email" class="svelte-155gi7g"${add_attribute("value", email, 0)}>
    <input type="text" placeholder="Message" class="h-full svelte-155gi7g"${add_attribute("value", message, 0)}>
    <button class="svelte-155gi7g">Submit
    </button></div>
  <div class="span-cols-1 w-[100%] flex flex-col bg-white rounded-3xl mt-10"><iframe id="rightbox" title="Map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3497.997286360262!2d77.11578627445043!3d28.749497978761426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d0138a74f7da7%3A0xf09fad683c23bd5d!2sDelhi%20Technological%20University!5e0!3m2!1sen!2sin!4v1685632063774!5m2!1sen!2sin" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen class="svelte-155gi7g"></iframe>
    <div class="flex flex-col justify-evenly p-5"><div><h2 class="svelte-155gi7g">Contact Information</h2>

        <p class="svelte-155gi7g"><strong>Phone number:</strong>
          +91 9355482696
        </p>
        <p class="svelte-155gi7g"><strong>Email address:</strong>
          conect@ezinore.com
        </p></div>

      <br>

      <div><h2 class="svelte-155gi7g">Address</h2>
        <p class="svelte-155gi7g">DTU,IIF,Delhi</p></div></div></div></div>

${$$result.head += `<!-- HEAD_svelte-bonrbl_START -->${$$result.title = `<title>Contact Us</title>`, ""}<!-- HEAD_svelte-bonrbl_END -->`, ""}`;
});

export { Page as default };
//# sourceMappingURL=_page.svelte-51f1c98b.js.map
