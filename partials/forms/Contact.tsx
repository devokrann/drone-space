"use client";

import React, { useState } from "react";

import { Box, Button, Center, Checkbox, Grid, GridCol, TextInput, Textarea } from "@mantine/core";
import { useForm } from "@mantine/form";
import { notifications } from "@mantine/notifications";

import { IconCheck, IconX } from "@tabler/icons-react";

import text from "@/handlers/validators/form/special/text";
import hasLength from "@/handlers/validators/form/generic/length";
import email from "@/handlers/validators/form/special/email";
import phone from "@/handlers/validators/form/special/phone";
import capitalize from "@/handlers/parsers/string/capitalize";

import request from "@/hooks/request";

export default function Contact({
	data,
	inquiry,
}: {
	data?: { subject?: string };
	inquiry?: "training" | "callback" | "shop" | "technical" | "general" | "shows" | "brochure";
}) {
	const [submitted, setSubmitted] = useState(false);

	const form = useForm({
		initialValues: {
			fname: "",
			lname: "",
			email: "",
			phone: "",
			company: "",
			subject: data?.subject ? data.subject : "",
			message: "",
			newsletter: true,
		},

		validate: {
			fname: value => text(value, 2, 24),
			lname: value => text(value, 2, 24),
			email: value => email(value),
			phone: value => (inquiry == "callback" ? phone(value) : value.trim().length > 0 && phone(value)),
			company: value => value.trim().length > 0 && text(value, 2, 24),
			subject: value => (inquiry == "callback" ? null : hasLength.string(value, 3, 255, () => null)),
			message: value => (inquiry == "callback" ? null : hasLength.string(value, 3, 2048, () => null)),
		},
	});

	const parse = () => {
		return {
			fname: capitalize.word(form.values.fname.trim()),
			lname: capitalize.word(form.values.lname.trim()),
			email: form.values.email.trim().toLowerCase(),
			phone: form.values.phone?.trim() ? (form.values.phone.trim().length > 0 ? form.values.phone : null) : null,
			company: capitalize.words(form.values.company.trim()),
			subject: capitalize.words(form.values.subject.trim()),
			message: form.values.message.trim(),
			newsletter: form.values.newsletter,
		};
	};

	const handleSubmit = async () => {
		if (form.isValid()) {
			try {
				setSubmitted(true);

				const res = await request.post(process.env.NEXT_PUBLIC_API_URL + "/api/contact", {
					method: "POST",
					body: JSON.stringify({ ...parse(), inquiry: inquiry ? inquiry : "general" }),
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
				});

				if (!res) {
					notifications.show({
						id: "form-contact-failed-no-response",
						icon: <IconX size={16} stroke={1.5} />,
						title: "Server Unavailable",
						message: `There was no response from the server.`,
						variant: "failed",
					});
				} else {
					notifications.show({
						id: "form-contact-success",
						icon: <IconCheck size={16} stroke={1.5} />,
						title: "Form Submitted",
						message: "Someone will get back to you within 24 hours",
						variant: "success",
					});
				}
			} catch (error) {
				notifications.show({
					id: "form-contact-failed",
					icon: <IconX size={16} stroke={1.5} />,
					title: "Submisstion Failed",
					message: (error as Error).message,
					variant: "failed",
				});
			} finally {
				form.reset();
				setSubmitted(false);
			}
		}
	};

	return (
		<Box component="form" onSubmit={form.onSubmit(values => handleSubmit())} noValidate>
			<Grid gutter={"xs"}>
				<GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required
						// label={"First Name"}
						placeholder="First Name *"
						{...form.getInputProps("fname")}
					/>
				</GridCol>

				<GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required
						// label={"Last Name"}
						placeholder="Last Name *"
						{...form.getInputProps("lname")}
					/>
				</GridCol>

				<GridCol span={{ base: 12 }}>
					<TextInput
						required
						// label={"Email"}
						placeholder={`Email *`}
						{...form.getInputProps("email")}
					/>
				</GridCol>

				<GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						required={inquiry == "callback"}
						// label={"Phone"}
						placeholder={`Phone${inquiry == "callback" ? " *" : ""}`}
						{...form.getInputProps("phone")}
					/>
				</GridCol>

				<GridCol span={{ base: 12, xs: 6, sm: 12, md: 6 }}>
					<TextInput
						// label={"Company"}
						placeholder="Company"
						{...form.getInputProps("company")}
					/>
				</GridCol>

				{inquiry != "callback" && (
					<GridCol span={12}>
						<TextInput
							required
							// label="Inquiry"
							placeholder="Inquiry *"
							{...form.getInputProps("subject")}
						/>
					</GridCol>
				)}

				{inquiry != "callback" && (
					<GridCol span={12}>
						<Textarea
							required
							// label={"Message"}
							placeholder={`Message *`}
							autosize
							minRows={5}
							maxRows={10}
							{...form.getInputProps("message")}
						/>
					</GridCol>
				)}

				<GridCol span={12}>
					<Checkbox
						label="Sign up for Drone Space newsletter"
						key={form.key("newsletter")}
						{...form.getInputProps("newsletter", { type: "checkbox" })}
						size="xs"
					/>
				</GridCol>

				<GridCol span={12}>
					<Grid gutter={"xs"} mt={"md"}>
						<GridCol span={{ base: 12, md: 6 }} visibleFrom="md">
							<Center>
								<Button
									fullWidth
									type="reset"
									variant="light"
									onClick={() => form.reset()}
									disabled={submitted}
								>
									Clear
								</Button>
							</Center>
						</GridCol>
						<GridCol span={{ base: 12, md: 6 }}>
							<Center>
								<Button fullWidth type="submit" loading={submitted}>
									{submitted ? "Submitting" : "Submit"}
								</Button>
							</Center>
						</GridCol>
					</Grid>
				</GridCol>
			</Grid>
		</Box>
	);
}
