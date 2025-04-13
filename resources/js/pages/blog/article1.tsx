import Markdown from '@/components/markdown';
import { Head } from '@inertiajs/react';

const articleContent = `
# Sample Article

This is a paragraph with **bold** text and *italic* text.

## Code Example

\`\`\`javascript
function greet(name) {
  return \`Hello, \${name}!\`;
}
\`\`\`

- - Item 1
- - Item 2





# Markdown Test Page

## Headings

# H1
## H2
### H3
#### H4
##### H5
###### H6

---

## Emphasis

*Italic*  
_Italic_  
**Bold**  
__Bold__  
~~Strikethrough~~

---

## Blockquote

> This is a blockquote  
> With multiple lines  
>> Nested blockquote

---

## Lists

### Unordered

- Item 1
  - Item 1a
  - Item 1b
- Item 2

### Ordered

1. First
2. Second
   1. Second.1
   2. Second.2
3. Third

---

## Task List

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

---

## Code

### Inline Code

Here is some \`inline code\`.

### Block Code

\`\`\`js
// JavaScript example
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("World");
\`\`\`

\`\`\`python
# Python example
def greet(name):
    print(f"Hello, {name}!")

greet("World")
\`\`\`

---

## Links

[OpenAI](https://openai.com)

---

## Images

![Alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png "Placeholder Image")

---

## Horizontal Rule

---

## Tables

| Syntax | Description |
|--------|-------------|
| Header | Title       |
| Paragraph | Text     |

---

## HTML Inside Markdown

<div style="color: red; font-weight: bold;">
  This is raw HTML inside Markdown.
</div>

---

## Footnotes

Here is a footnote reference[^1].

[^1]: This is the footnote content.

---

## Emoji (GFM)

I love Markdown! 😄 🚀 👍

---

## Autolink

www.example.com  
https://github.com

---

## Strikethrough

~~This was mistaken text~~

---

## Highlight (Custom HTML)

<mark>Highlighted text</mark>

---

## Math (Note: not supported by default)

\`\`\`math
E = mc^2
\`\`\`

---



## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|\`'Isn't this fun?'\`            |'Isn't this fun?'            |
|Quotes          |\`"Isn't this fun?"\`            |"Isn't this fun?"            |
|Dashes          |\`-- is en-dash, --- is em-dash\`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

\`\`\`mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
\`\`\`

And this will produce a flow chart:

\`\`\`mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
\`\`\`



_End of Markdown Test Page_


`;

const markdownContent = `
# Markdown Test Page
## Headings
# H1
## H2
### H3
#### H4
##### H5
###### H6

## Text effects

*Italic*  
_Italic_  
**Bold**  
__Bold__  
~~Strikethrough~~

## Blockquote

> This is a blockquote  
> With multiple lines  
>> Nested blockquote

## Lists

### Unordered

- Item 1
  - Item 1a
  - Item 1b
- Item 2

### Ordered

1. First
2. Second
   1. Second.1
   2. Second.2
3. Third

## Task List

- [x] Task 1
- [ ] Task 2
- [ ] Task 3

## Table
| Syntax      | Description | Test Text     |
| :---        |    :----:   |          ---: |
| Header      | Title       | Here's this   |
| Paragraph   | Text        | And more      |

## Code

### Inline Code

Here is some \`inline code\`.

### Block Code

\`\`\`js
// JavaScript example
function greet(name) {
  console.log(\`Hello, \${name}!\`);
}
greet("World");
\`\`\`

\`\`\`python
# Python example
def greet(name):
    print(f"Hello, {name}!")

greet("World")
\`\`\`

\`\`\`php
// PHP example
def greet(name):
    print(f"Hello, {name}!")
greet("World")
\`\`\`

## Links
[Google](https://www.google.com)

## Images
![Alt text](https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/330px-Image_created_with_a_mobile_phone.png "Placeholder Image")

## Horizontal Rule

---

## Highlight (Custom HTML)

<mark>Highlighted text</mark>

## Math

\`\`\`math
E = mc^2
\`\`\`


## SmartyPants
|                |ASCII                          |SMART                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|\`'Isn't this fun?'\`            |'Isn't this fun?'            |
|Quotes          |\`"Isn't this fun?"\`            |"Isn't this fun?"            |
|Dashes          |\`-- is en-dash, --- is em-dash\`|-- is en-dash, --- is em-dash|


## KaTeX
The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

## UML diagrams

\`\`\`mermaid
sequenceDiagram
Alice ->> Bob: Hello Bob, how are you?
Bob-->>John: How about you John?
Bob--x Alice: I am good thanks!
Bob-x John: I am good thanks!
Note right of John: Bob thinks a long<br/>long time, so long<br/>that the text does<br/>not fit on a row.

Bob-->Alice: Checking with John...
Alice->John: Yes... John, how are you?
\`\`\`

\`\`\`mermaid
graph LR
A[Square Rect] -- Link text --> B((Circle))
A --> C(Round Rect)
B --> D{Rhombus}
C --> D
\`\`\`

_End of Markdown Test Page_
`;

export default function article1() {
    return (
        <>
            <Head title="Article 1">
                {/*<link rel="preconnect" href="https://fonts.bunny.net" />
                <link href="https://fonts.bunny.net/css?family=instrument-sans:400,500,600" rel="stylesheet" />*/}
            </Head>

            <div className="flex h-full flex-col items-center bg-[#FDFDFC] p-6 text-[#1b1b18] lg:justify-center lg:p-8 dark:bg-[#0a0a0a]">
                <div className="flex w-full items-center justify-center opacity-100 transition-opacity duration-750 lg:grow starting:opacity-0">
                    <main className="flex w-full max-w-[100%] flex-col-reverse lg:flex-row">
                        <div className="flex-1 rounded-tl-lg rounded-tr-lg rounded-br-lg rounded-bl-lg bg-white p-6 pb-12 text-base leading-[20px] shadow-[inset_0px_0px_0px_1px_rgba(26,26,0,0.16)] lg:p-20 dark:bg-[#161615] dark:text-[#EDEDEC] dark:shadow-[inset_0px_0px_0px_1px_#fffaed2d]">
                            <h1 className="mb-1 text-2xl font-medium">article1</h1>
                            <p className="mb-2 text-xl text-[#706f6c] dark:text-[#A1A09A]">Wip</p>
                            <Markdown content={markdownContent} />
                        </div>
                    </main>
                </div>
                <div className="hidden h-14.5 lg:block"></div>
            </div>
        </>
    );
}
