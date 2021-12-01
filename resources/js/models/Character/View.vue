<template>
    <div class="row">
        <div class="col-sm-4">
            <fieldset class="p-2">
                <legend>stats</legend>
                <div>Attack: {{ character.attack }}</div>
                <div>Defense: {{ character.defense }}</div>
                <div>Life: {{ character.life }}</div>
                <div>Mana: {{ character.mana }}</div>
            </fieldset>
        </div>
        <div class="col-sm-8">
            <fieldset class="p-2">
                <legend>character</legend>
                <div>Name: {{ character.name }}</div>
                <div>Backstory:</div>
                <div>{{ character.backstory }}</div>
            </fieldset>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        character: {
            required: true
        }
    }
}
</script>

<style>

</style>