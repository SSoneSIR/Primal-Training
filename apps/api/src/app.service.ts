import { Injectable } from "@nestjs/common";

export type HealthPayload = {
	name: string;
	status: "ok";
	docs: string;
	client: string;
	database: string;
};

@Injectable()
export class AppService {
	getHealth(): HealthPayload {
		return {
			name: "primal-training-api",
			status: "ok",
			docs: "/api",
			client: "http://localhost:3000",
			database: "postgresql://postgres:password@localhost:5432/primal_training",
		};
	}
}
