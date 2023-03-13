<script>
  import { Branding, Footer, Nav, Wrapper  } from '@fdnd/components'
  import { getTopNav } from '$lib/stores/documents'
  
  let topNav = getTopNav()
</script>

<Branding>
  <Wrapper>
    <Nav data={topNav} reload=true />
    <slot/>
    <Footer/>
  </Wrapper>
</Branding>
