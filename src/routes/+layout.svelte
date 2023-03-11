<script>
  import { Branding, Footer, Nav, Wrapper  } from '@fdnd/components'
  import { documents, getTopNav } from '$lib/stores/documents'
  
  export let data;
  documents.set(data)

  // First menu-item is set manually
  let topNav = {Menu:{Home:'/'}}
  Object.assign(topNav.Menu, getTopNav())
</script>

<Branding>
  <Wrapper>
    <Nav data={topNav} reload=true />
    <slot/>
    <Footer/>
  </Wrapper>
</Branding>
