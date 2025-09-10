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

Bron: [Mastering commit messages](https://dev.to/itxshakil/commit-like-a-pro-a-beginners-guide-to-conventional-commits-34c3#bonus-tips-mastering-commit-message-references)

#### Bronnen
* [Automating Versioning and Releases Using Semantic Release](https://medium.com/agoda-engineering/automating-versioning-and-releases-using-semantic-release-6ed355ede742) 
* [use gitmoji in commit messages](https://gitmoji.dev/)  
* [](https://dev.to/itxshakil/commit-like-a-pro-a-beginners-guide-to-conventional-commits-34c3)

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


## Code conventies

### Algemeen

#### Naamgeving
* Gebruik betekenisvolle namen voor classes, id's, variables en function namen.
* Gebruik kebab-case voor classes, css variabelen en ids in HTML en CSS
* Gebruik camelCase in Javascript voor JS variabelen en functies.
* Gebruik altijd Engels in naamgeving in code!
* Wees consistent in naamgeving
* Schrijf je classes, ids, functienamen en variabelen uit, je hoeft geen afkortingen te gebruiken, daar zijn minifiers voor.

```css
/* ✅ header-trigger beschrijft wat het element doet */
/* ✅ de --primary-color var naam is beschrijvend */
.header-trigger {
  --primary-color: hotpink;
}
```
```css
/* ❌ button naam is niet beschrijvend, btn kan gewoon voluit geschreven worden voor duidelijkheid */
/* ❌ color-1 is geen beschrijvende css var naam */
/* ❌ kleur-2 is niet beschrijvend en niet in het Engels */
.btn-1 {
  --color-1: hotpink;
  --kleur-2: hotpink;
}
``` 
```html
<!-- ✅ id en class name gebruiken kebab case en beschrijven wat het element doet -->
<form id="contact-form" class="contact-form"></form>
```
```html
<!-- ❌ camelCasing in class en id naam, in HTML gebruiken we kebabcase -->
<!-- ❌ my form is geen beschrijvende class  -->
<form id="contactForm" class="myForm"></form>
```
```html
<!-- ❌ wees consistent in het aanhouden van naming practices (.button-primary en .button--secondary) -->
<button class="button-primary">Submit</button>
<button class="button--secondary">Submit</button>
``` 
```js
// ✅ moderne functie notering
// ✅ camelCase
// ✅ beschrijvende naam
const initHeader = () => {} 
```
```js
// ❌ PascalCase
MyFunction() {} // 
```
```js
// ❌ gebruik van var, gebruik const of let
var initHeader = () => {} 
``` 

## Design Conventies

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


