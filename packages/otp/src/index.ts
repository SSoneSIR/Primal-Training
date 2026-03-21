import { randomInt } from "node:crypto";

export function generateOtp(length = 6) {
	return Array.from({ length }, () => randomInt(0, 10)).join("");
}

export function isOtpMatch(expected: string, provided: string) {
	return expected === provided.trim();
}
