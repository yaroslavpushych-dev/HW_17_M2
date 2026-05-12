function el(tag, className, parent, text, placeholder, type, name, checked) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (parent) parent.appendChild(element);
    if (text) element.textContent = text;
    if (placeholder) element.setAttribute('placeholder', placeholder);
    if (type) element.type = type;
    if (name) element.name = name;
    if (checked) element.checked = checked;
    return element;
}

const container = el("div", 'container', document.body);
el("span", 'mainText', container, "CREATE AN ACCOUNT");
el('span', 'slimText', container, "We always keep your name and email address private.");

const inputsContainer = el("div", "inputsContainer", container);
const row1 = el("div", "input-row", inputsContainer);
const row2 = el("div", "input-row", inputsContainer);
const row3 = el("div", "input-row", inputsContainer);
const rowItems = [
    [row1, "First Name"],
    [row1, "Last Name"],
    [row2, "Display Name"],
    [row2, "Email Address"],
    [row3, "Password"],
    [row3, "Password Confirmation"]
]
for (let i = 0; i < rowItems.length; i++)
    el("input", "input-item", rowItems[i][0], false, rowItems[i][1]);

const block1 = el("div", "block", container);
const wrapper1 = el("div", "wrapper", block1);
const block2 = el("div", "block", container);
const wrapper2 = el("div", "wrapper", block2);

const blockItems = [
    [
        block1,
        true,
        "Join As a Buyer",
        "I am looking for a Name, Logo or Tagline for my business, brand or product.",
        wrapper1, 
        "blockTextMain", 
        "blockTextSmaller"
    ],
    [
        block2,
        false,
        "Join As a Creative or Marketplace Seller",
        "I plan to submit name ideas, Logo designs or sell names in Domain Marketplace",
        wrapper2,
        "blockTextMain",
        "blockTextSmaller"
    ]
]

for (let i = 0; i < blockItems.length; i++) {
    el("input", "rad", blockItems[i][0], false, false, "radio", "radio", blockItems[i][1]);
    el("div", blockItems[i][5], blockItems[i][4], blockItems[i][2]);
    el("div", blockItems[i][6], blockItems[i][4], blockItems[i][3]);
}

const lastWrapper = el("div", "lastWrapper", container);
el("input", "chb", lastWrapper, false, false, "checkbox");
el("span", "blockTextSmaller", lastWrapper, "Allow Squadhelp to send marketing/promotional offers from time to time");
const createBtn = el("button", "createBtn", container, "Create account");