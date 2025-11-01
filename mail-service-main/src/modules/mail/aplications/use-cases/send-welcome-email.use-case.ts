import { Injectable } from "@nestjs/common";
import { NodemailerService } from "../../domain/services/nodemail.service";

@Injectable()
export class SendWelcomeEmailUseCase {
  constructor(private readonly mailer: NodemailerService) {}

  async execute(email: string, name: string) {
    const html = `<h1>Bem-vindo, ${name}!</h1><p>obrigada por se cadastrar na biblioteca</p>`;
    await this.mailer.sendTemplate(
        email,
    "bem-vindo à library-service",
    "welcome",
    { name }
);

  }
}
