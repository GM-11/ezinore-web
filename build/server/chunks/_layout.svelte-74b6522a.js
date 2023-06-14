import { c as create_ssr_component, v as validate_component, b as subscribe, d as add_attribute, o as onDestroy, e as spread, f as escape_object, g as createEventDispatcher } from './index2-71eb62f6.js';
import { p as page } from './stores-53d5d15e.js';
import { c as checkIconState, g as generateIcon } from './functions-4ac208a8.js';

const logo = "/_app/immutable/assets/ezinore-logo.8a43d439.svg";
const Icon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const state = {
    // Last icon name
    name: "",
    // Loading status
    loading: null,
    // Destroyed status
    destroyed: false
  };
  let mounted = false;
  let data;
  const onLoad = (icon) => {
    if (typeof $$props.onLoad === "function") {
      $$props.onLoad(icon);
    }
    const dispatch = createEventDispatcher();
    dispatch("load", { icon });
  };
  function loaded() {
  }
  onDestroy(() => {
    state.destroyed = true;
  });
  {
    {
      const iconData = checkIconState($$props.icon, state, mounted, loaded, onLoad);
      data = iconData ? generateIcon(iconData.data, $$props) : null;
      if (data && iconData.classes) {
        data.attributes["class"] = (typeof $$props["class"] === "string" ? $$props["class"] + " " : "") + iconData.classes.join(" ");
      }
    }
  }
  return `${data ? `${data.svg ? `<svg${spread([escape_object(data.attributes)], {})}><!-- HTML_TAG_START -->${data.body}<!-- HTML_TAG_END --></svg>` : `<span${spread([escape_object(data.attributes)], {})}></span>`}` : ``}`;
});
const css$2 = {
  code: '.nav-element.svelte-1bdugth{font-weight:900;margin-inline:2rem;font-family:"Supreme";transition:0.2s}.nav-element-sidebar.svelte-1bdugth{font-weight:900;margin:1rem 2rem 1rem 2rem;text-align:flex-start;transition:0.2s}.nav-element.svelte-1bdugth:hover{color:#f4b931;transition:0.2s}nav.svelte-1bdugth{background:linear-gradient(\r\n        0deg,\r\n        rgba(255, 255, 255, 0.92),\r\n        rgba(255, 255, 255, 0.92)\r\n      ),\r\n      #072125}.contact.svelte-1bdugth{margin-inline:2rem;border-radius:30px;color:black;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;justify-content:center;display:flex;background-color:#f4b931;transition:0.2s}.contact.svelte-1bdugth:hover{color:black;background-color:#fcd988;transition:0.2s}',
  map: null
};
const Navbar = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$2);
  $$unsubscribe_page();
  return `<nav class="hidden z-20 text-black items-center md:flex flex-row justify-between w-full md:p-5 p-2 svelte-1bdugth">${$page.url.pathname !== "/" ? `<a href="/" class="nav-element svelte-1bdugth"><img${add_attribute("src", logo, 0)} width="150" alt=""></a>` : `<a href="#home"><img${add_attribute("src", logo, 0)} width="150" alt="" class="nav-element cursor-pointer svelte-1bdugth"></a>`}

  <div class="flex flex-row items-center">${$page.url.pathname !== "/" ? `<a href="/" class="nav-element svelte-1bdugth">Home</a>` : `<a href="#home" class="nav-element svelte-1bdugth">Home</a>`}
    <a href="/about" class="nav-element svelte-1bdugth">About</a>
    <a href="/product" class="nav-element svelte-1bdugth">Product</a>
    <a href="/contact" class="contact svelte-1bdugth">Contact Us</a></div></nav>

<nav class="flex md:hidden w-full bg-white z-20 p-2 justify-between svelte-1bdugth">${$page.url.pathname !== "/" ? `<a href="/" class="nav-element svelte-1bdugth"><img${add_attribute("src", logo, 0)} width="150" alt=""></a>` : `<a href="#home"><img${add_attribute("src", logo, 0)} width="150" alt="" class="nav-element cursor-pointer svelte-1bdugth"></a>`}
  <button>${validate_component(Icon, "Icon").$$render(
    $$result,
    {
      icon: "charm:menu-hamburger",
      color: "#12a2ad",
      width: "40"
    },
    {},
    {}
  )}</button>

  ${``}
</nav>`;
});
const instagram = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAPQSURBVHgB7VjdcdNAEN49/xB4QQwFcAbM8JZ0gF0BoQLsCqCDJBUAFdipAFOBTQWEN2aSkKMBRjyQ2LF8x7eyHBxH8UnKTJzJ5JuxTjrpTp9399tbHdEdbjk4rbOi6y1W9IquEc7S17HZ7y72XyBYfVrvsKMWrQCOqXv6c78931eavxDLKaJtWhFgrQ0VPP5lw997sz618ECDVozF0FJ0w1HO87AjCmHmngR0iZwhiky2kWVtyQWwxyYzvaUcyE7QuYGiqD08MkYux5QLJml7a/rltuNJhzKGUzaCIDcyB005DbQO/lIZaYjXmTjAvcA7nMlMrT4eDM0Pg67mvVq9n4VkJoIMy0lb1c82j1l1ELiB+JumB/94PAbXthxVQszRPjWHPXaltuXJN5a5lsArEslNQ2MMXKMhsY5vwvRJ7Cd2rgmehjGHeEEsyc7u+ob6VWztF2kmNGn4yImIYiGdRzgyh++H5mAAoju4Dk4QIvHUpPboqgQtcfzCy3KkEIJ1du678aPTo/34B/fV4FYJCyOEyvp5PFap0no8BvErbZXIS9Abg2WeHEUUx9CTlNt7yo3fSAgM5zoTIXQRFgMotl9i7pdqdehpGrNs+ZG0EyqFcrwSwSVADE3JSXxK6sDrN6YMqKfseEeI4l7zohjsw6wvKbySwIU7c+TilCEk4h+KDceV/prWWkgq5z5RQVxhqRsP5GhpsoVGpzwA4hVJyDSk6CMVRFGCoVgvPmPaXPLc1OXGhFCToQK4tmIB+TR//qTiBANJtnLCS1IFSPWklTgtlODpChY8pvJ7aWXJIkp1nxEly4kkeSqI4ipmfjdTKUg2keJ2z1YSFBdIQc2ZyhXTFhVEnnIrlGw9hyBJJc0kMbcWhyQp6DOlqzwTvBaMsGzF/Ij/pNyWVNKXbxmx5qxT4rP69MWWJGiaKXkOWOpMMrsmD7wWZHI6aSEGTquGxYVYRSpUrdVD2Dg8QR+7y0sxtu67tFJlc/qX7xm8FlSJBUYUdVMqlfMvnipVL3smLi4o6iWzvyb/+z1g9TZ2X5xsbdtH0keujDlm4pEi1jcmi0iCZMlqSiWMieHqScPi8xBu1L7ByIX4QxyKWx/AC6H8UcAq+4EzFORZVdyQbwikjvaslEp+uTCiM2V3kBUaWcbkKbcasOQRtka6UmVLIVvO+NkZ4bMTYtCK3DqU3cqzquSuB+N9G1Yt2TMR5WbB//0Vn2Yv4sbvLKiFiwGtGArfz/PX53a3IuwqlYLHNch/g1YAWc9HZn97vi81JNawdNlr3sAUyw1TNjDvcOvxD/dCnU9RKxm8AAAAAElFTkSuQmCC";
const facebook = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHFSURBVHgB7ZjNTcNAEIXfLHEwnCxRAAtSEEc6ADqgA5wSUgGhAkrA6SRUQI5ICbA0AOaAWPLjYXOIsJ0AWezEIfJ3sWa8kp/GszuzA5SsOTTL6ciaTwLHWCIc4WagukHaPyWwul+7JoaPAmBC0H/o1uO+jbgxjpwAmigIE60j4e08ReFzZ+ITqQUnKJh0agmsOBUsCoYCsfqySZpfJGFJ7gKJ+RIYBlopNet9da92O841zEluAhkImXE6UL3OT+uMuBAW5JaDgtEw51gHOZNPBJnbWvUCLIBcBBKo9d07T0rvDc7ZxDap4BHmJxeBQ8R2awx3/+DinbmZJY9yycEKjR5n+ZnZR0YWdlC78lCah0RGVr6SlAKzYr2LI47qA3Uf/LZOqzuFdL9pjpxNcl5gwVIj6KIydw2esFSBI5CEJUsVKBCtdgRNSu7CEutNIkicm4tVoi3fjgaNUKlkG2U2RFU4VwkfwzqCf6nFJ+bWl0ATNZHq81y4HvPIR0bKgzorpcCslAKz8r8EGqONghFmDJew44Y28zlz+W6hIMbf1qkZ4VQl6auu78paO7IYYG5F/KpTPg0dVskJMCfjyH3MGGCWrD2f3iaFvY3C+dcAAAAASUVORK5CYII=";
const twitter = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAK4SURBVHgB7ZhRctowEIZ3haFOnzyTC4ikZPoWeoI6J4AbhJyg9ASlJ0g5QcgNkhOUnKDkrTOkRb1Ax0+pCaDtCmhCHBhL4IQmw/8AsrySP8ur1UoAG71w4bzKvCzVUMB7eEKRhouB6raS9Q8ACzulEySowRpECK2bn92j2brc7IUZOQHQgDWJR6ssgu1fOvrd+VcnEgYhrFlJ1xLwn2sDuKo8eCwRtfn3XANGAihgB6+wh4W3twEi889+H8CqgIR4hkRlLkore6LPN+qqkaj+4nOU0IIqQsMlg58JhG9pfVkBaq2bHniKcPQ1DXIB3FjxJBC3AimDP5g3fam0/qx80MNRL1bfFVLuYNrpIvHnHLYgRTF45S0amL6iNFunSWIg+71ukVcaE+3VAwOiTqyUSuvHh2HnWuSPuVhOs7UC1JQ7ug/abd2BjieDk67Bq9sup1aAiPjBl1Im6yegVwcMi5rgHTv+R8hYVpMECZsEuToX64tsOBPpgKU4tOzb2loBDkG3h+pHGzIShy2JlrZWn1gIPISsxCEGLSbH7bNtjIxD+7t7mUDmIV91sbcOM6SpZZLZeZPF6YEITi/qEgcjTsubvkVwXaSC3DWjF7q0cQEM2PowUmppQERx7NjEbSURBPXCzt4nWEL+pJ0ERznng5zVNF4VSz3jj7ZtDBwnEQ1YQs6AJo9jyNPXemC1aqwCZ5QaqBmow0nAORowLm/xQm/8ME5p58u3ktOzE4YLYQWlAo6DKmJEpJt9Xk3SwDz5JuS9bEXjqJaWLWcCOFXIMzAsFEsRJw5t0vqSANXdbQpQ4D4H9BCmE8F2KcsKEKYPDfhzVxmyisk7BI+izbZzVT0vQL5ow5rFW9KL2et7p1tDPlXKBdtFRPt8LUsRwWlfdRuzdXOjwWSD/bQHmGbk4jkHmBu9eP0FoyL8Wji23XwAAAAASUVORK5CYII=";
const linkedin = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAHaSURBVHgB7ZjRUcJAEIb/PUF5wxJOR0YftQKhAzsgHQgViB3QgdgBViB2kHczeh3omyCQdXFk5giZuUAmCYP5XuB2L5c/l9vdywElew5FDRV91lSK2igADvEyNa8D27YisKobniI8oEDmzK2ZCUbLtrKdoraJgom+PYUdZz8EEvM98fQkZFwx4xE5UnF1YBE3MUHPMnmHugEi5BLpzhlk0HDdGg6RE06BBzT7WL+IPpETToFzqnSithD5JXLnGlSMzuFp4zgM+Tc4ZPbasv485IRT4AJieAdEHgogkcA0SBbwochf/Jd0pSXoLqViHSe9PlGa+V5NM5A0M1immTj/0UnjWRyLtdqdmsCPjlnTZz0mukMCsqkkxL7kzpbsTPw491geSDF3E4yUjcDJW+C8+ZcJ+vIzcvUrthYzP7m6ZBYkR6fnt8xh7y8gjNTy1tgYY/cRn8+OcTKZwZq+0LI97lvRqpmqMRvhinGNlYlAxuwmxqyxBRkJjM1zGltQ7qjTUgpMSykwLTsv0FnqpBrUa1pr28bg+vLUJN6PetxY0X7ATMccD20mUL4vO4xqZ2u/hZS7d2xIuQbTolYbPEDBKDkjtNtrK7QmZ4ShwjUKQMmn7dg6Gyz5F/wA4CeXrQ6UeFAAAAAASUVORK5CYII=";
const css$1 = {
  code: 'h3.svelte-16bbhe3{font-style:normal;font-weight:500;font-size:15px;line-height:18px;text-align:center;color:#072125ad;letter-spacing:-0.035em;margin:1.5rem 0 2rem 0}hr.svelte-16bbhe3{border:none;height:1px;background-color:#0721255e;margin:1rem}h2.svelte-16bbhe3{font-style:normal;font-weight:700;font-size:1.2rem;margin-inline:1rem;color:#072125}img.svelte-16bbhe3{margin-inline:0.5rem}.nav-element.svelte-16bbhe3{font-weight:900;margin-inline:2rem;font-family:"Supreme";transition:0.2s}.nav-element.svelte-16bbhe3:hover{color:#f4b931;transition:0.2s }nav.svelte-16bbhe3{background:linear-gradient(\r\n        0deg,\r\n        rgba(255, 255, 255, 0.97),\r\n        rgba(255, 255, 255, 0.97)\r\n      ),\r\n      #072125}.contact.svelte-16bbhe3{margin-inline:2rem;border-radius:30px;color:black;padding-top:10px;padding-bottom:10px;padding-left:20px;padding-right:20px;text-align:center;justify-content:center;display:flex;background-color:#f4b931;transition:0.3s}.contact.svelte-16bbhe3:hover{color:black;background-color:#fcd988;transition:0.3s}@media screen and (max-width: 768px){.contact.svelte-16bbhe3{border-radius:30px;color:black;text-align:center;justify-content:center;align-items:center;display:flex;font-size:0.75rem;background-color:#f4b931;width:30%;padding:0.5rem;margin:1rem}}',
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$result.css.add(css$1);
  $$unsubscribe_page();
  return `<nav class="md:flex flex-col hidden svelte-16bbhe3"><div class="z-20 text-black items-center flex flex-row justify-between w-full p-5">${$page.url.pathname !== "/" ? `<a href="/" class="nav-element svelte-16bbhe3"><img${add_attribute("src", logo, 0)} width="150" alt="" class="svelte-16bbhe3"></a>` : `<a href="#home"><img${add_attribute("src", logo, 0)} width="150" alt="" class="nav-element cursor-pointer svelte-16bbhe3"></a>`}

    <div class="flex flex-row items-center">${$page.url.pathname !== "/" ? `<a href="/" class="nav-element svelte-16bbhe3">Home</a>` : `<a href="#home" class="nav-element svelte-16bbhe3">Home</a>`}
      <a href="/about" class="nav-element svelte-16bbhe3">About</a>
      <a href="/product" class="nav-element svelte-16bbhe3">Product</a>
      <a href="/contact" class="contact svelte-16bbhe3">Contact Us</a></div></div>
  <div class="flex flex-row-reverse px-3 items-center"><a href="https://www.instagram.com/ezinore/" target="_blank"><img${add_attribute("src", instagram, 0)} width="30" alt="" class="svelte-16bbhe3"></a>
    <a href="https://www.facebook.com/ezinore" target="_blank"><img${add_attribute("src", facebook, 0)} width="30" alt="" class="svelte-16bbhe3"></a>
    <a href="https://twitter.com/ezinore" target="_blank"><img${add_attribute("src", twitter, 0)} width="30" alt="" class="svelte-16bbhe3"></a>
    <a href="https://www.linkedin.com/company/ezinore-private-limited/?originalSubdomain=in" target="_blank"><img${add_attribute("src", linkedin, 0)} width="30" alt="" class="svelte-16bbhe3"></a>
    <h2 class="svelte-16bbhe3">Follow us:</h2></div>
  <hr class="svelte-16bbhe3">
  <h3 class="svelte-16bbhe3">@ Ezinore 2022. All Right Reserved</h3></nav>

<nav class="md:hidden flex flex-col absolute w-full svelte-16bbhe3"><div class="flex flex-row justify-between items-center">${$page.url.pathname !== "/" ? `<a href="/" class="nav-element svelte-16bbhe3"><img${add_attribute("src", logo, 0)} alt="" width="100" class="svelte-16bbhe3"></a>` : `<a href="#home"><img${add_attribute("src", logo, 0)} width="150" alt="" class="nav-element cursor-pointer svelte-16bbhe3"></a>`}

    <a href="/contact" class="contact svelte-16bbhe3">Contact Us</a></div>

  <div class="flex flex-row justify-between p-5">${$page.url.pathname !== "/" ? `<a href="/" class="nav-element svelte-16bbhe3">Home</a>` : `<a href="#home" class="nav-element svelte-16bbhe3">Home</a>`}
    <a href="/about" class="nav-element svelte-16bbhe3">About</a>
    <a href="/product" class="nav-element svelte-16bbhe3">Product</a></div>

  <div class="flex flex-row justify-between p-5"><h2 class="svelte-16bbhe3">Follow us:</h2>
    <a href="https://www.instagram.com/ezinore/" target="_blank"><img${add_attribute("src", instagram, 0)} width="30" alt="" class="svelte-16bbhe3"></a>
    <a href="https://www.facebook.com/ezinore" target="_blank"><img${add_attribute("src", facebook, 0)} width="30" alt="" class="svelte-16bbhe3"></a>
    <a href="https://twitter.com/ezinore" target="_blank"><img${add_attribute("src", twitter, 0)} width="30" alt="" class="svelte-16bbhe3"></a>
    <a href="https://www.linkedin.com/company/ezinore-private-limited/?originalSubdomain=in" target="_blank"><img${add_attribute("src", linkedin, 0)} width="30" alt="" class="svelte-16bbhe3"></a></div>
  <hr class="svelte-16bbhe3">
  <h3 class="svelte-16bbhe3">@ Ezinore 2022. All Right Reserved</h3>
</nav>`;
});
const css = {
  code: '@import url("https://fonts.googleapis.com/css2?family=Poppins&display=swap");@import "../fonts.css";',
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="main">
  ${validate_component(Navbar, "Navbar").$$render($$result, {}, {}, {})}
  
  ${slots.default ? slots.default({}) : ``}
  ${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}
</div>`;
});

export { Layout as default };
//# sourceMappingURL=_layout.svelte-74b6522a.js.map
