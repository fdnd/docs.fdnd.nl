<script>
  import { page } from '$app/stores';

  export let item = [];

  const url = item[1] || '';
  const body = item[0] || '';
</script>

<a
  href={url}
  data-sveltekit-reload
  class:active={$page.url.pathname == url || (url != '/' && $page.url.pathname.startsWith(url))}
  >{body}</a
>

<style>
.active {
  background: var(--attention) !important;
  color: var(--background) !important;
  border-color: var(--attention) !important;
}
</style>