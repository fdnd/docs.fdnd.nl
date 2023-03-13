<script>
  import { DocNav } from '@fdnd/components';
  import { error } from '@sveltejs/kit'
  import { getDoc, documents } from '$lib/stores/documents'

  export let data

  let doc = getDoc(data.document)
  if(doc === undefined){
      throw error(404, 'Not found');
  }
  const prefix = '/' + data.document + '/'
</script>

<main class="documentation">
  <div>
    <slot {doc} />
  </div>

  <DocNav data={doc.linkTo} reload=true {prefix} />
</main>

<style>
  .documentation {
    --background: var(--c-blue);
  }
</style>
