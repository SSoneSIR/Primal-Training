import { ValidationPipe } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { NestFactory } from "@nestjs/core";
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

import { AppModule } from "./app.module";

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	const configService = app.get(ConfigService);
	const port = configService.get<number>("PORT", 5000);
	const corsOrigins = configService.get<string>(
		"CORS_ORIGINS",
		"http://localhost:3000",
	);

	app.enableCors({
		origin: corsOrigins.split(",").map((origin) => origin.trim()),
		credentials: true,
	});
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true,
		}),
	);

	const swaggerConfig = new DocumentBuilder()
		.setTitle("Primal Training API")
		.setDescription("Starter API scaffold aligned with the Bullhouse stack.")
		.setVersion("0.1.0")
		.build();

	const document = SwaggerModule.createDocument(app, swaggerConfig);
	SwaggerModule.setup("api", app, document);

	await app.listen(port, "0.0.0.0");
}

bootstrap();
