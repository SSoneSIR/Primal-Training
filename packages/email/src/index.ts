import nodemailer from "nodemailer";

export type EmailMessage = {
	from: string;
	to: string;
	subject: string;
	html: string;
};

export function createEmailClient() {
	return nodemailer.createTransport({
		jsonTransport: true,
	});
}

export async function sendEmail(message: EmailMessage) {
	const client = createEmailClient();

	return client.sendMail(message);
}
