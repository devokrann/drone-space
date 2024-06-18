import React from "react";
import { useRef } from "react";

import { Image } from "@mantine/core";
import { Carousel, CarouselSlide } from "@mantine/carousel";

import Autoplay from "embla-carousel-autoplay";

import image from "@src/assets/images";

import classes from "./Ad.module.scss";

const data = [
	{ title: "June Intake", image: image.popups.intakes.yr2024.jun.portrait },
	{ title: "Radiotelephony", image: image.popups.courses.yr2024.jul.radiotelephony.portrait },
];

export default function Ad() {
	const autoplay = useRef(Autoplay({ delay: 5000 }));

	const slides = data.map(slide => (
		<CarouselSlide key={slide.title}>
			<Image src={slide.image} loading="lazy" />
		</CarouselSlide>
	));

	return (
		<Carousel
			withIndicators={data.length > 1}
			withControls={data.length > 1}
			slideGap={"xs"}
			loop
			classNames={{ root: classes.root, control: classes.control }}
			plugins={[autoplay.current]}
		>
			{slides}
		</Carousel>
	);
}
