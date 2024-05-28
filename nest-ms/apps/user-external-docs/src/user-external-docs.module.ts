import { Module } from '@nestjs/common';
import { UserExternalDocsController } from './user-external-docs.controller';
import { UserExternalDocsService } from './user-external-docs.service';

@Module({
	imports: [],
	controllers: [UserExternalDocsController],
	providers: [UserExternalDocsService],
})
export class UserExternalDocsModule {}
