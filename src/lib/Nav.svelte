<script>
  import Link from './Link.svelte';

  export let data = {};
  export let type = 'main';
</script>

<nav class={type}>
  <div>
    {#each Object.entries(data) as [title, items]}
      <h2>{title}</h2>
      <ul>
        {#each Object.entries(items) as item}
          <li><Link {item} /></li>
        {/each}
      </ul>
    {/each}
  </div>
</nav>

<style>

  nav ul {
    padding: 0;
  }

  nav li {
    list-style: none;
  }

  nav h2,
  nav h3,
  nav h4 {
    margin: 0;
    font-size: 1rem;
  }

  /* Document style subnav */
  nav.document div {
    column-count: 1;
  }
  nav.document h2:not(:first-of-type) {
    margin-top: 1rem;
  }

  /* Wacky position for the main nav elements */
  nav.main {
    display: flex;
    align-content: flex-start;
    gap: var(--component-gap);
  }
  nav.main h2 {
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    height: 1px;
    overflow: hidden;
    position: absolute;
    white-space: nowrap;
    width: 1px;
  }
  nav.main a {
    margin: 0.2rem;
    padding: 0.6rem 1.2rem;
    display: inline-block;

    border-width: 1px;
    border-style: solid;
    border-radius: var(--pilled);

    font-weight: normal;
    text-decoration: none;
    transform-origin: center center;
  }

  nav.main ul {
    display: flex;
    flex-flow: row-reverse wrap-reverse;
    justify-content: flex-end;
    list-style: none;
  }

  nav.main ul > li {
    white-space: nowrap;
  }

  nav.main ul > li:nth-of-type(1) {
    order: 11;
  }
  nav.main ul > li:nth-of-type(2) {
    order: 10;
  }
  nav.main ul > li:nth-of-type(3) {
    order: 9;
  }
  nav.main ul > li:nth-of-type(4) {
    order: 8;
  }
  nav.main ul > li:nth-of-type(5) {
    order: 7;
  }
  nav.main ul > li:nth-of-type(6) {
    order: 6;
  }
  nav.main ul > li:nth-of-type(7) {
    order: 5;
  }
  nav.main ul > li:nth-of-type(8) {
    order: 4;
  }
  nav.main ul > li:nth-of-type(9) {
    order: 3;
  }
  nav.main ul > li:nth-of-type(10) {
    order: 2;
  }
  nav.main ul > li:nth-of-type(11) {
    order: 1;
  }
  nav.main ul > li:nth-of-type(1) a,
  nav.main ul > li:nth-of-type(2) a,
  nav.main ul > li:nth-of-type(5) a,
  nav.main ul > li:nth-of-type(7) a,
  nav.main ul > li:nth-of-type(11) a {
    border-radius: var(--rounded);
  }

  nav.main ul > li:nth-of-type(odd) a,
  nav.main ul > li:nth-of-type(even) a:hover,
  nav.main ul > li:nth-of-type(odd) a:focus {
    color: var(--color);
    background-color: var(--background);
    border-color: var(--color);
  }
  nav.main ul > li:nth-of-type(even) a,
  nav.main ul > li:nth-of-type(odd) a:hover,
  nav.main ul > li:nth-of-type(odd) a:focus {
    color: var(--background);
    background-color: var(--color);
    border-color: var(--background);
  }

  nav.main ul > li:nth-of-type(1) a {
    transform: rotate(-5deg);
  }
  nav.main ul > li:nth-of-type(2) a {
    transform: rotate(5deg);
  }
  nav.main ul > li:nth-of-type(3) a {
    transform: rotate(3deg);
  }
  nav.main ul > li:nth-of-type(4) a {
    transform: rotate(-2deg);
  }
  nav.main ul > li:nth-of-type(5) a {
    transform: rotate(4deg);
  }
  nav.main ul > li:nth-of-type(6) a {
    transform: rotate(1deg);
  }
  nav.main ul > li:nth-of-type(7) a {
    transform: rotate(-2deg);
  }
  nav.main ul > li:nth-of-type(8) a {
    transform: rotate(3deg);
  }
  nav.main ul > li:nth-of-type(9) a {
    transform: rotate(-5deg);
  }
  nav.main ul > li:nth-of-type(10) a {
    transform: rotate(5deg);
  }
  nav.main ul > li:nth-of-type(11) a {
    transform: rotate(3deg);
  }

</style>