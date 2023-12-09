import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { NestExpressApplication } from "@nestjs/platform-express";
import { SwaggerModule, DocumentBuilder, OpenAPIObject } from "@nestjs/swagger";

function buildApiDocs(app: NestExpressApplication): void {
  const config: Omit<OpenAPIObject, "paths"> = new DocumentBuilder()
    .setTitle("FIAP - Software Architecture - Tech Challenge")
    .setDescription(
      "Tech challenge for postgraduate studies in software architecture",
    )
    .setVersion("1.0")
    .addTag("FIAP - Pós Software Architecture")
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup("docs", app, document);
}
async function bootstrap() {
  const app: NestExpressApplication = await NestFactory.create(AppModule);
  buildApiDocs(app);
  await app.listen(3000);
}
bootstrap();
