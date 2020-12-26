const editor = (selector: string) => {
  const textDom = document.querySelector(selector);
  console.log(
    "%c 🍾 textDom: ",
    "font-size:20px;background-color: #93C0A4;color:#fff;"
  );
  textDom?.setAttribute("contenteditable", "true");
};

export default editor;
