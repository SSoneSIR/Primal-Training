import { Controller, Get } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";

import type { AppService, HealthPayload } from "./app.service";

@ApiTags("health")
@Controller()
export class AppController {
	constructor(private readonly appService: AppService) {}

	@Get()
	@ApiOkResponse({
		description: "Basic health response for the starter API.",
	})
	getHealth(): HealthPayload {
		return this.appService.getHealth();
	}
}
