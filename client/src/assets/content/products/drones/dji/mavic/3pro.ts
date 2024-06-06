const mavic3Pro = {
	title: { long: "DJI Mavic 3 Pro", short: "Mavic 3 Pro" },

	specs: [
		"4/3 CMOS Hasselblad Camera",
		"Dual Tele Cameras",
		"Tri-Camera Apple ProRes Support",
		"43-Min Max Flight Time",
		"Omnidirectional Obstacle Sensing",
		"15km HD Video Transmission",
	],

	price: {
		former: "530,000",
		// latter: "930,000",
		// change: "-0.2"
	},

	category: "camera",

	kit: {
		basic: {
			contents: [
				"DJI Mavic 3 Pro x1",
				"DJI RC x1",
				"DJI RC Control Sticks (Pair) x1",
				"DJI Mavic 3 Intelligent Flight Battery x1",
				"Spare DJI Mavic 3 Low-Noise Propellers (pair) x1",
				"DJI 65W Portable Charger x1",
				"DJI Mavic 3 Pro Storage Cover x1",
				"USB 3.0 Type-C Cable x1",
			],
		},

		flyMore: {
			contents: [
				"DJI Mavic 3 Intelligent Flight Battery × 2",
				"DJI Mavic 3 100W Battery Charging Hub × 1",
				"DJI 65W Car Charger × 1",
				"DJI Mavic 3 Low-Noise Propellers (pair) × 3",
				"DJI Convertible Carrying Bag × 1",
				"Shoulder Bag × 1",
			],

			price: {
				former: "125,000",
				// latter: "120,000",
				// change: "-4"
			},
		},
	},

	accessories: {
		battery: {
			title: { long: "Intelligent Battery", short: null },
			specs: [
				"Offers a max flight time of 46 minutes (40 minutes when hovering)",
				"Compatibility: DJI Mavic 3 Pro, DJI Mavic 3 Pro Cine, DJI Mavic 3",
				"Classic, DJI Mavic 3, DJI Mavic 3 Cine, DJI Mavic 3 Enterprise Series",
			],
			price: {
				former: "49,000",
				// latter: "41,000",
				// change: "-16.3"
			},
		},
		other: null,
	},
};

export default mavic3Pro;
