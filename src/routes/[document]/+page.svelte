<script>
  import { getDoc } from '$lib/stores/documents'
  export let data;
  let doc = getDoc(data.document);
</script>

<h1>{doc.title}</h1>

{@html doc.summary.html}