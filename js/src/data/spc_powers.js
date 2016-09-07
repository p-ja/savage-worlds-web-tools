/*

Data here is NOT Licensed under the Creative Commons and is owned by Pinnacle Entertainment Group.

This product references the Savage Worlds game system, available from Pinnacle Entertainment Group at www.peginc.com.
Savage Worlds and all associated logos and trademarks are copyrights of Pinnacle Entertainment Group. Used with permission.
Pinnacle makes no representation or warranty as to the quality, viability, or suitability for purpose of this product.

The entries in this file are from Savage Worlds Role Playing Game and are owned by Pinnacle Entertainment Group.

DEVELOPERS: Do Not Edit or Pull Request this file, it is auto generated from a rudimentary admin area!
*/

var savageWorldsSPCPowers = Array(
{
		 'id': 1,
	 name: {
		 'en-US': 'Absorbtion',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p20',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '1',
		 'tag': 'absorbtion',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Matter \/ Energy Master","pt-BR":"","de-DE":""},"points":"5"},{"name":{"en-US":"Reflection","pt-BR":"","de-DE":""},"points":"4"},{"name":{"en-US":"Transference","pt-BR":"","de-DE":""},"points":"2"}]',
},
{
		 'id': 2,
	 name: {
		 'en-US': 'Ageless',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p20',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '1',
		 'tag': 'ageless',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Very Old","pt-BR":"","de-DE":""},"points":"2"}]',
},
{
		 'id': 3,
	 name: {
		 'en-US': 'Altered Form ',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p20',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '1',
		 'tag': 'altered-form',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Grapple","pt-BR":"","de-DE":""},"points":"1","per_level":0},{"name":{"en-US":"Reach","pt-BR":"","de-DE":""},"points":"1","per_level":1}]',
},
{
		 'id': 4,
	 name: {
		 'en-US': 'Animal Control',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p20',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '1',
		 'tag': 'animal-control',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Animal Companion","pt-BR":"","de-DE":""},"points":"0","per_level":0},{"name":{"en-US":"Summonable","pt-BR":"","de-DE":""},"points":"4","per_level":0},{"name":{"en-US":"Super Powers","pt-BR":"","de-DE":""},"points":"0","per_level":0},{"name":{"en-US":"Telepathic Link","pt-BR":"","de-DE":""},"points":"1","per_level":0}]',
},
{
		 'id': 5,
	 name: {
		 'en-US': 'Aquatic',
		 'pt-BR': '',
		 'de-DE': '',
	},
		 'book': 5,
		 'page': 'p21',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '1',
		 'tag': 'aquatic',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 6,
	 name: {
		 'en-US': 'Armor',
	},
		 'book': 5,
		 'page': 'p22',
		 'cost': '1',
		 'per_level': '1',
		 'max_level': '10',
		 'tag': 'armor',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Hardy"},"points":"3","per_level":"0"},{"name":{"en-US":"Heavy Armor"},"points":"4","per_level":"0"},{"name":{"en-US":"Partial Protection"},"points":"0","per_level":"0"}]',
charEffect: function( charObject, powerObject ) {
	// Affect Character Object Code here
	charObject.derived.armor += powerObject.selectedLevel * 2;
}
},
{
		 'id': 7,
	 name: {
		 'en-US': 'Attack, Melee',
	},
		 'book': 5,
		 'page': 'p22',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '5',
		 'tag': 'attack-melee',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Armor Piercing"},"points":"1","per_level":"0"},{"name":{"en-US":"Focus"},"points":"3","per_level":"0"},{"name":{"en-US":"Heavy Weapon"},"points":"1","per_level":"0"},{"name":{"en-US":"Lethal"},"points":"-1","per_level":"0"},{"name":{"en-US":"Multiple Attacks"},"points":"2","per_level":"0"},{"name":{"en-US":"One Arm"},"points":"-1","per_level":"0"},{"name":{"en-US":"Reach"},"points":"1","per_level":"1"},{"name":{"en-US":"Stackable"},"points":"2","per_level":"0"}]',
},
{
		 'id': 8,
	 name: {
		 'en-US': 'Attack, Ranged',
	},
		 'book': 5,
		 'page': 'p22',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '6',
		 'tag': 'attack-ranged',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Area Effect"},"points":"0","per_level":"0"},{"name":{"en-US":"Armor Piercing"},"points":"1","per_level":"0"},{"name":{"en-US":"Cone"},"points":"0","per_level":"0"},{"name":{"en-US":"Enhanced Damage"},"points":"4","per_level":"0"},{"name":{"en-US":"Focus"},"points":"3","per_level":"0"},{"name":{"en-US":"Heavy Weapon"},"points":"1","per_level":"0"},{"name":{"en-US":"Lethal"},"points":"-1","per_level":"0"},{"name":{"en-US":"Range"},"points":"0","per_level":"0"},{"name":{"en-US":"Rate of Fire"},"points":"0","per_level":"0"},{"name":{"en-US":"Requires Material"},"points":"0","per_level":"0"}]',
},
{
		 'id': 9,
	 name: {
		 'en-US': 'Awareness',
	},
		 'book': 5,
		 'page': 'p23',
		 'cost': '0',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'awareness',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 10,
	 name: {
		 'en-US': 'Broadcast',
	},
		 'book': 5,
		 'page': 'p23',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'broadcast',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Manipulation"},"points":"0","per_level":"0"},{"name":{"en-US":"One Channel"},"points":"-1","per_level":"0"},{"name":{"en-US":"Range"},"points":"1","per_level":"0"}]',
},
{
		 'id': 11,
	 name: {
		 'en-US': 'Burrowing',
	},
		 'book': 5,
		 'page': 'p23',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'burrowing',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Pace"},"points":"1","per_level":"0"}]',
},
{
		 'id': 12,
	 name: {
		 'en-US': 'Chameleon',
	},
		 'book': 5,
		 'page': 'p24',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'chameleon',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Inanimate Object"},"points":"3","per_level":"0"},{"name":{"en-US":"Voice"},"points":"2","per_level":"0"}]',
},
{
		 'id': 13,
	 name: {
		 'en-US': 'Construct',
	},
		 'book': 5,
		 'page': 'p24',
		 'cost': '8',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'construct',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 14,
	 name: {
		 'en-US': 'Copycat',
	},
		 'book': 5,
		 'page': 'p24',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'copycat',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Range"},"points":"2","per_level":"0"},{"name":{"en-US":"Devices"},"points":"2","per_level":"0"},{"name":{"en-US":"Duration"},"points":"3","per_level":"0"},{"name":{"en-US":"Magician"},"points":"2","per_level":"0"},{"name":{"en-US":"Nemesis"},"points":"1","per_level":"0"},{"name":{"en-US":"Overly Accurate"},"points":"-2","per_level":"0"},{"name":{"en-US":"Uncontrolled"},"points":"-2","per_level":"0"},{"name":{"en-US":"Versatility"},"points":"0","per_level":"0"}]',
},
{
		 'id': 15,
	 name: {
		 'en-US': 'Damage Field',
	},
		 'book': 5,
		 'page': 'p25',
		 'cost': '3',
		 'per_level': '1',
		 'max_level': '6',
		 'tag': 'damage-field',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Armor Piercing"},"points":"1","per_level":"0"},{"name":{"en-US":"Heavy Weapon"},"points":"1","per_level":"0"},{"name":{"en-US":"Medium Template"},"points":"3","per_level":"0"},{"name":{"en-US":"Permanent"},"points":"-2","per_level":"0"},{"name":{"en-US":"Selective"},"points":"2","per_level":"0"}]',
},
{
		 'id': 16,
	 name: {
		 'en-US': 'Danger Sense',
	},
		 'book': 5,
		 'page': 'p25',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'danger-sense',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 17,
	 name: {
		 'en-US': 'Decay',
	},
		 'book': 5,
		 'page': 'p25',
		 'cost': '4',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'decay',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Midas Touch"},"points":"-2","per_level":"0"},{"name":{"en-US":"Rapid Decay"},"points":"2","per_level":"0"},{"name":{"en-US":"Strong"},"points":"1","per_level":"0"}]',
},
{
		 'id': 18,
	 name: {
		 'en-US': 'Deflection',
	},
		 'book': 5,
		 'page': 'p25',
		 'cost': '1',
		 'per_level': '1',
		 'max_level': '10',
		 'tag': 'deflection',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Protector"},"points":"0","per_level":"0"}]',
},
{
		 'id': 19,
	 name: {
		 'en-US': 'Doesn\'t Breathe',
	},
		 'book': 5,
		 'page': 'p26',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'doesnt-breathy',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 20,
	 name: {
		 'en-US': 'Doesn\'t Eat',
	},
		 'book': 5,
		 'page': 'p26',
		 'cost': '1',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'doesnt-eat',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 21,
	 name: {
		 'en-US': 'Doesn\'t Sleep',
	},
		 'book': 5,
		 'page': 'p26',
		 'cost': '0',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'doesnt-sleep',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 22,
	 name: {
		 'en-US': 'Duplication',
	},
		 'book': 5,
		 'page': 'p26',
		 'cost': '3',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'duplication',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"No Tell"},"points":"1","per_level":"0"},{"name":{"en-US":"Promotion"},"points":"2","per_level":"0"}]',
},
{
		 'id': 23,
	 name: {
		 'en-US': 'Earthquake',
	},
		 'book': 5,
		 'page': '',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'earthquake',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Depth"},"points":"3","per_level":"0"},{"name":{"en-US":"Earthshake"},"points":"3","per_level":"0"},{"name":{"en-US":"Trigger"},"points":"1","per_level":"0"}]',
},
{
		 'id': 24,
	 name: {
		 'en-US': 'Energy Control',
	},
		 'book': 5,
		 'page': 'p27',
		 'cost': '5',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'energy-control',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Area Effect"},"points":"2","per_level":"0"},{"name":{"en-US":"Master"},"points":"5","per_level":"0"},{"name":{"en-US":"Range"},"points":"2","per_level":"0"},{"name":{"en-US":"Selective"},"points":"2","per_level":"0"}]',
},
{
		 'id': 25,
	 name: {
		 'en-US': 'Ensnare',
	},
		 'book': 5,
		 'page': 'p26',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'ensnare',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Area Effect"},"points":"0","per_level":"0"},{"name":{"en-US":"Very Strong"},"points":"2","per_level":"0"}]',
},
{
		 'id': 26,
	 name: {
		 'en-US': 'Explode',
	},
		 'book': 5,
		 'page': 'p28',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '5',
		 'tag': 'explode',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Fatigued"},"points":"-2","per_level":"0"},{"name":{"en-US":"Heavy Weapon"},"points":"1","per_level":"0"},{"name":{"en-US":"Large Template"},"points":"1","per_level":"0"}]',
},
{
		 'id': 27,
	 name: {
		 'en-US': 'Extra Actions',
	},
		 'book': 5,
		 'page': 'p28',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'extra-actions',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Fast Action"},"points":"2","per_level":"0"}]',
},
{
		 'id': 28,
	 name: {
		 'en-US': 'Extra Limbs',
	},
		 'book': 5,
		 'page': 'p28',
		 'cost': '3',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'extra-limbs',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Reach"},"points":"2","per_level":"0"}]',
},
{
		 'id': 29,
	 name: {
		 'en-US': 'Fear',
	},
		 'book': 5,
		 'page': 'p28',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'fear',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Scary"},"points":"-2","per_level":"0"},{"name":{"en-US":"Terror"},"points":"2","per_level":"0"}]',
},
{
		 'id': 30,
	 name: {
		 'en-US': 'Fearless',
	},
		 'book': 5,
		 'page': 'p28',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'fearless',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 31,
	 name: {
		 'en-US': 'Flight',
	},
		 'book': 5,
		 'page': 'p29',
		 'cost': '0',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'flight',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Climb"},"points":"1","per_level":"1"}]',
},
{
		 'id': 32,
	 name: {
		 'en-US': 'Force Control',
	},
		 'book': 5,
		 'page': 'p29',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'force-control',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Area Effect"},"points":"2","per_level":"0"},{"name":{"en-US":"Force Field"},"points":"3","per_level":"0"},{"name":{"en-US":"Heavy Weapon"},"points":"2","per_level":"0"},{"name":{"en-US":"Range"},"points":"1","per_level":"0"}]',
},
{
		 'id': 33,
	 name: {
		 'en-US': 'Gifted',
	},
		 'book': 5,
		 'page': 'p30',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'gifted',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 34,
	 name: {
		 'en-US': 'Growth',
	},
		 'book': 5,
		 'page': 'p30',
		 'cost': '3',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'growth',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Big Fists"},"points":"0","per_level":"0"},{"name":{"en-US":"Fast Growth"},"points":"2","per_level":"0"},{"name":{"en-US":"Long Stride"},"points":"2","per_level":"0"},{"name":{"en-US":"Monster"},"points":"-2","per_level":"0"}]',
},
{
		 'id': 35,
	 name: {
		 'en-US': 'Healing',
	},
		 'book': 5,
		 'page': 'p30',
		 'cost': '5',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'healing',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Cure"},"points":"3","per_level":"0"},{"name":{"en-US":"Refresh"},"points":"0","per_level":"0"},{"name":{"en-US":"Restoration"},"points":"2","per_level":"0"},{"name":{"en-US":"Resurrection"},"points":"8","per_level":"0"}]',
},
{
		 'id': 36,
	 name: {
		 'en-US': 'Heightened Senses',
	},
		 'book': 5,
		 'page': 'p31',
		 'cost': '1',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'heightened-senses',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Spatial Sense"},"points":"2","per_level":"0"}]',
},
{
		 'id': 37,
	 name: {
		 'en-US': 'Illusion',
	},
		 'book': 5,
		 'page': 'p31',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'illusion',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Film Quality"},"points":"1","per_level":"0"},{"name":{"en-US":"Obscurement"},"points":"0","per_level":"0"},{"name":{"en-US":"System Shock"},"points":"2","per_level":"0"},{"name":{"en-US":"Targeted"},"points":"-1","per_level":"0"}]',
},
{
		 'id': 38,
	 name: {
		 'en-US': 'Immune to Poison/Disease',
	},
		 'book': 5,
		 'page': 'p32',
		 'cost': '1',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'immune-to-poison-disease',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 39,
	 name: {
		 'en-US': 'Infection',
	},
		 'book': 5,
		 'page': 'p32',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'infection',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Carrier"},"points":"-1","per_level":"0"},{"name":{"en-US":"Contagious"},"points":"2","per_level":"0"},{"name":{"en-US":"Strong"},"points":"1","per_level":"0"}]',
},
{
		 'id': 40,
	 name: {
		 'en-US': 'Intangibility',
	},
		 'book': 5,
		 'page': 'p32',
		 'cost': '5',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'intangibility',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Phase"},"points":"5","per_level":"0"},{"name":{"en-US":"Permanent"},"points":"-2","per_level":"0"},{"name":{"en-US":"Reflexive Contro"},"points":"2","per_level":"0"},{"name":{"en-US":"Tag Along"},"points":"2","per_level":"0"}]',
},
{
		 'id': 41,
	 name: {
		 'en-US': 'Interface',
	},
		 'book': 5,
		 'page': 'p33',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'interface',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Code Breaker"},"points":"1","per_level":"0"}]',
},
{
		 'id': 42,
	 name: {
		 'en-US': 'Invent',
	},
		 'book': 5,
		 'page': 'p33',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'invent',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"On The Fly"},"points":"3","per_level":"0"}]',
},
{
		 'id': 43,
	 name: {
		 'en-US': 'Invisibility',
	},
		 'book': 5,
		 'page': 'p34',
		 'cost': '4',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'invisibility',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Permanent"},"points":"-2","per_level":"0"},{"name":{"en-US":"Personal"},"points":"-2","per_level":"0"},{"name":{"en-US":"Projection"},"points":"0","per_level":"0"}]',
},
{
		 'id': 44,
	 name: {
		 'en-US': 'Jinx',
	},
		 'book': 5,
		 'page': 'p34',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'jinx',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Improved Jinx"},"points":"2","per_level":"0"}]',
},
{
		 'id': 45,
	 name: {
		 'en-US': 'Leaping',
	},
		 'book': 5,
		 'page': 'p34',
		 'cost': '1',
		 'per_level': '1',
		 'max_level': '5',
		 'tag': 'leaping',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Bounce"},"points":"1","per_level":"0"},{"name":{"en-US":"Death From Above"},"points":"1","per_level":"0"}]',
},
{
		 'id': 46,
	 name: {
		 'en-US': 'Malfunction',
	},
		 'book': 5,
		 'page': 'p34',
		 'cost': '3',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'malfunction',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Area Effect"},"points":"2","per_level":"0"}]',
},
{
		 'id': 47,
	 name: {
		 'en-US': 'Matter Control',
	},
		 'book': 5,
		 'page': 'p35',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'matter-control',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Constructs"},"points":"3","per_level":"0"},{"name":{"en-US":"Master"},"points":"5","per_level":"0"},{"name":{"en-US":"Range"},"points":"2","per_level":"0"},{"name":{"en-US":"Requires Material"},"points":"-2","per_level":"0"}]',
},
{
		 'id': 48,
	 name: {
		 'en-US': 'Mind Control',
	},
		 'book': 5,
		 'page': 'p36',
		 'cost': '5',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'mind-control',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Memory Alteration"},"points":"0","per_level":"0"},{"name":{"en-US":"Multiple Minds"},"points":"2","per_level":"0"}]',
},
{
		 'id': 49,
	 name: {
		 'en-US': 'Mind Reading',
	},
		 'book': 5,
		 'page': 'p37',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'mind-reading',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Memory Mastery"},"points":"3","per_level":"0"},{"name":{"en-US":"Mind Reader"},"points":"3","per_level":"0"}]',
},
{
		 'id': 50,
	 name: {
		 'en-US': 'Minions',
	},
		 'book': 5,
		 'page': 'p37',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'minions',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Summonable"},"points":"4","per_level":"0"},{"name":{"en-US":"Super Powers"},"points":"0","per_level":"0"}]',
},
{
		 'id': 51,
	 name: {
		 'en-US': 'Negation',
	},
		 'book': 5,
		 'page': 'p38',
		 'cost': '4',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'negation',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Full Spectrum"},"points":"5","per_level":"0"},{"name":{"en-US":"Leach"},"points":"5","per_level":"0"}]',
},
{
		 'id': 52,
	 name: {
		 'en-US': 'Paralysis',
	},
		 'book': 5,
		 'page': 'p38',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'paralysis',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Strong"},"points":"1","per_level":"0"}]',
},
{
		 'id': 53,
	 name: {
		 'en-US': 'Parry',
	},
		 'book': 5,
		 'page': 'p38',
		 'cost': '1',
		 'per_level': '1',
		 'max_level': '10',
		 'tag': 'parry',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Deflect"},"points":"4","per_level":"0"},{"name":{"en-US":"Protector"},"points":"0","per_level":"0"}]',
charEffect: function( charObject, powerObj ) {
// Affect Character Object Code here
//console.log( "powerObj", powerObj);
//console.log( "powerObj.level", powerObj.level);
if( powerObj.selectedLevel )
    charObject.derived.parry += parseInt(powerObj.selectedLevel);
}
},
{
		 'id': 54,
	 name: {
		 'en-US': 'Poison',
	},
		 'book': 5,
		 'page': 'p38',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'poison',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Knockout"},"points":"3","per_level":"0"},{"name":{"en-US":"Lethal"},"points":"5","per_level":"0"},{"name":{"en-US":"Strong"},"points":"1","per_level":"0"}]',
},
{
		 'id': 55,
	 name: {
		 'en-US': 'Possession',
	},
		 'book': 5,
		 'page': 'p39',
		 'cost': '8',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'possession',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Memories"},"points":"2","per_level":"0"}]',
},
{
		 'id': 56,
	 name: {
		 'en-US': 'Regeneration',
	},
		 'book': 5,
		 'page': 'p39',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '5',
		 'tag': 'regeneration',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Recovery"},"points":"1","per_level":"0"},{"name":{"en-US":"Regrowth"},"points":"2","per_level":"0"}]',
},
{
		 'id': 57,
	 name: {
		 'en-US': 'Resistance',
	},
		 'book': 5,
		 'page': 'p39',
		 'cost': '0',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'resistance',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 58,
	 name: {
		 'en-US': 'Shape Change',
	},
		 'book': 5,
		 'page': 'p40',
		 'cost': '0',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'shape-change',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Speech"},"points":"2","per_level":"0"},{"name":{"en-US":"Swarm"},"points":"0","per_level":"0"}]',
},
{
		 'id': 59,
	 name: {
		 'en-US': 'Shrink',
	},
		 'book': 5,
		 'page': 'p40',
		 'cost': '4',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'shrink',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Quick Change"},"points":"1","per_level":"0"},{"name":{"en-US":"Tiny"},"points":"4","per_level":"0"}]',
},
{
		 'id': 61,
	 name: {
		 'en-US': 'Sidekick',
	},
		 'book': 5,
		 'page': 'p41',
		 'cost': '5',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'sidekick',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 60,
	 name: {
		 'en-US': 'Speak Language',
	},
		 'book': 5,
		 'page': 'p41',
		 'cost': '1',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'spea-language',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Written Word"},"points":"1","per_level":"0"}]',
},
{
		 'id': 62,
	 name: {
		 'en-US': 'Speed',
	},
		 'book': 5,
		 'page': '',
		 'cost': '0',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'speed',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Blinding Reflexes"},"points":"2","per_level":"0"},{"name":{"en-US":"Catch and Throw"},"points":"2","per_level":"0"},{"name":{"en-US":"Pummel"},"points":"1","per_level":"0"},{"name":{"en-US":"Surface Tension"},"points":"1","per_level":"0"},{"name":{"en-US":"Vibrate"},"points":"5","per_level":"0"},{"name":{"en-US":"Whirlwind"},"points":"2","per_level":"0"}]',
},
{
		 'id': 63,
	 name: {
		 'en-US': 'Storm',
	},
		 'book': 5,
		 'page': 'p42',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'storm',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Downpour"},"points":"1","per_level":"0"},{"name":{"en-US":"Gale Force"},"points":"1","per_level":"0"},{"name":{"en-US":"Lightning Strike"},"points":"3","per_level":"0"}]',
},
{
		 'id': 64,
	 name: {
		 'en-US': 'Sturn',
	},
		 'book': 5,
		 'page': 'p42',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'stun',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Area Effect"},"points":"0","per_level":"0"},{"name":{"en-US":"Selective"},"points":"2","per_level":"0"},{"name":{"en-US":"Strong"},"points":"1","per_level":"0"}]',
},
{
		 'id': 65,
	 name: {
		 'en-US': 'Super Attribute',
	},
		 'book': 5,
		 'page': 'p43',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'super-attribute',
		 'boost_attribute': 1,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Not Today"},"points":"2","per_level":"0"}]',
},
{
		 'id': 66,
	 name: {
		 'en-US': 'Super Skill',
	},
		 'book': 5,
		 'page': 'p43',
		 'cost': '1',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'super-skill',
		 'boost_attribute': 0,
		 'boost_skill': 1,
		 'modifiers': '[]',
},
{
		 'id': 67,
	 name: {
		 'en-US': 'Super Sorcery',
	},
		 'book': 5,
		 'page': 'p43',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'super-sorcery',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 68,
	 name: {
		 'en-US': 'Swinging',
	},
		 'book': 5,
		 'page': 'p45',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'swinging',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Strong Line"},"points":"1","per_level":"1"}]',
},
{
		 'id': 69,
	 name: {
		 'en-US': 'Telekinesis',
	},
		 'book': 5,
		 'page': 'p45',
		 'cost': '2',
		 'per_level': '1',
		 'max_level': '0',
		 'tag': 'telekinesis',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Focus"},"points":"3","per_level":"0"},{"name":{"en-US":"Heavy Weapon"},"points":"1","per_level":"0"},{"name":{"en-US":"Range"},"points":"2","per_level":"0"}]',
},
{
		 'id': 70,
	 name: {
		 'en-US': 'Telepathy',
	},
		 'book': 5,
		 'page': 'p45',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'telepathy',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Broadcast"},"points":"0","per_level":"0"},{"name":{"en-US":"Mind Reader"},"points":"3","per_level":"0"},{"name":{"en-US":"Switchboard"},"points":"2","per_level":"0"}]',
},
{
		 'id': 71,
	 name: {
		 'en-US': 'Teleport',
	},
		 'book': 5,
		 'page': 'p45',
		 'cost': '3',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': '5eleport',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Range"},"points":"0","per_level":"0"},{"name":{"en-US":"Rapid Telepor"},"points":"3","per_level":"0"},{"name":{"en-US":"Teleport Other"},"points":"5","per_level":"0"},{"name":{"en-US":"Traverse"},"points":"3","per_level":"0"}]',
},
{
		 'id': 72,
	 name: {
		 'en-US': 'Toughness',
	},
		 'book': 5,
		 'page': 'p46',
		 'cost': '1',
		 'per_level': '1',
		 'max_level': '10',
		 'tag': 'toughness',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
charEffect: function( charObject, powerObject ) {
	// Affect Character Object Code here
	charObject.derived.toughness += powerObject.selectedLevel * 2;
}
},
{
		 'id': 73,
	 name: {
		 'en-US': 'Uncanny Reflexes',
	},
		 'book': 5,
		 'page': 'p46',
		 'cost': '0',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'uncanny-reflexes',
		 'boost_attribute': 0,
		 'boost_skill': 1,
		 'modifiers': '[{"name":{"en-US":"Blinding Reflexes"},"points":"2","per_level":"0"}]',
},
{
		 'id': 74,
	 name: {
		 'en-US': 'Undead',
	},
		 'book': 5,
		 'page': 'p47',
		 'cost': '10',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'undead',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 75,
	 name: {
		 'en-US': 'Wall Walker',
	},
		 'book': 5,
		 'page': 'p47',
		 'cost': '1',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'wall-walker',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[]',
},
{
		 'id': 76,
	 name: {
		 'en-US': 'Whirlwind',
	},
		 'book': 5,
		 'page': 'p47',
		 'cost': '2',
		 'per_level': '0',
		 'max_level': '0',
		 'tag': 'whirlwind',
		 'boost_attribute': 0,
		 'boost_skill': 0,
		 'modifiers': '[{"name":{"en-US":"Large Template"},"points":"2","per_level":"0"},{"name":{"en-US":"Twister"},"points":"2","per_level":"0"}]',
}
);

