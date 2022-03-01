import { useState } from "react";

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`;

function App() {
  const [text, setText] = useState(placeholder);
  function handleInput(input) {
    const markdown = window.marked.parse(input.target.value);
    setText(markdown);
  }
  function createMarkup(markup) {
    /* Should sanitize markup */
    // const clean = window.dompurify.DOMPurify.sanitize(markup, {
    //   USE_PROFILES: { html: true },
    // });
    return { __html: markup };
  }
  return (
    <>
      <div>
        <textarea id="editor" onInput={handleInput}></textarea>
      </div>
      <div id="preview" dangerouslySetInnerHTML={createMarkup(text)}></div>
    </>
  );
}

export default App;
