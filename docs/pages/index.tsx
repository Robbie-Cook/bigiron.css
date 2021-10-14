/** @jsxImportSource @emotion/react */
import * as React from 'react';
import { jsx, css } from '@emotion/react';
// @ts-ignore
import Colors from '../colors.json';

import Color from '../components/Color/Color';
import { Options } from '../components/Options';
import { Plug } from '@robbie-cook/react-components';

/**
 * Interface for CodeSnippet props
 */
export interface CodeSnippetProps {
  snippet: string;
}

/**
 *  A CodeSnippet component.
 */
const CodeSnippet: React.FC<CodeSnippetProps> = (props) => {
  return (
    <div
      css={css`
        margin-bottom: 10px;
      `}
    >
      <code
        css={css`
          user-select: all;
          display: block;
        `}
      >
        {props.snippet}
      </code>
    </div>
  );
};

const cssFiles = {
  normal: 'bigiron.css',
  light: 'light.css',
  dark: 'dark.css',
  'variables-only': 'vars.css',
};

function App({
  cssState,
  setCssState,
}: {
  cssState: 'normal' | 'light' | 'dark';
  setCssState: Function;
}) {
  return (
    <>
      <main>
        <h1>🔨 Bigiron.css</h1>

        <p>
          Bigiron.css is a fork of{' '}
          <a href="https://watercss.kognise.dev/">water.css</a>, with SCSS
          source files, different default colors, and more Texas Red.
        </p>
        <p></p>
        <p>
          Now you can write your simple static site with nice semantic html, and
          Bigiron.css will manage the styling for you.
        </p>

        <div className="row">
          <div>
            <a href="https://github.com/Robbie-Cook/bigiron.css">
              <b>GitHub</b>
            </a>
          </div>
        </div>

        <h2>Installation</h2>
        <div id="installation">
          <header className="row"></header>

          <h3>Install</h3>

          <Options cssState={cssState} setCssState={setCssState} />
          <br />

          <div>
            <CodeSnippet snippet={`npm i bigiron.css`} />
          </div>

          <CodeSnippet
            snippet={`import "bigiron.css/dist/${cssFiles[cssState]}"`}
          />

          <h3 id="link-snippet-headline">
            Or paste this into the <code>&lt;head&gt;</code> of your HTML:
          </h3>

          <CodeSnippet
            snippet={`<link rel="stylesheet" href="https://unpkg.com/bigiron.css@latest/dist/${cssFiles[cssState]}" />`}
          />
        </div>

        <div>
          <h2>CSS Variables</h2>

          <div
            css={css`
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              margin: 20px 0;
            `}
          >
            {Object.entries(Colors).map(([key, color]) => (
              // @ts-ignore
              <Color name={`var(--${key})`} color={color} />
            ))}
          </div>

          <p>Below is all of the CSS variables BigIron uses</p>
          <code style={{ whiteSpace: 'pre' }}>
            {Object.entries(Colors).reduce((acc, curr) => {
              if (!curr[0].match(/select-arrow/g)) {
                acc += `--${curr[0]}: ${curr[1]};\n`;
              }
              return acc;
            }, '')}
          </code>
        </div>

        <h2 id="goals">Goals</h2>
        <ul>
          <li>Responsive</li>
          <li>Good code quality</li>
          <li>Good browser support</li>
          <li>Small size (&lt; 2kb)</li>
          <li>Beautiful</li>
          <li>No classes</li>
        </ul>

        <h2 id="responsive">Is it responsive?</h2>
        <p>
          <strong>Heck yeah!</strong> It doesn't include any fancy styles so
          it's easily mobile responsive. Just add the famous
          <a href="https://www.w3schools.com/css/css_rwd_viewport.asp">
            responsive viewport tag
          </a>{' '}
          and you'll be good to go!
        </p>
        <p>
          In fact, try resizing this page. Everything flows super nicely as
          you'll see.
        </p>

        <h2 id="demo">Element demos</h2>
        <p>This is supposed to be a demo page so we need more elements!</p>

        <h3 id="form-elements">Form elements</h3>
        <form>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john.doe@gmail.com"
          />

          <label htmlFor="id">User id (read only)</label>
          <input name="id" id="id" value="04D6H89Z" />

          <label htmlFor="disabled">Random disabled input</label>
          <input
            disabled
            name="disabled"
            id="disabled"
            placeholder="Because why not?"
          />

          <label htmlFor="about">About me</label>
          <textarea
            name="about"
            id="about"
            placeholder="I am a textarea..."
          ></textarea>

          <label>Choose a Doe:</label>
          <div>
            <input type="radio" id="john" name="drone" value="john" checked />
            <label htmlFor="john">John Doe</label>
          </div>
          <div>
            <input type="radio" id="jane" name="drone" value="jane" checked />
            <label htmlFor="jane">Jane Doe</label>
          </div>
          <div>
            <input
              type="radio"
              id="johnny"
              name="drone"
              value="johnny"
              checked
            />
            <label htmlFor="johnny">Johnny Doe</label>
          </div>

          <br />

          <input type="checkbox" name="remember" id="remember" checked />
          <label htmlFor="remember">Remember me</label>

          <input type="submit" value="Submit" />
        </form>

        <h3 id="code">Code</h3>
        <p>
          Below is some code, you can copy it with <kbd>Ctrl-C</kbd>. Did you
          know,
          <code>alert(1)</code> can show an alert in JavaScript!
        </p>
        <pre>
          <code>
            // This logs a message to the console and check out the scrollbar.
          </code>
        </pre>

        <h3 id="other">Other</h3>
        <p>
          Here's a horizontal rule and image because I don't know where else to
          put them.
        </p>
        <img src="https://placekitten.com/408/287" alt="Example kitten" />
        <hr />

        <p>And here's a nicely marked up table!</p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Godzilla</td>
              <td>2</td>
              <td>$299.99</td>
            </tr>
            <tr>
              <td>Mozilla</td>
              <td>10</td>
              <td>$100,000.00</td>
            </tr>
            <tr>
              <td>Quesadilla</td>
              <td>1</td>
              <td>$2.22</td>
            </tr>
          </tbody>
        </table>

        <details>
          <summary>Some summary/details can't hurt!</summary>
          <p>Lorem ipsum dolor sit blah blah.</p>
        </details>

        <p>The dialog (form, and menu) tag</p>

        <div>
          <button type="button" id="dialog-trigger">
            Show me the dialog!
          </button>
          <span id="dialog-result"></span>
        </div>

        <dialog id="dialog">
          <header>This is a sample dialog</header>
          <form method="dialog">
            <p>What is your favorite pet animal?</p>
            <menu>
              <button value="feline">Cats</button>
              <button value="canine">Dogs</button>
              <button value="other">Others</button>
            </menu>
          </form>
        </dialog>

        <h3 id="typography">Typography</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          dictum hendrerit velit, quis ullamcorper sem congue ac. Quisque id
          magna rhoncus, sodales massa vel, vestibulum elit. Duis ornare
          accumsan egestas. Proin maximus lacus interdum leo molestie convallis.
          Orci varius natoque penatibus et magnis dis parturient montes,
          nascetur ridiculus mus. Ut iaculis risus eu felis feugiat, eu mollis
          neque elementum. Donec interdum, nisl id dignissim iaculis, felis dui
          aliquet dui, non fermentum velit lectus ac quam. Class aptent taciti
          sociosqu ad litora torquent per conubia nostra, per inceptos
          himenaeos.
          <strong>This is strong,</strong> this is normal,{' '}
          <b>this is just bold,</b>
          <em>and this is emphasized!</em> And heck, <a href="/">here</a>'s a
          link.
        </p>

        <blockquote cite="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote">
          "The HTML blockquote Element (or HTML Block Quotation Element)
          indicates that the enclosed text is an extended quotation. Usually,
          this is rendered visually by indentation (see
          <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/blockquote#Usage_notes">
            Notes
          </a>
          for how to change it). A URL for the source of the quotation may be
          given using the
          <code>cite</code> attribute, while a text representation of the source
          can be given using the
          <code>&lt;cite&gt;</code> cite element."
          <footer>
            <cite>MDN, "The Block Quotation element"</cite>
          </footer>
        </blockquote>

        <ul>
          <li>Unordered list item 1</li>
          <li>Unordered list item 2</li>
          <li>Unordered list item 3</li>
        </ul>
        <ol>
          <li>Ordered list item 1</li>
          <li>Ordered list item 2</li>
          <li>Ordered list item 3</li>
        </ol>

        <p>
          Addresses are also styled to be <strong>awesome</strong>!
        </p>
        <address>
          <a href="mailto:john.doe@example.com">john.doe@example.com</a>
          <br />
          <a href="tel:778-330-2389">778-330-2389</a>
          <br />
          <a href="sms:666-666-6666">666-666-6666</a>
          <br />
        </address>

        <br />

        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <h6>Heading 6</h6>

        <footer>
          <a href="#">Back to top ⬆</a>
          <Plug />
        </footer>
      </main>
    </>
  );
}

export default App;
