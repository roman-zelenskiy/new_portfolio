import { addCollection } from '@iconify/vue';

// Load icons
export default addCollection({
		prefix: 'rz',
		icons: {
			'arrow-sm': {
				body: '<path d="M19 11L3 11" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>' +
					  '<path d="M13 5L19 11L13 17" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
				width: 22,
				height: 22
			},
			arrow: {
				body: '<path d="M42 12H6" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>\n' +
					  '<path d="M36 6L42 12L36 18" fill="none" stroke="#141414" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>',
				width: 46,
				height: 24
			},
		},
		width: 24,
		height: 24
	},
	'custom'
);
