<template>
    <ul>
        <li>
            <router-link
                :to="{
                    name: 'play',
                }"
            > Play
            </router-link>
        </li>
        <li>
            <router-link
                :to="{
                    name: 'rules',
                }"
            > Rules
            </router-link>
        </li>

        <li>
            <router-link
                :to="{
                    name: 'listCharacters',
                }"
            > Characters
            </router-link>
        </li>

        <li>
            Cards
            <ul>
                <li>
                    <router-link
                        :to="{
                            name: 'listDecks',
                        }"
                    > DCK
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{
                            name: 'listWeapons',
                        }"
                    > WPN
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{
                            name: 'listArmour',
                        }"
                    > ARM
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{
                            name: 'listSkillbooks',
                        }"
                    > SKB
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{
                            name: 'listItems',
                        }"
                    > ITM
                    </router-link>
                </li>
                <li>
                    <router-link
                        :to="{
                            name: 'listSpells',
                        }"
                    > SPL
                    </router-link>
                </li>
            </ul>
        </li>
    </ul>

</template>

<script>
export default {

}
</script>

<style>

</style>
