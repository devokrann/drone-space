"use client";

import React from "react";

import NextImage from "next/image";

import { Modal, Grid, GridCol, Group, Image, Text, Stack } from "@mantine/core";
import { useDisclosure, useMediaQuery } from "@mantine/hooks";

import FormContact from "@/partials/forms/Contact";

import images from "@/assets/images";

export default function Training({ children }: { children: React.ReactNode }) {
	const [opened, { open, close }] = useDisclosure(false);
	const desktoplg = useMediaQuery("(min-width: 75em)");

	return (
		<>
			<Modal
				opened={opened}
				onClose={close}
				size={desktoplg ? 960 : "xl"}
				centered
				title={
					<Text component="span" inherit fw={"bold"} c={"pri"}>
						Drone Training Inquiry
					</Text>
				}
			>
				<Grid>
					<GridCol span={{ base: 12, sm: 6 }} visibleFrom="sm">
						<Stack h={"100%"}>
							<Image
								src={images.gallery.airfield.image1}
								alt={"Training Crew"}
								loading="lazy"
								radius={"sm"}
								mih={"100%"}
								component={NextImage}
								width={1920}
								height={1080}
							/>
						</Stack>
					</GridCol>
					<GridCol span={{ base: 12, sm: 6 }}>
						<FormContact data={{ subject: "Drone Training Inquiry" }} inquiry="training" />
					</GridCol>
				</Grid>
			</Modal>

			<span style={{ display: "inline" }} onClick={open}>
				{children}
			</span>
		</>
	);
}
