import { Module } from '@nestjs/common';
import { UserExternalDocsController } from './user-external-docs.controller';
import { UserExternalDocsService } from './user-external-docs.service';
import { KafkaService } from '@app/lib-kafka';

@Module({
	imports: [],
	controllers: [UserExternalDocsController],
	providers: [UserExternalDocsService, KafkaService],
})
export class UserExternalDocsModule {}
