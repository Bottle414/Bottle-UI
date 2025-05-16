<template>
    <Example>
        <BButton to-top color="#33a6c7" size="medium">toTopWindow</BButton>
        <div id="inner">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            possimus blanditiis illo placeat sint quas nulla recusandae,
            veritatis enim dignissimos, vitae nisi! Distinctio sint sed
            perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure
            molestias, vitae laboriosam, aspernatur recusandae repellendus ullam
            minima maxime veritatis dolorum repellat vero, laborum quod tenetur
            repudiandae doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            possimus blanditiis illo placeat sint quas nulla recusandae,
            veritatis enim dignissimos, vitae nisi! Distinctio sint sed
            perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure
            molestias, vitae laboriosam, aspernatur recusandae repellendus ullam
            minima maxime veritatis dolorum repellat vero, laborum quod tenetur
            repudiandae doloremque.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem,
            possimus blanditiis illo placeat sint quas nulla recusandae,
            veritatis enim dignissimos, vitae nisi! Distinctio sint sed
            perferendis! Obcaecati iusto blanditiis cupiditate provident! Iure
            molestias, vitae laboriosam, aspernatur recusandae repellendus ullam
            minima maxime veritatis dolorum repellat vero, laborum quod tenetur
            repudiandae doloremque.

            <BButton id="inner-btn" to-top color="#33a6c7" size="medium" target="inner">
                toTopInner
            </BButton>
        </div>
        
    </Example>
</template>

<script lang="ts" setup>
    
</script>

<style scoped>
    #inner {
        width: 100%;
        height: 200px;
        overflow-y: auto;
    }

    #inner-btn {
        position: absolute;
        top: 55%;
        right: 10%;
        z-index: 999;
    }
</style>
