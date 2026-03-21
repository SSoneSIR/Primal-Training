import { Controller, Get, Inject } from "@nestjs/common";
import { ApiOkResponse, ApiTags } from "@nestjs/swagger";
import type { HealthPayload } from "./app.service";
import { AppService } from "./app.service";

@ApiTags("health")
@Controller()
export class AppController {
	constructor(@Inject(AppService) private readonly appService: AppService) {}

	@Get()
	@ApiOkResponse({
		description: "Basic health response for the starter API.",
	})
	getHealth(): HealthPayload {
		return this.appService.getHealth();
	}
}
