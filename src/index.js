function el(tag, className, parent, text, placeholder, type, name, checked) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (parent) parent.appendChild(element);
    if (text) element.textContent = text;
    if (placeholder) element.setAttribute('placeholder', placeholder);
    if (type) element.type = type;
    if(name) element.name = name;
    if(checked) element.checked = checked;
    return element;
}

const container = el("div", 'container', document.body);
el("span", 'mainText', container, "CREATE AN ACCOUNT");
el('span', 'slimText', container, "We always keep your name and email address private.")
const inputsContainer = el("div", "inputsContainer", container);
const row1 = el("div", "input-row", inputsContainer);
const row2 = el("div", "input-row", inputsContainer);
const row3 = el("div", "input-row", inputsContainer);
el("input", "input-item", row1, false, "First Name");
el("input", "input-item", row1, false, "Last Name");
el("input", "input-item", row2, false, "Display Name");
el("input", "input-item", row2, false, "Email Address");
el("input", "input-item", row3, false, "Password");
el("input", "input-item", row3, false, "Password Confirmation");
const block1 = el("div", "block", container);
el("input", "rad", block1, false, false, "radio", "radio", true);
const wrapper1 = el("div", "wrapper", block1);
el("div", "blockTextMain", wrapper1, "Join As a Buyer");
el("div", "blockTextSmaller", wrapper1, "I am looking for a Name, Logo or Tagline for my business, brand or product.");
const block2 = el("div", "block", container);
el("input", "rad", block2, false, false, "radio", "radio");
const wrapper2 = el("div", "wrapper", block2);
el("div", "blockTextMain", wrapper2, "Join As a Creative or Marketplace Seller");
el("div", "blockTextSmaller", wrapper2, "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace");
const lastWrapper = el("div", "lastWrapper", container);
el("input", "chb", lastWrapper, false, false, "checkbox");
el("span", "blockTextSmaller", lastWrapper, "Allow Squadhelp to send marketing/promotional offers from time to time");
const createBtn = el("button", "createBtn", container, "Create account");