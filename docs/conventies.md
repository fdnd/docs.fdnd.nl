# Conventies

## Workflow conventies

### The Girl / Boy Scout Rule
_"The Boy Scout Rule advocates for continuous improvement in code quality with each change made. Rather than waiting for designated cleanup periods, developers strive to leave the codebase better than they found it, even if it’s just a small enhancement."_

[The Girl / Boy Scout Rule in Software Development](https://medium.com/@mas-al/the-boy-scout-rule-in-software-development-f94a11c5cfa1)

### Write a good README.md
_"Have you ever wondered what makes a good README? The kind that stands out, draws you in, and most importantly, helps you understand the project?"_

[How to write a perfect readme for your GitHub project](https://dev.to/mfts/how-to-write-a-perfect-readme-for-your-github-project-59f2)

### Branching strategy
At FDND we use [The Git Flow workflow](https://www.gitkraken.com/learn/git/git-flow#the-git-flow-workflow) as a branching strategy.

![Git Flow workflow visualized](https://www.gitkraken.com/wp-content/uploads/2021/03/git-flow-4.svg)

Bron: https://www.gitkraken.com/learn/git/git-flow#the-git-flow-workflow

#### Branch naming

Next to Git Flow we use [Conventional Branch](https://conventionalbranch.org/) for naming our branches. It is inspired by Conventional Commits: a structured, readable branch name tells everyone (and every automated tool) what a branch is for, just by looking at its name. The branch name should be structured as follows: `<type>/<description>`.

##### Allowed branch types
- `feature/` (or `feat/`) Implementing a new feature, eg: `feature/add-login-page`
- `bugfix/` (or `fix/`) Fix for a bug, style or layout issue, eg: `bugfix/fix-header-bug`
- `hotfix/` Urgent fix, eg: `hotfix/security-patch`
- `release/` Preparing a release, eg: `release/v1.2.0`
- `chore/` Non-code tasks such as dependency or documentation updates, eg: `chore/update-contributing`

The long-lived branches `main` and `dev` are trunk branches and don't use a prefix.

> The types intentionally map to our commit types (`feat`, `fix`, `chore`) and to the branches of Git Flow (`feature`, `release`, `hotfix`), so use the short alias (`feat/`, `fix/`) or the long form (`feature/`, `bugfix/`), but be consistent within a project.

##### Rules
1. Use lowercase letters (`a-z`), numbers (`0-9`) and hyphens (`-`) to separate words. No spaces, underscores or other special characters.
2. Dots (`.`) are only allowed in `release/` branches to represent version numbers, eg: `release/v1.2.0`.
3. No consecutive, leading or trailing hyphens or dots in the description.
4. Keep it clear and concise: the name describes the purpose of the work.
5. Include the issue number, as we also do in our commits, eg: `feature/issue-123-new-login`. Don't use a `#` in a branch name, write `issue-123` instead.
6. Use English for the description, just like everywhere else in our code.

##### Examples

| Branch name | Valid | Notes |
|---|---|---|
| `main`, `dev` | ✅ | Trunk branches, no prefix |
| `feature/add-login-page` | ✅ | New feature |
| `feat/add-login-page` | ✅ | Short alias for feature |
| `fix/header-bug` | ✅ | Short alias for bugfix |
| `hotfix/security-patch` | ✅ | Urgent fix |
| `release/v1.2.0` | ✅ | Release with version number |
| `chore/update-dependencies` | ✅ | Non-code task |
| `feature/issue-123-new-login` | ✅ | Feature with issue number |
| `Feature/Add-Login` | ❌ | Uppercase letters |
| `feature/new--login` | ❌ | Consecutive hyphens |
| `feature/-new-login` | ❌ | Leading hyphen |
| `feature/new-login-` | ❌ | Trailing hyphen |
| `fix/header bug` | ❌ | Spaces |
| `fix/header_bug` | ❌ | Underscores |
| `unknown/some-task` | ❌ | Unknown type |

##### Branches created by AI agents
Branches created by AI coding agents get the prefix of the agent so reviewers can recognize them right away: `claude/`, `copilot/`, `cursor/` and `codex/`. Use `ai/` for any other agent, eg: `claude/security-patch` or `ai/refactor-auth-flow`.

##### Source
[Conventional Branch](https://conventionalbranch.org/)


#### Archiving branches

We like to keep an archive of code written in the past. Using GitHub tags we can archive code that we can restore whenever we need it but move it out of our branching strategy. To archive a branch use the following steps:

1. Tag the branch to be archived: ```git tag archive/sprintjuly2010 sprintjuly2010```
2. Delete the branch: ```git branch -d sprintjuly2010```
3. Push the branch deletion to origin: ```git push origin :sprintjuly2010```
4. Push the new tag to origin: ```git push --tags```

If you want to restore archived code use the following command:

1. Restore a deleted branch from a tag: ```git checkout -b sprintjuly2010 archive/sprintjuly2010```

### Commits

We embrace a certain way of writing commits, we use conventional commits, optional gitmojis and mandatory referencing of the linked issue. The commit message should be structured as follows: `<type>[optional scope]: <description> [optional gitmoji] <issue-number>`.

#### Committing strategy
> Committing often is very useful. It’s useful to commit every time you write code that you want to keep. You can even use temporary commits with messages such as "wip" (work in progress)." - [Version Control Tips door Spyros Argalias](https://programmingduck.com/articles/version-control-commit-early-push-once)

#### Conventional Commits  
At FDND Agency, because of Semantic Versioning, we use [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/). Conventional commit is a specification, a set of rules that have to be followed when writing commit messages.

##### Allowed Commit types
- `build: ...` Changes that affect the build system or external dependencies
- `chore: ...` Changes to the build process or auxiliary tools and libraries such as documentation generation
- `ci: ...` Changes to CI configuration files and scripts (GitHub Actions, `netlify.toml`)
- `docs: ...` Changes to documentation, eg: `Readme.md`, `Handover.md` or Figma files or design rationale in the Wiki
- `feat: ...` Implementing a new feature
- `fix: ...` Fix for a bug, style or layout issue  
- `perf: ...` A code change that improves performance
- `refactor: ...` A code change that neither fixes a bug nor adds a feature but improves structure or readability
- `style: ...` Changes that affect readability but not the working of the code (source formatting, adding tabs or newline)
- `test: ...` Adding missing or correcting existing tests

#### Reference issues in commits
Add the corresponding #issue-number to your commit messages for easy reference.

#### Gitmoji
Optionally use the [use gitmoji in commit messages](https://gitmoji.dev/) commit strategy as a visual add-on for conventions commits 😍

##### Example commits

A few examples for Frontend changes from our very own agency

- [refactor: Deduplicated marker popup creation to helper function 🧑‍💻](https://github.com/fdnd-agency/atlas4045/commit/f759aa484002c83896e3c86eae80503e50d3c731)
- [style: Formatting toegepast in src bestanden #91](https://github.com/fdnd-agency/toolgankelijk/commit/a0db5ce2e8288dcaa8ae5c266063c785e43970f4)
- [feat: animals uit de database worden nu opgehaald en weergegeven in de dropdown #213](https://github.com/fdnd-agency/tumimundo/commit/849984b90c3c731b8cc740bc3d3968fe182486b6)
- [fix: header font maat veranderd 🐛 #394](https://github.com/fdnd-agency/biebinbloei.nl/commit/6dd1bb24d362676141482ee49351a30ef7fd8002)


#### Bronnen
* [Automating Versioning and Releases Using Semantic Release](https://medium.com/agoda-engineering/automating-versioning-and-releases-using-semantic-release-6ed355ede742) 
* [use gitmoji in commit messages](https://gitmoji.dev/)  
* [Mastering commit messages](https://dev.to/itxshakil/commit-like-a-pro-a-beginners-guide-to-conventional-commits-34c3)

### Semantic versioning (🏗️ work in progress)
1. MAJOR version is incremented when you make any breaking change
2. MINOR version is incremented when you add a new feature/functionality
3. PATCH version is incremented when you make bug fixes

### Pull Request

We use a [pull Request template](https://github.com/fdnd-agency/.github/blob/main/pull_request_template.md) which you automagically get when creating a PR in one of our repositories.

Please make sure you follow the following rules:

* Write small PR's
* Review your own PR first
* Provide context and guidance

#### Bron
[Helping others review your changes](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/getting-started/helping-others-review-your-changes)

### Change log

In the change log (CHANGELOG.md) notable changes in a project are documented on a daily basis. Notable changes can be; new features, bug fixes, and updates. It helps developers track the project's progress over time. 

#### Example change log

```md
# Changelog

All notable changes to this project will be documented in this file.

## [Unreleased]
### Added
- Feature description

### Changed
- Modification description

### Fixed
- Bug fix description

## [1.2.0] - 2024-01-31
### Added
- New API endpoint for user authentication.
- Dark mode support in UI.

### Changed
- Updated dependencies to the latest versions.

### Fixed
- Fixed broken navigation on mobile.

## [1.1.0] - 2023-12-15
### Added
- Introduced a search bar feature.

```

## Code conventions

### General code conventions

#### Naming
* Use meaningful names for classes, IDs, variables, and function names.
* Use kebab-case for classes, css variables and id's in HTML/CSS
* Use camelCase in Javascript for JS variables and functions.
* English is the standard for naming.
* Be consistent in your naming
* Write out your classes, IDs, function names, and variables; there is no need to use abbreviations, that’s what minifiers are for.

```css
/* ✅ header-trigger describes the behaviour of the element */
/* ✅ the --primary-color variable name is descriptive */
.header-trigger {
  --primary-color: hotpink;
}
```

```css
/* ❌ button name is not descriptive, btn can be written out for more clarity */
/* ❌ color-1 is not descriptive */
/* ❌ kleur-2 is not descriptive, and not in English */
.btn-1 {
  --color-1: hotpink;
  --kleur-2: hotpink;
}
``` 

```html
<!-- ✅ id and class name use kebab-case and describe the behaviour of the element -->
<form id="contact-form" class="contact-form"></form>
```
```html
<!-- ❌ camelCasing in class and id name, in HTML we use kebab-case -->
<!-- ❌ my form is not a descriptive -->
<form id="contactForm" class="myForm"></form>
```
```html
<!-- ❌ be consistent in the naming practice (.button-primary and .button--secondary) -->
<button class="button-primary">Submit</button>
<button class="button--secondary">Submit</button>
``` 
```javascript
// ✅ modern function notation
// ✅ camelCase
// ✅ descriptive name
const initHeader = () => {} 
```
```javascript
// ❌ PascalCase
MyFunction() {} // 
```
```javascript
// ❌ use of var, standard: use const or let
var initHeader = () => {} 
``` 

### HTML conventions

#### Generic
* Use structured and [semantic HTML](https://developer.mozilla.org/en-US/docs/Glossary/Semantics)
* Do not nest content unnecessarily deeply. Avoid nesting `<section>` elements—and the associated heading levels—too deeply; instead, link to a different URL with more information where appropriate.
* Make use of built-in HTML features (such as the powerful form validation of form elements).
* 1 tab – for indentation.
* Use double quotes for attributes.

### CSS conventions

#### Generic
* 1 tab – for indentation.
* Follow HTML order in CSS
* Structure your code from generic to specific
* Take advantage of the __[cascade](https://developer.mozilla.org/en-US/docs/Web/CSS/Cascade)__ and __[inheritance](https://developer.mozilla.org/en-US/docs/Web/CSS/Inheritance)__, and use __utility classes__ to prevent code repetition (DRY)
* Use kebab-case in naming classes en id's.

#### Robust Font Face

Only use woff2 (and maybe woff for extra compatibility with some older browsers) for custom fonts.

**Example:**

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('webfont.woff2') format('woff2'),
       url('webfont.woff') format('woff');
  font-display: swap;
}

body {
  font-family: 'MyWebFont', Fallback, sans-serif;
}
```

##### Source
[Using font face in CSS](https://css-tricks.com/snippets/css/using-font-face-in-css/)

#### CSS Nesting
Use CSS nesting for more compact code. Always use [PostCSS](https://rodneylab.com/sveltekit-postcss-tutorial/#lipstick-sveltekit-postcss-tutorial-the-css-future-now) to convert nested CSS to flat CSS, since there is no fallback for CSS Nesting.

#### Pseudo-Private Custom Properties
Make smart use of  __[pseudo-private custom properties](https://lea.verou.me/blog/2021/10/custom-properties-with-defaults/)__ for more compact and modular code. 

Tip; combine it with CSS nesting for even more compact code!

**Example:**  
```css
button {
    --_opacity: 1;
    --_brdr-color: var(--primary-neutral);
    --_bg-color: var(--primary-lightest);
    --_color: var(--primary-darkest);
    
    border: 3px solid var(--_brdr-color);
    background: var(--_bg-color);
    color: var(--_color);
    opacity: var(--_opacity);

    &:hover,
    &:focus-visible {
        --_brdr-color: var(--accent-darkest);
        --_bg-color: var(--accent-lightest);
        --_color: var(--accent-darkest);
    }
}
```

#### Create a rich dynamic color palet with custom properties
By defining variations in `hue` and `saturation` with custom properties, you get a rich color palette, allowing you to use the primary colors with more variations in the interface. This allows you to create better visual hierarchy.

Use `HSL` over `#hex` coded color notation. 

##### Example
```css
/* Base HSL values */
    --primary-h: 359;
    --primary-s: 100%;

    --secondary-h: 162;
    --secondary-s: 100%;

    --accent-h: 51;
    --accent-s: 100%;

    /* Ligntness variations */
    --darkest: 15%;
    --dark: 30%;
    --neutral: 50%; 
    --light: 70%;
    --lightest: 90%;

    /* Red variations using HSL values */
    --primary-darkest: hsl(var(--primary-h), var(--primary-s), var(--darkest));
    --primary-dark: hsl(var(--primary-h), var(--primary-s), var(--dark));
    --primary-neutral: hsl(var(--primary-h), var(--primary-s), var(--neutral));
    --primary-light: hsl(var(--primary-h), var(--primary-s), var(--light));
    --primary-lightest: hsl(var(--primary-h), var(--primary-s), var(--lightest));

    /* Green variations using HSL values */
    --secondary-darkest: hsl(var(--secondary-h), var(--secondary-s), var(--darkest));
    --secondary-dark: hsl(var(--secondary-h), var(--secondary-s), var(--dark));
    --secondary-neutral: hsl(var(--secondary-h), var(--secondary-s), var(--neutral));
    --secondary-light: hsl(var(--secondary-h), var(--secondary-s), var(--light));
    --secondary-lightest: hsl(var(--secondary-h), var(--secondary-s), var(--lightest));

    /* Gold variations using HSL values */
    --accent-darkest: hsl(var(--accent-h), var(--accent-s), var(--darkest));
    --accent-dark: hsl(var(--accent-h), var(--accent-s), var(--dark));
    --accent-neutral: hsl(var(--accent-h), var(--accent-s), var(--neutral));
    --accent-light: hsl(var(--accent-h), var(--accent-s), var(--light));
    --accent-lightest: hsl(var(--accent-h), var(--accent-s), var(--lightest));
```

#### The New Responsive

The article [The new responsive: Web design in a component-driven world](https://web.dev/articles/new-responsive) explains how modern responsive design goes beyond viewport media queries by embracing **user preferences** (like dark mode), **container queries** (so components adapt to their parent’s size), and **new device types** (like foldables). These advances shift web design from page-based to component-based, making interfaces more flexible and adaptive.

##### Responsive to the container
* Use __[container queries](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_containment/Container_queries)__ for __device-based breakpoints__, and thus for responsive styling of your components.

##### Responsive to the user
* Use __[media queries](https://css-tricks.com/a-complete-guide-to-css-media-queries/)__ for styling user-preferences.

**Resources:**
* [The new responsive: Web design in a component-driven world](https://web.dev/articles/new-responsive)
* [Media Queries Level 5](https://www.w3.org/TR/mediaqueries-5/)
* [Using Media Queries - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/Guides/Media_queries/Using)

### JavaScript conventies

* 1 tab – for indentation.
* Single quotes for strings
* Use comments to explain complicated code
* Don't use semi colons at the end of a line

#### Preferred coding style
Use a consistent structure for  code for each [scope](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/README.md) taking advantage of the JavaScript principle [hoisting](https://github.com/getify/You-Dont-Know-JS/blob/2nd-ed/scope-closures/ch5.md#when-can-i-use-a-variable):

```javascript
// 1. declare all variables for the specific scope



// 2. all code logic



// 3. function declarations 

```

#### Use template literals where possible instead of string concatenation
> Template literals are a way to create strings in JavaScript using backticks (`` ` ``) instead of regular quotes. They make it easier to include variables and expressions in a string without using string concatenation (``+``).

1. use backticks for strings with variables or expressions

```javascript

// Bad
const name = 'Bob';
const message = 'Hello ' + name + ', welcome!';

// Good
const name = 'Bob';
const message = `Hello ${name}, welcome!`;
```

2. Use template literals for dynamic expressions:

```javascript
const user = 'Alice';
const items = 5;

// Bad
const summary = user + ' has ' + items + ' items in their cart.';

// Good
const summary = `${user} has ${items} items in their cart.`;
```

##### Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals

#### Use object destructuring when assigning object properties:
> The destructuring syntax is a JavaScript syntax that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.

```javascript

// Bad
const name = person.name;
const age = person.age;

// Good
const { name, age } = person;

```

```html
<!-- Bad -->
<h2>{person.name}</h2>
<p>{person.age}</p>

<!-- Good -->
<h2>{name}</h2>
<p>{age}</p>

```
Source: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring


#### When to use const, let and var
Always use `const` unless you need to reassign the variable.

#####  Use `const` by default
> Use `const` for all variables that should not be reassigned. This makes the code more predictable and prevents accidental modifications.

```javascript

// example
const MAX_USERS = 100;
const apiUrl = "https://example.com/api";

// Bad
var message = "Hello";

// Good
const message = "Hello";
```

##### Use `let` when reassignment is necessary
> Use `let` only when the value of the variable changes after initialization.

```javascript
// Bad
const count = 0;
count = 1; // Error: Assignment to constant variable

// Good
let count = 0;
count = 1;

```

##### Avoid using `var`
> `var` has function scope and can be redeclared, which can lead to unexpected bugs due to hoisting. Avoid using it unless necessary.

```javascript
// Bad
var name = "Alice";

// Good
const name = "Alice";
```

##### Extra considerations

**Use `const` for objects and arrays, even if their contents change**  
The reference remains the same but properties or elements can be modified.

```javascript
const user = { name: "John" };
user.age = 25; // Allowed

const numbers = [1, 2, 3];
numbers.push(4); // Allowed
```

### SvelteKit conventies

#### Use Svelte 5 syntax

Use svelte 5 syntax, when you're coding in a Svelte 5 project, to run your components in `runes-mode`.

##### Source

[Svelte 4 & Svelte 5 compared](https://component-party.dev/?f=svelte4-svelte5)


#### Data
* Fetch data altijd via een `+page.server.js` bestand
* Manipuleer waar mogelijk data op de server (in `+page.server.js`)

#### Routes & componenten structuur
Een `+page.svelte` route / page component is opgedeeld in componenten.  
Er wordt alleen eventueel data opgehaald en doorgestuurd aan de components.

```javascript
<script>
  import { HeroSlider, SlideCards, Agenda, HomeCampus, HomePartners } from '$lib/index.js'
  
  let { data } = $props()

  const { hero, slides, campus, agenda, partners } = data
</script>

<HeroSlider {hero} />
<SlideCards {slides} />
<HomeCampus {campus} />
<Agenda {agenda} />
<HomePartners {partners} />

```

#### Componenten
* Use `object destructuring` to keep your template code clean. 
* Pass only the necessary data to components.
* Avoid nesting components too deeply (max. 3 levels).
* Use meaningful names for components

* `+page.svelte` only contains components: do not use loose HTML; instead, break the code down into logical components, for example:

```javascript

<script>
  import Semesters from "$lib/organisms/Semesters.svelte"
  import Program from "$lib/molecules/Program.svelte"
  
  let { data } = $props()
  const { title, subtitle, content, semesters } = data
</script>

<Program {title} {content} />
<Semesters {semesters} {subtitle} />
```
#### Avoid :global in CSS
* Try to avoid using `:global` in CSS as much as possible; place style rules in a global stylesheet where necessary and/or use pseudo-private custom properties. Though sometimes it is necessary, use it with caution.


### Component Design System

A component design system is a set of reusable components, naming rules and design tokens that designers and developers share. It keeps design (Figma) and code (SvelteKit) close together, because both use the same names and the same structure.

#### Atomic Design

To structure our components we chose [Atomic Design](https://atomicdesign.bradfrost.com/chapter-2/) by Brad Frost. Instead of designing whole pages, we build small, reusable parts and combine them into bigger ones.

##### The five stages

* **Atoms**: "the foundational building blocks that comprise all our user interfaces". Basic HTML elements that can't be broken down further, eg: a label, an input, a button, a heading, an icon.
* **Molecules**: "relatively simple groups of UI elements functioning together as a unit". Eg: a label, input and button together form a search form.
* **Organisms**: "relatively complex UI components composed of groups of molecules and/or atoms and/or other organisms". Distinct sections of an interface, eg: a header, a footer or a product grid.
* **Templates**: "page-level objects that place components into a layout and articulate the design's underlying content structure". The skeleton of a page, without the final content.
* **Pages**: "specific instances of templates that show what a UI looks like with real representative content in place". Use pages to test if your design holds up with real content.

> Atomic design is not a linear process, it's a mental model. You don't have to design all atoms first: shift between the abstract (the system) and the concrete (the page) while you work. (~ Brad Frost)

##### Atomic Design in Figma

* Place your components on the **Components** page and group them with a section header per stage: Atoms, Molecules, Organisms.
* Use the same names in Figma as in code, so designers and developers talk about the same thing.
* Build bigger components from smaller ones, never the other way around. An atom never contains a molecule.
* Use [variables and styles](#figma) (colors, spacing, typography) for the design tokens the atoms are built from.
* Put templates and pages on the **Content** page and use the components through the assets library.

##### Atomic Design in SvelteKit

Map the stages to the structure of your project:

| Stage | Place in the project | Example |
|---|---|---|
| Atoms | `$lib/atoms` | `Button.svelte`, `Input.svelte`, `Heading.svelte` |
| Molecules | `$lib/molecules` | `SearchForm.svelte`, `Program.svelte` |
| Organisms | `$lib/organisms` | `Header.svelte`, `Semesters.svelte` |
| Templates | `+layout.svelte` | Layout with header, `<main>` and footer |
| Pages | `+page.svelte` | The route that fills the template with data |

```javascript
// ✅ an organism is composed of molecules and atoms
<script>
  import SearchForm from '$lib/molecules/SearchForm.svelte'
  import Logo from '$lib/atoms/Logo.svelte'
</script>

<header>
  <Logo />
  <SearchForm />
</header>
```

* Use PascalCase for component file names (`SearchForm.svelte`) and import from the lowest level possible: atoms don't import molecules or organisms, molecules don't import organisms.
* Atoms don't fetch data. Data is fetched in `+page.server.js` and passed down as props (see [SvelteKit conventies](#sveltekit-conventies)).
* Not sure where a component belongs? Ask yourself: "Can I break it down any further and is it still useful?" If yes, it is probably a molecule or organism. If not, it is an atom.
* Keep nesting shallow (3 levels max), as described in the component conventions.

##### Why we chose it
* **Consistency**: the same atoms are used everywhere, so the interface looks and behaves the same.
* **Reusability (DRY)**: build once, use in many places.
* **Easier testing and maintenance**: change an atom and every molecule and organism using it is updated.
* **Shared language**: designers and developers use the same terms.

#### Sources
* [Atomic Design Methodology - Brad Frost](https://atomicdesign.bradfrost.com/chapter-2/)



## Design conventions

### Typography

#### Rules for readable text
* Minimal `16px` `font-size`
* Minimal `1.5` `line-height`
* Between 10 to 12 words / 55 to 75 characters on a line (did you know `ch` is a unit, `75ch`)
* After paragraphs a minimum of 2 times the `font-size`
* `letter-spacing` > 0.12 times the `font-size`
* `word-spacing` > 0.16 times the `font-size`

##### Sources
[WCAG Text Spacing](https://www.w3.org/WAI/WCAG22/Understanding/text-spacing.html)

#### Text alignment
* Left aligned – in most cases
* On the right – for balance, compositional solution
* In the center – very rarely. Mostly for headings
* Use `text-wrap: balance;` for balanced headers. Use it sparsingly

##### Source
[Types of web alignments](https://typographyprinciples.obys.agency/alignments/)

#### Modular scale for Typography

Use a modular scale on font-sizes for a more balanced typography on your website.

##### Source
[More Meaningful Typography](https://alistapart.com/article/more-meaningful-typography/)  

#### Better Dark Mode

Always use a slightly higher `line-height` on text in dark mode, because of its shinyness.

##### Source
[Dark mode typography](https://designshack.net/articles/typography/dark-mode-typography/)  

### UX Design best-practices

> Laws of UX is a collection of best practices that designers can consider when building user interfaces.

https://lawsofux.com/

### Design strategies

#### Design and Development collaborate in Design Systems
> When working on design systems designers and developers should work closely together on creating (and thus) naming design tokes. (~ Brad Frost)

#### Explore in Figma, validate in the browser
> It would take a lot of work and time to design all possible variations of components in Figma, only _explore_ a couple of major breakpoints in Figma an continue designing in the browser. In other word use responsive css features (`:has()`, `container queries`, `clamp()`, `auto-fit`, `anchor-position` etc ) to _validate_ all breakpoints in between the major ones. (~ Ahmed Shadeed)

#### Explore in Figma, validate in the browser
> It would take a lot of work and time to design all possible variations of components in Figma, only _explore_ a couple of major breakpoints in Figma an continue designing in the browser. In other word use responsive css features (`:has()`, `container queries`, `clamp()`, `auto-fit`, `anchor-position` etc ) to _validate_ all breakpoints in between the major ones. (~ Ahmed Shadeed)

### Figma

#### Variables in Figma

In Figma, you can add variables to your project in the form of a **color**, **number**, **string**, or **boolean**.

I thought it would be helpful to align these variables with the CSS properties defined in the `:root` of your `global.css` file. Examples include: **spacings**, **page-padding**, **border-radius**, etc.  
This brings your code and design closer together. If something changes in either the code or the design, it can be updated very quickly.  
For example, if you change the value of `spacing-xs`, that change will automatically be reflected throughout your Figma design wherever that variable is used.

##### How to Create a Variable

![Image](https://github.com/user-attachments/assets/89d428d3-5636-4c8d-b99e-80fcc5f22a00)

The variable settings can be found in the **right-hand side panel**.

![Image](https://github.com/user-attachments/assets/bd51a157-ccfc-452a-9e33-22a307f691aa)  
At the bottom, you can choose to add a variable as a **color**, **number**, **string**, or **boolean**.

##### Collections

![Image](https://github.com/user-attachments/assets/b7eaef19-d3ef-4a4c-98b4-01c73283a47c)  
You can create multiple **collections** to keep things organized.

##### Scope

![Image](https://github.com/user-attachments/assets/e08477c4-9430-4f1d-aa88-2ed5bda83941)  
You can also **scope variables**, meaning you can define **which properties** a variable should or should not appear in!  
The example above shows a `border-radius` variable scoped so that it only appears in the **corner radius** property.

##### Applying Variables

![Image](https://github.com/user-attachments/assets/ad0323af-ac33-44f1-989a-b758a789e547)

![Image](https://github.com/user-attachments/assets/0d28c66d-f2f8-4a2a-bd2c-8f0b2bd43ad0)

You can apply a variable by clicking the **dropdown menu** of a property and then pressing the **hexagon icon**.  
For some properties, you need to open a dropdown menu first, while others show the hexagon icon right away.

Once you click the icon, the variables are displayed in the order of the collections you’ve created.  
> ⚠️ **Note:** If a property has a variable assigned to it, this is indicated by a **darker background**.

#### Styles

In addition to variables, Figma also has **styles**.  
Styles can be applied in the form of:

- **Text**
- **Color**
- **Effect**
- **Layout grid**

You can see styles in the **right-hand panel**.

Styles are different from variables.  
A **style** can store all of a property’s attributes, while a **variable** only holds one value.

> 💡 **Tip:** You can also **add variables to a style**.  
For example, you can store `font-size` as a **number** or `font-family` as a **string** in a variable, and then apply that to a **text style**. This gives the same feel as using `global.css`.

![Image](https://github.com/user-attachments/assets/3313dd3b-8ee6-497b-bc6a-6e11592ea761)  
^^ This is an example of how styles can be applied. The colors shown here follow the **CSS convention using HSL values**.

#### Different pages for content, components, inspiration
![Image](https://github.com/user-attachments/assets/22434795-8d5c-4619-b7d5-1a72574b221e)

It might be useful to place the **content**, **components**, and **inspiration** on separate pages, so everything isn’t in one single file.  
This helps keep things more organized, since the website content and components are quite distinct from each other.

Below is an example of what can be included on each of these pages:

##### Content:
This is where the design and wireflow of the website will be placed.  
The components created on the components page can be added here through the assets library.

##### Components:
This is where all components used on the content (website) page are stored.  
It might also be helpful to structure them following **Atomic Design** principles with clear section headers.  
This brings the Figma design and code closer together, improving clarity and making the development phase easier.

##### Inspiration:
All brainstorming ideas, cool websites, and moodboards can go here.  
It may also be useful to include wireframe sketches here—but make sure to clearly label which iteration they belong to, using a title and/or date.


