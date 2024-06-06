import React from "react";

import { Container, Grid, GridCol, Tabs, TabsList, TabsPanel, TabsTab } from "@mantine/core";

import Layout from "@src/layouts";
import Component from "@src/components";

import data from "@src/data";
import Partial from "@src/partials";

export default function Gallery() {
	return (
		<Layout.Page
			header={<Partial.Head.Root />}
			nav={<Partial.Navbar.Root />}
			hero={<Component.Hero.Route />}
			footer={<Partial.Footer.Root />}
		>
			<Layout.Section.Main>
				<Container>
					<Tabs defaultValue={"conference"} classNames={{}}>
						<TabsList mb={"xl"} grow>
							<TabsTab value="conference">Conference</TabsTab>
							<TabsTab value="expo">Expo</TabsTab>
							<TabsTab value="hackathon">Hackathon</TabsTab>
							<TabsTab value="graduation">Graduation</TabsTab>
							<TabsTab value="innovation">Innovation</TabsTab>
							<TabsTab value="projects">Projects</TabsTab>
							<TabsTab value="airfield">Airfield</TabsTab>
						</TabsList>

						<TabsPanel value="conference">
							<Grid>
								{data.tabs.gallery.conference.yr2024.map((item, id) => (
									<GridCol
										key={id}
										span={{
											base: 12,
											xs: 6,
											sm: 4,
											md: 3,
										}}
									>
										<Component.Modal.Gallery img={item} />
									</GridCol>
								))}
							</Grid>
						</TabsPanel>

						<TabsPanel value="expo">
							<Grid>
								{data.tabs.gallery.expo.yr2024.map((item, id) => (
									<GridCol
										key={id}
										span={{
											base: 12,
											xs: 6,
											sm: 4,
											md: 3,
										}}
									>
										<Component.Modal.Gallery img={item} />
									</GridCol>
								))}
							</Grid>
						</TabsPanel>

						<TabsPanel value="hackathon">
							<Grid>
								{data.tabs.gallery.hackathon.yr2024.map((item, id) => (
									<GridCol
										key={id}
										span={{
											base: 12,
											xs: 6,
											sm: 4,
											md: 3,
										}}
									>
										<Component.Modal.Gallery img={item} />
									</GridCol>
								))}
							</Grid>
						</TabsPanel>

						<TabsPanel value="graduation">
							<Grid>
								{data.tabs.gallery.graduation.yr2022.map((item, id) => (
									<GridCol
										key={id}
										span={{
											base: 12,
											xs: 6,
											sm: 4,
											md: 3,
										}}
									>
										<Component.Modal.Gallery img={item} />
									</GridCol>
								))}
							</Grid>
						</TabsPanel>

						<TabsPanel value="innovation">
							<Grid>
								{data.tabs.gallery.innovation.jamuhuri.map((item, id) => (
									<GridCol
										key={id}
										span={{
											base: 12,
											xs: 6,
											sm: 4,
											md: 3,
										}}
									>
										<Component.Modal.Gallery img={item} />
									</GridCol>
								))}
							</Grid>
						</TabsPanel>

						<TabsPanel value="projects">
							<Grid>
								{data.tabs.gallery.projects.project.map((item, id) => (
									<GridCol
										key={id}
										span={{
											base: 12,
											xs: 6,
											sm: 4,
											md: 3,
										}}
									>
										<Component.Modal.Gallery img={item} />
									</GridCol>
								))}
							</Grid>
						</TabsPanel>

						<TabsPanel value="airfield">
							<Grid>
								{data.tabs.gallery.airfield.map((item, id) => (
									<GridCol
										key={id}
										span={{
											base: 12,
											xs: 6,
											sm: 4,
											md: 3,
										}}
									>
										<Component.Modal.Gallery img={item} />
									</GridCol>
								))}
							</Grid>
						</TabsPanel>
					</Tabs>
				</Container>
			</Layout.Section.Main>
		</Layout.Page>
	);
}
