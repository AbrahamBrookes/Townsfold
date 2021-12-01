<template>
	<div class="container my-5">
		<div class="row">
			<div class="col-12">
				<h1 class="text-center">Jangus Jobanguses Joust Jamboree</h1>
				<p class="text-center">~ a trading card game prototype ~</p>

				<h2>Welcome to Jangus Jobanguses Joust Jamboree!</h2>
				<p>Wether you have chosen or been chosen to inhabit City 17... welcome. You're <i>safe</i> here</p>
				
				<h2>Rules</h2>
				<p>In J4 players create their characters, equip them with weapons and armour, assign a skillbook and use cards to do battle.</p>
				<h3>Overview</h3>
				<p>The simplest version of the game is for two players (although you can have as many players as you like). The first player to win two rounds wins the game and the game continues until one player wins. This means that a game with two players will take a maximum of three rounds, but a game with five players could potentially last six rounds (if a different player wins each round, then the sixth round will clinch it).</p>
				<p>Before each round - and before drawing any cards, each player creates their character. You can create a new character (or swap out for an existing character) before each round if you like, or continue on with the same character. At the end of the round all characters are resurrected with full health and mana.</p>
				<p>Once all players have created and revealed their characters, they pick up 7 cards from the top of their deck. They can then attach any weapon, armour or skillbook cards to their character. Only one of each type of card can be attached at one time and you cannot change these cards out during the round - it is only between rounds that you can reconstruct your character and equip different gear.</p> 
				<p>Once all players have equipped their characters with gear, play may begin. If you don't pick up, say, an armour card in your first hand you can discard your hand and re-draw. If you commence a round without an equipment card (say, no armour) you may equip it as soon as you pick it up during the round. You may also elect not to equip a card that you pick up in your initial draw, and equip one that you pick up later, but you cannot swap out equipment mid-round.</p>
				<p>At the start of your turn, draw a card. At the end of your turn, discard cards until you have a maximum of 7 cards.</p>
				<p>Your turn consists of two active phases and one defensive phase.</p>
				<p>The first phase is the laning phase. In this phase you may use skills from your skillbook, use item and spell cards from your hand, or elect to do nothing. Your mana refreshes entirely at the start of your laning phase.</p>
				<p>The second phase is your attack phase. During your attack phase you may attack an opponent using your weapon card</p>
				<p>The third phase is during your opponents turn when they are attacking you. In this phase you decide how to defend, or to take the damage on the nose.</p>
				<p>A round continues until one player has zero life left, at which point they lose the round.</p>
				<p>Read on for more in-depth rules.</p>

				<h3>Cards modify the rules</h3>
				<p>Cards may have effects that you can use to your advantage during the round.</p>
				<p>In the event that an effect of a card appears to counteract the base rules of the game, the card always wins out.</p>
				<p>In the event that a card effect is worded ambiguously, the players can come to their own consensus on how to proceed.</p>

				<h3>Creating Characters</h3>
				<p>Your character is the base for your attack and defense scores, and can be customized to suit your play style or deck.</p>
				<p>Characters have four "base" stats: Attack, Defense, Life and Mana.</p>
				<p>When creating your character, you have {{ total_stat_points }} stat points to assign as you please. Be warned, you need to assign at least one point to your life, or you will lose the round as soon as it starts, as you will already be dead.</p>
				<p>You can also give your character a name and backstory if you like because that's what it's alllll about.</p>

				<h3>Calculating damage</h3>
				<p>In the simplest case when attacking, you add the damage value of your equipped weapon card to your characters base "Attack" stat and call that your "initial damage". Your opponent then caclulates their "final defense" by adding their characters base "Defense" stat to their equipped armours defense value. You then subtract the final defense from your initial damage to calculate your final damage, and that is subtracted from the defending players life points.</p>
				<p>Some skills or spells also do magical damage. In the case of magical damage, armour is ignored. The final damage is simply the damage value of the spell or skill, minus the defending characters base defense stat.</p>

				<h3>Damage types</h3>
				<p>Weapons have damage types which modify how damage is applied. Armours similarly have resistances or weaknesses to damage types.</p>
				<p>For instance, Arthurs Pillar is a two handed warhammer with a damage type of "Bludgeoning" and an effect of "Bludgeoning 5". This means that, as well as the base damage of the weapon (12) you also apply 5 Bludgeoning damage for a total of 17 weapon damage.</p>
				<p>If your opponent is wearing armour with no Bludgeoning resist score, they will take the full 17 damage. However, if they are wearing an armour with a "Resist Bludgeoning" score (such as Tom's Steel Carapace with "Resist Bludgeoning 4") then that score is subtracted from your bludgeoning damage, making the total 13 damage, 1 of which is bludgeoning damage. (Toms Steel Carapace also has defense of 10 which would bring your final damage down to only 3, 1 of which is Bludgeoning)</p>
				<p>Damage type resitance scores are only subtracted from the damage type portion of the incoming attack. For instance, if your opponent is wearing a Reactive Robe which has "Resist Budgeoning 20", you will still attack them for 12, as that damage is not bludgeoning damage.</p>
				<p>Here is a list of damage types in the game:</p>
				<ul>
					<li
						v-for="damageType in damageTypes"
						:key="damageType.id"
					>
						{{ damageType.name }}
					</li>
				</ul>

				<h3>Skillbooks</h3>
				<h3>Item Cards</h3>
				<h3>Spell Cards</h3>
			</div>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex'

import DamageType from '@DamageType' 
export default {
	computed: {
		...mapState([
			'total_stat_points'
		]),
		damageTypes(){
			return DamageType.all()
		}
	}
}
</script>

<style>

</style>