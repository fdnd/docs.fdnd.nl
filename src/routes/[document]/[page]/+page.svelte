<script>
    export let data;
    console.log(data)
    // data.documents.map(document => {
    //     let pageList = []
        
    //     // Als page dan in lijstje
    //     // Als chapter dan loopen
    //     // Als externe link dan niets doen..
    //     // console.log(pageList)
    //     console.log(document.linkTo)
    // })
</script>

<h2>{data.document} - {data.page.chapter.title}</h2>

{@html data.page.content.html}

<style>
    h2 {
        font-size: 1rem;
    }
</style>